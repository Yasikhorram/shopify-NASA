import React from "react";
import "./index.css";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

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
        <span className="card-text text-secondary"> {props.imgDate}</span>
        <p>{props.imgExp}</p>
        <button
          onClick={() => props.click()}
          type="button"
          class="btn btn-secondary btn-lg"
        >
          {props.imgLike ? <FcLike /> : <FcLikePlaceholder />}
        </button>
      </div>
    </div>
  );
};
export default Card;
