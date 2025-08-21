import React from "react";
import MovieCardOmdb from "./MovieCardOmdb";

const MovieListOmdb = ({ title, movies }) => {
  return (
      <div className="p-6 bg-black bg-opacity-90">
        <h1 className="text-3xl py-6 text-white text-center">{title}</h1>
        <div className="flex overflow-x-scroll  no-scrollbar space-x-4 p-4">
          <div className=" flex">
          {movies?.map((movie) => (
            <MovieCardOmdb key={movie.imdbID} poster={movie.Poster} title={movie.Title} year={movie.Year} />
            ))}
            </div>
        </div>
      </div>
  )
}

export default MovieListOmdb
