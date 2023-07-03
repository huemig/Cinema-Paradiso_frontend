import React from "react";
import Header from "../components/common/Header";
import { useState, useEffect } from "react";
import MainImage from "../components/common/MainImage";
import like from "../assets/img/misc/like.png";
import Footer from "../components/common/Footer";
import left from "../assets/img/misc/left.png";
import right from "../assets/img/misc/right.png";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoritesData = localStorage.getItem("favorites");

    if (favoritesData) {
      const parseFavorites = JSON.parse(favoritesData);
      setFavorites(parseFavorites);
    }
  }, []);

  const removeFromFavorites = (movieid) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieid);

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <>
      <Header />
      <MainImage />
      <div class="row">
        <p>---Wish List---</p>
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
          {favorites.length > 0 &&
            favorites.map((movie, index) => {
              return (
                <div className="tile" key={index}>
                  <div className="hold">
                    <img src={movie.image} alt={movie.title} />
                  </div>
                  <h3>{movie.title}</h3>
                  <p>TV-MA| Action, crime</p>
                        <button>
                    <a href={movie.trailer_link} target="_blank">
                      Watch Now
                    </a>
                  </button>
                 

                  <div
                    className="like"
                    onClick={() => removeFromFavorites(movie.id)}
                  >
                    <img src={like} alt="like" />
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Favorites;
