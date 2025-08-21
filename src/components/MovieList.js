import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className='p-0 md:p-4 bg-black'>
            <h1 className='text-3xl py-6 text-white'> {title}</h1>
            <div className='flex overflow-x-scroll  no-scrollbar space-x-4 p-1 md:p-4'>
                <div className='flex'>
                    {movies?.map((movie) => (

<MovieCard key={`${movie.id}-${movie.title}`} posterPath={movie.poster_path} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default MovieList