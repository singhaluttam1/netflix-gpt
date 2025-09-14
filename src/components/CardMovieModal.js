import React, { useEffect, useState } from "react";
import { FaTimes, FaPlay, FaPlus, FaThumbsUp } from "react-icons/fa";

const CardMovieModal = ({ movie, onClose }) => {
  const [liked, setLiked] = useState(false);
  const [showAlert,setShowAlert]=useState(false)
const handleMoviePlayClick=()=>{
  window.open("https://www.youtube.com/watch?v=UWMzKXsY9A4","_blank")
}
const handleMyList=()=>{
  setShowAlert(true)
  setTimeout(()=>
    setShowAlert(false),2000)
}
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, []);

  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      {showAlert && <div className="absolute top-4 bg-green-600 text-white px-4 py-2 rounded-md z-20">Added to My List ✅</div>}
      <div className="bg-black rounded-lg max-w-4xl w-full relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl z-10"
        >
          <FaTimes />
        </button>

        {/* Banner / Backdrop */}
        <div className="relative w-full h-64 md:h-96">
          <img
            src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Movie Info */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-3xl font-bold text-white">{movie.title}</h2>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-gray-400 text-sm mt-2">
            <span>{movie.release_date}</span>
            <span>• {movie.original_language?.toUpperCase()}</span>
            <span>• ID: {movie.id}</span>
          </div>

          {/* Overview */}
          <p className="text-gray-300 mt-4">{movie.overview}</p>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition on" onClick={handleMoviePlayClick}>
              <FaPlay /> Play
            </button>
            <button className="flex items-center gap-2 bg-gray-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-600 transition" onClick={handleMyList}>
              <FaPlus /> My List
            </button>
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-2 px-6 py-2 rounded-md font-semibold transition ${
                liked ? "bg-green-600 text-white" : "bg-gray-700 text-white hover:bg-gray-600"
              }`}
            >
              <FaThumbsUp /> {liked ? "Liked" : "Like"}
            </button>
          </div>

          {/* About Section */}
          <div className="bg-neutral-900 text-white p-6 rounded-2xl mt-8">
            <h2 className="text-2xl font-bold mb-4">
              About <span className="text-yellow-400">{movie.original_title || movie.title}</span>
            </h2>

            <div className="space-y-3 text-gray-300">
              <p>
                <span className="font-semibold text-white">Adult:</span>{" "}
                {movie.adult ? "Yes" : "No"}
              </p>
              <p>
                <span className="font-semibold text-white">Language:</span>{" "}
                {movie.original_language?.toUpperCase()}
              </p>
              <p>
                <span className="font-semibold text-white">Release Date:</span>{" "}
                {movie.release_date}
              </p>
              <p>
                <span className="font-semibold text-white">Popularity:</span>{" "}
                {movie.popularity}
              </p>
              <p>
                <span className="font-semibold text-white">Average Vote:</span>{" "}
                {movie.vote_average} ({movie.vote_count} votes)
              </p>
              <p>
                <span className="font-semibold text-white">Genres:</span>{" "}
                {movie.genre_ids?.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMovieModal;