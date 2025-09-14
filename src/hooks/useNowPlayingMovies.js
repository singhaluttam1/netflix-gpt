import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import data from "../utils/data.json"; // Import the local data

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Get movies from the local JSON
    dispatch(addNowPlayingMovies(data.results));
  }, [dispatch]);
};

export default useNowPlayingMovies;


// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { API_OPTIONS } from "../utils/constant";
// import { addNowPlayingMovies } from "../utils/moviesSlice";

// const useNowPlayingMovies = () => {
//   // Fetch Data from TMDB API and update store
//   const dispatch = useDispatch();

//   const nowPlayingMovies = useSelector(
//     (store) => store.movies.nowPlayingMovies
//   );

//   const getNowPlayingMovies = async () => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/movie/now_playing?page=1",
//       API_OPTIONS
//     );
//     const json = await data.json();
//     dispatch(addNowPlayingMovies(json.results));
//   };

//   useEffect(() => {
//     !nowPlayingMovies && getNowPlayingMovies();
//   }, []);
// };

// export default useNowPlayingMovies;