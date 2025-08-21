import React from 'react'
import { IMAGE_CDN } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4  transform transition-all duration-300 hover:scale-125 hover:rounded-xl'>
      <img src={IMAGE_CDN+posterPath } alt="Movie Card" />
    </div>
  )
}

export default MovieCard
