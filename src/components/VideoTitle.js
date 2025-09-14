import React, { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import MovieModal from "./MovieModal";
import { IMAGE_CDN } from "../utils/constant";

const VideoTitle = ({ title, overview, posterPath }) => {
  const fallbackImg = "https://via.placeholder.com/200x300?text=No+Image";
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handlePlayClick = () => {
    window.open("https://www.youtube.com/watch?v=UWMzKXsY9A4", "_blank");
  };

  return (
    <div className="pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-tr from-black/80 via-black/30 to-transparent w-screen aspect-video">
      {/* Title */}
      <h1 className="text-lg md:text-3xl lg:text-5xl 2xl:text-6xl drop-shadow-md">
        {title}
      </h1>

      {/* Overview */}
      <p className="hidden md:inline-block 
  md:w-2/3 lg:w-1/2 xl2:w-2/5 2xl:w-1/3
  py-6 text-sm md:text-base lg:text-lg xl2:text-xl drop-shadow-md">
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        {/* Play Button */}
        <button
          className="bg-white text-black py-2 px-4 md:py-3 md:px-8 lg:px-12 text-sm md:text-base lg:text-lg rounded-lg hover:bg-opacity-80 transition"
          onClick={handlePlayClick}
        >
          <div className="flex items-center gap-1">
            <FaPlay />
            Play
          </div>
        </button>

        {/* More Info Button */}
        <button
          className="hidden md:inline-flex items-center gap-1 bg-gray-500 text-white py-2 px-6 md:px-8 lg:px-12 text-sm md:text-base lg:text-lg bg-opacity-50 rounded-lg hover:bg-opacity-80 transition"
          onClick={() =>
            setSelectedMovie({
              title,
              image: posterPath ? IMAGE_CDN + posterPath : fallbackImg,
              description: overview,
            })
          }
        >
          <IoIosInformationCircleOutline />
          More Info
        </button>
      </div>

      {/* Modal */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default VideoTitle;
