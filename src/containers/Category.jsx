import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import like from "../assets/img/misc/like.png";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../reducks/Movies/selectors";
import { fetchMoviesAction } from "../reducks/Movies/actions";
import API from "../API";
import left from "../assets/img/misc/left.png";
import right from "../assets/img/misc/right.png";
import Preview from "../components/common/preview";

const api = new API();

const Category = () => {
  const [animated, setAnimated] = useState(null);
  const [crime, setCrime] = useState(null);
  const [action, setAction] = useState(null);
  const [romance, setRomance] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const clickMovie = (movieId) => {
    setSelectedMovieId(movieId);
    setShowPreview(true);
  };

  const selector = useSelector((state) => state);
  const movies = getMovies(selector);
  console.log(movies);

  const dispatch = useDispatch();

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

  useEffect(() => {
    api
      .getMovies()
      .then((movies) => {
        const filteredMovies = movies.results.filter(
          (movie) => movie.category_id === 3
        );
        setAction(filteredMovies);
        console.log(filteredMovies);
      })
      .catch((error) => {
        alert("Failed To get Movies from Api");
      });
    api
      .getMovies()
      .then((movies) => {
        const filteredMovies = movies.results.filter(
          (movie) => movie.category_id === 1
        );
        setCrime(filteredMovies);
        console.log(filteredMovies);
      })
      .catch((error) => {
        alert("Failed To get Movies from Api");
      });
    api
      .getMovies()
      .then((movies) => {
        const filteredMovies = movies.results.filter(
          (movie) => movie.category_id === 6
        );
        setAnimated(filteredMovies);
        console.log(filteredMovies);
      })
      .catch((error) => {
        alert("Failed To get Movies from Api");
      });
    api
      .getMovies()
      .then((movies) => {
        const filteredMovies = movies.results.filter(
          (movie) => movie.category_id === 5
        );
        setRomance(filteredMovies);
        console.log(filteredMovies);
      })
      .catch((error) => {
        alert("Failed to get movies from Api");
      });
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);
  // 1=crime
  //2=drama - not used
  //3=action
  //4=nothing?
  //5=romance
  //6=Animated
  return (
    <>
      {showPreview && (
        <Preview
          setShowPreview={setShowPreview}
          selectedMovieId={selectedMovieId}
        />
      )}
      <Header />
      <div class="row">
        <p>---Action---</p>
        <div class="arrows">
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
          {action &&
            action.length > 0 &&
            action.map((movie, index) => {
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
                    <div className="like">
                      <img src={like} alt="like" />
                    </div>
                  ) : null}
                </div>
              );
            })}
        </div>
      </section>
      <div class="row">
        <p>---Crime---</p>
        <div class="arrows">
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
          {crime &&
            crime.length > 0 &&
            crime.map((movie, index) => {
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
      <div class="row">
        <p>---Animated---</p>
        <div class="arrows">
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
          {animated &&
            animated.length > 0 &&
            animated.map((movie, index) => {
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
      <div class="row">
        <p>---Romance---</p>
        <div class="arrows">
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
          {romance &&
            romance.length > 0 &&
            romance.map((movie, index) => {
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

export default Category;
