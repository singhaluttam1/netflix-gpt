import React from 'react'
import { IMAGE_CDN } from '../utils/constant'

const MovieCard = ({ posterPath, title }) => {
  const fallbackImg = "https://via.placeholder.com/200x300?text=No+Image"

  return (
    <div className="w-48 pr-4 transform transition-all duration-300 hover:scale-110 hover:z-10 hover:rounded-xl overflow-visible cursor-pointer">
      <img
        src={posterPath ? IMAGE_CDN + posterPath : fallbackImg}
        alt={title || "Movie Poster"}
        className="rounded-md shadow-md"
        loading="lazy"
      />
    </div>
  )
}

export default MovieCard