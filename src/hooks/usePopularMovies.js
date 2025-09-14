
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies, addPopularMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'
import data from "../utils/data.json"
const usePopularMovies = () => {
    const dispatch=useDispatch()
//   const getNowPlayingMovies=async()=>{
//     const data= await fetch("https://api.themoviedb.org/3/discover/movie?page=1"
//     ,API_OPTIONS
//     )
//     const json=await data.json()
//     dispatch(addNowPlayingMovies(json.results))
//   }
  useEffect(()=>{
    dispatch(addPopularMovies(data.results))
  },[dispatch])
}

export default usePopularMovies



// import { useDispatch } from 'react-redux'
// import { API_OPTIONS } from '../utils/constant'
// import { addNowPlayingMovies } from '../utils/moviesSlice'
// import { useEffect } from 'react'

// const usePopularMovies = () => {
//     const dispatch=useDispatch()
//   const getNowPlayingMovies=async()=>{
//     const data= await fetch("https://api.themoviedb.org/3/discover/movie?page=1"
//     ,API_OPTIONS
//     )
//     const json=await data.json()
//     dispatch(addNowPlayingMovies(json.results))
//   }
//   useEffect(()=>{
//     getNowPlayingMovies()
//   },[])
// }

// export default usePopularMovies