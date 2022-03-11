import React, { useState, useEffect } from "react";

import "../App.css";
import generateImageArray from "../functions/generateImageArray";
import _ from "lodash";

let generatedArray = generateImageArray();

function Game() {
  const [images, setImages] = useState(generatedArray);

  const regenerateImageList = (e) => {
    let found = generatedArray.find((image) => image.unique == e.target.id);
    found.clicked = true;
    console.log(found);
    let shuffledArray = _.shuffle(generatedArray);
    setImages(shuffledArray);
  };

  return (
    <div className="Game m-12">
      <div className="Game.Images grid grid-cols-3 gap-2">
        {images.map((image, index) => {
          let classColor =
            "w-24 h-24 " + (image.clicked ? "bg-red-500" : "bg-blue-500");
          return (
            <div
              className={classColor}
              onClick={regenerateImageList}
              key={image.unique}
              id={image.unique}
            >
              {image.src}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Game;
