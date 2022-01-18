import React from "react";
import "./index.css";

const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img
          src={props.imgSource}
          alt="imageOfplanet"
          className="card-img-top"
        />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.imgTitle}</h4>
        <p className="card-text text-secondary"> {props.imgDate}</p>
        <a href="#" className="btn btn-outline-success">
          LIKE OR UNLIKE
        </a>
      </div>
    </div>
  );
};
export default Card;

// GET https://api.nasa.gov/planetary/apod?api_key=CAb99kk9Zh6mY0Bns93YOWYN0fVJFyAk7UWL3x4V
