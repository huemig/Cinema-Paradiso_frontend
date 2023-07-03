import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import MainImage from "../components/common/MainImage";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../reducks/Movies/selectors";
import Preview from "../components/common/preview";
import API from "../API";
import { fetchMovies } from "../reducks/Movies/operations";
import like from "../assets/img/misc/like.png";
import left from "../assets/img/misc/left.png";
import right from "../assets/img/misc/right.png";
import { getFavorites } from "../reducks/favorites/Selectors";
import { addFavorite } from "../reducks/favorites/Operations";

const Home = () => {
  // Infinite Scroll Pagination Flow;\
  const [moviesComingSoon, setMoviesComingSoon] = useState(null);
  const [newlyReleased, setNewlyReleased] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const api = new API();

  const clickMovie = (movieId) => {
    setSelectedMovieId(movieId);
    setShowPreview(true);
  };

  const selector = useSelector((state) => state);
  const movies = getMovies(selector);

  const addToFavorites = (movie) => {
    const isMovieInFavorites = favorites.some(
      (favMovie) => favMovie.id === movie.id
    );

    if (!isMovieInFavorites) {
      const updatedFavorites = [...favorites, movie];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      console.log("Movie added to favorites:", movie);
    } else {
      console.log("Movie is already in favorites:", movie);
    }
  };

  const handlefavorite = (movie) => {
    addToFavorites(movie);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    api
      .getMovies()
      .then((movies) => {
        const filteredMovies = movies.results.filter(
          (movie) => movie.release_type === "Coming Soon"
        );
        setMoviesComingSoon(filteredMovies);
        console.log(filteredMovies);
      })
      .catch((error) => {
        alert("Failed To get Movies from Api");
      });
    api.getMovies().then((movies) => {
      const filteredMovies = movies.results.filter(
        (movie) => movie.release_type === "Newly Released"
      );
      setNewlyReleased(filteredMovies);
      console.log(filteredMovies);
    });
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Reference to a very last post element

  return (
    <>
      {showPreview && (
        <Preview
          setShowPreview={setShowPreview}
          selectedMovieId={selectedMovieId}
        />
      )}
      <Header />
      <MainImage />
      <div className="row">
        <p>---Coming Soon---</p>
        <div className="arrows">
          <a href="/">
            {" "}
            <img src={left} alt="prev" />{" "}
          </a>
          <a href="/">
            {" "}
            <img src={right} alt="next" />{" "}
          </a>
        </div>
      </div>

      <section className="movie_list">
        <div className="content">
          {moviesComingSoon &&
            moviesComingSoon.map((movie, index) => {
              const isMovieInFavorites = favorites.some(
                (favMovie) => favMovie.id === movie.id
              );
              return (
                <div className="tile" key={index}>
                  <div className="hold">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      onClick={() => clickMovie(movie.id)}
                    />
                  </div>
                  <h3>{movie.title}</h3>
                  <p>TV-MA| Action, crime</p>
                  <button>
                    <a href={movie.trailer_link} target="_blank">
                      Watch Now
                    </a>
                  </button>
                  {!isMovieInFavorites ? (
                    <div className="like" onClick={() => handlefavorite(movie)}>
                      <img src={like} alt="like" />
                    </div>
                  ) : null}
                </div>
              );
            })}
        </div>
      </section>
      <div className="row">
        <p>---New Releases---</p>
        <div className="arrows">
          <a href="/">
            {" "}
            <img src={left} alt="prev" />{" "}
          </a>
          <a href="/">
            {" "}
            <img src={right} alt="next" />{" "}
          </a>
        </div>
      </div>
      <section className="movie_list">
        <div className="content">
          {newlyReleased &&
            newlyReleased.map((movie, index) => {
              const isMovieInFavorites = favorites.some(
                (favMovie) => favMovie.id === movie.id
              );
              return (
                <div className="tile" key={index}>
                  <div className="hold">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      onClick={() => clickMovie(movie.id)}
                    />
                  </div>
                  <h3>{movie.title}</h3>
                  <p>TV-MA| Action, crime</p>
                  <button>
                    <a href={movie.trailer_link} target="_blank">
                      Watch Now
                    </a>
                  </button>
                  {!isMovieInFavorites ? (
                    <div className="like" onClick={() => handlefavorite(movie)}>
                      <img src={like} alt="like" />
                    </div>
                  ) : null}
                </div>
              );
            })}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
