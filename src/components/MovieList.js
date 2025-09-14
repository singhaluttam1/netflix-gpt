import React, { useState, useMemo } from "react";
import MovieCard from "./MovieCard";
import CardMovieModal from "./CardMovieModal";

const MovieList = ({ title, movies }) => {
  // ✅ shuffle only once when component mounts
  const shuffledMovies = useMemo(() => {
    return [...(movies || [])].sort(() => Math.random() - 0.5);
  }, [movies]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="p-0 md:p-4 bg-black">
      <h1 className="text-3xl py-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar space-x-4 px-12 md:px-20 py-4">
        <div className="flex space-x-4 overflow-visible">
          {shuffledMovies.map((movie) => (
            <div
              key={`${movie.id}-${movie.title}`}
              onClick={() => setSelectedMovie(movie)}
              className="cursor-pointer"
            >
              <MovieCard posterPath={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMovie && (
        <CardMovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default MovieList;