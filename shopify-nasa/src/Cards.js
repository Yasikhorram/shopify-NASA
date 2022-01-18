import React, { useState, useEffect } from "react";
import Card from "./Card";
import img from "./assets/NASA.png";
import axios from "axios";

const Cards = () => {
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=CAb99kk9Zh6mY0Bns93YOWYN0fVJFyAk7UWL3x4V";
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log("-----", response);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-md-4">
          {" "}
          <Card
            imgSource={data.url}
            imgDate={data.date}
            imgTitle={data.title}
            // imgExplain={image.explanation}
          />
        </div>
        <div className="col-md-4">
          <Card imgSource={img} />
        </div>
        <div className="col-md-4">
          <Card imgSource={img} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
