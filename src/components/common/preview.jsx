import React, { useState, useEffect } from "react";
import API from "../../API";
import ice from "../../assets/img/HomePage/Iceage_cover.png";
import { useDispatch } from "react-redux";
import { BsFillStarFill } from "react-icons/bs";
import { BiSolidStarHalf } from "react-icons/bi";

const api = new API();

const Preview = ({ setShowPreview, selectedMovieId }) => {
  const [movie, setMovie] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .getMovie(selectedMovieId)
      .then((movie) => {
        setMovie(movie);
      })
      .catch((error) => {
        alert("Failed to connect");
      });
  }, []);

  return (
    <div className="watch">
      {movie && (
        <>
          <div className="vipro">
            <img
              src={movie.image}
              alt="iceage"
              onClick={() => setShowPreview(false)}
            />
          </div>

          <div className="icebody">
            <h1>{movie.title}</h1>

            <p className="min">{movie.movie_duration} Minutes - USA</p>
            <i className="material-icons stars">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BiSolidStarHalf />
            </i>

            <ul className="cate">
              <li>Action</li>
              <li>Fantasy</li>
              <li>Drama</li>
              <li>Family</li>
            </ul>
            <p className="wabody">{movie.description}</p>
            <a href={movie.trailer_link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Preview;
