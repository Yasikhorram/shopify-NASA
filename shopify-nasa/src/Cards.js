import React, { useState, useEffect } from "react";
import Card from "./Card";
import img from "./assets/NASA.png";
import axios from "axios";

const Cards = () => {
  const url =
    "https://api.nasa.gov/planetary/apod?count=6&api_key=CAb99kk9Zh6mY0Bns93YOWYN0fVJFyAk7UWL3x4V";
  const [data, setData] = useState([]);
  const [like, setLike] = useState({});
  console.log("like: -->", like);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <nav className="navbar navbar-light bg-light">
      <h1 className="header">Spacestagram </h1>

      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6">
            {data.map((item) => {
              return (
                <Card
                  imgSource={item.url}
                  imgDate={item.date}
                  imgTitle={item.title}
                  imgExp={item.explanation}
                  click={() => {
                    console.log(like);
                    const temp = { ...like };

                    if (item.title in temp) {
                      temp[item.title] = !temp[item.title];
                    } else {
                      temp[item.title] = true;
                    }
                    setLike(temp);
                  }}
                  imgLike={like[item.title]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Cards;
