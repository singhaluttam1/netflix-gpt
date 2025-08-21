import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import usePopularMovies from '../hooks/usePopularMovies'

const SecoundaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  return (
    <div className='bg-black '>
    <div className='mt-0 md:-mt-18 bg-black px-4'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Comedy Movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Bollywood Movies	"} movies={movies.nowPlayingMovies}/>
      {/* MovieList Popular
      MovieList NowPlaying 
      MovieList Trending 
      MovieList Horror */}
</div>
    </div>
  )
}

export default SecoundaryContainer