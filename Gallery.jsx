import React from "react";
import GalleryPictures from "../components/GalleryPictures";
import GalleryArticles from "../components/GalleryArticles";
import heroImage from "../assets/wall-g49ab02880_1920.jpeg";

const Gallery = () => {
  return (
    <div>
      <div className="w-full h-[30vh] overflow-hidden relative drop-shadow-lg">
        <img
          src={heroImage}
          alt="oilrig"
          className="w-[100%] h-[100%] absolute top-0"
        />
        <h1 className="absolute text-white text-4xl uppercase top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center">gallery of our works</h1>
      </div>

      <GalleryArticles />
      <GalleryPictures />
    </div>
  );
};

export default Gallery;
