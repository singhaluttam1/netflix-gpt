import React from "react";
import MovieCardOmdb from "./MovieCardOmdb";

const MovieListOmdb = ({ title, movies }) => {
  return (
    <div className="relative bg-gradient-to-b from-black via-gray-900 to-black py-4 mt-4">
      {/* Section Title */}
      <div className="px-6 mb-6 text-center">
        <h1 className="md:text-4xl text-2xl font-bold text-white relative">
          {title}
        </h1>
      </div>

      {/* Movies Container */}
      <div className="relative group px-4">

        {/* Responsive Grid for Movies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10 pl-0 md:pl-5">
          {movies?.length > 0 ? (
            movies.map((movie, index) => (
              <div
                key={movie.imdbID}
                className="flex-none transform transition-all duration-300 hover:scale-105 hover:z-20"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <MovieCardOmdb
                  poster={movie.Poster}
                  title={movie.Title}
                  year={movie.Year}
                />
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center w-full h-64 col-span-full">
              <div className="text-center">
                <div className="text-6xl text-gray-600 mb-4">🎬</div>
                <p className="text-gray-400 text-lg">No movies available</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Movies Count Indicator */}
      {movies?.length > 0 && (
        <div className="px-6 mt-4">
          <p className="text-gray-400 text-sm">
            {movies.length} movie{movies.length !== 1 ? "s" : ""} available
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieListOmdb;