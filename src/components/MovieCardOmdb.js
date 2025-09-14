import React from 'react';

const MovieCardOmdb = ({ poster, title, year }) => {
  const fallbackImg = "https://via.placeholder.com/200x300?text=No+Image";

  return (
    <div className="group relative 
        w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52 
        flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:z-10 cursor-pointer">

      {/* Movie Poster */}
      <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300">
        <img
          src={poster !== "N/A" ? poster : fallbackImg}
          alt={title || "Movie Poster"}
          className="w-full h-52 sm:h-60 md:h-64 lg:h-72 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg"></div>

        {/* Year badge */}
        {year && (
          <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-[10px] sm:text-xs px-2 py-1 rounded-md font-medium">
            {year}
          </div>
        )}
      </div>

      {/* Title (appears on hover) */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-2 sm:p-3 rounded-b-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <h3
          className="text-white text-xs sm:text-sm font-semibold leading-tight overflow-hidden"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default MovieCardOmdb;