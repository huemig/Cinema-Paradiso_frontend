import React from "react";
import iceage from "../../assets/img/HomePage/Iceage_cover.png";
import gradient from "../../assets/img/HomePage/radiant.png";

const MainImage = () => {
  return (
    <section className="section_title">
      <div className="title">
        <div className="title_bg grid--2-cols">
          <div className="title_p">
            <h1>Ice Age</h1>
            <p className="title_body">
              With global warming threatening their once-icy domain with
              widespread flooding, Many Sid and Diego set out to find a safe
              haven. Along the way another mammoth who thinks she is an opossum
              joins the travellers on their perilous quest.
            </p>

            <a
              className="nav-link btn"
              href="https://www.youtube.com/watch?v=0U0L4uT0btQ"
              target="_blank"
            >
              Watch Now!
            </a>
          </div>

          <div className="visuals">
            <img className="title_cover" src={iceage} alt="Title_Cover" />
          </div>
        </div>
        <img className="radiant" src={gradient} alt="Radiant" />
      </div>
    </section>
  );
};

export default MainImage;
