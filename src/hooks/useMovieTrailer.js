import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import data from "../utils/data.json"; // ✅ Import data.json

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    // ✅ Find the movie in the local data
    const movie = data.results.find((m) => m.id === Number(movieId));

    if (movie) {
      dispatch(addTrailerVideo(movie));
    } else {
      console.warn(`Movie with id ${movieId} not found in data.json`);
    }
  }, [movieId, dispatch]);
};

export default useMovieTrailer;






// import { useDispatch, useSelector } from "react-redux";
// import { API_OPTIONS } from "../utils/constant";
// import { addTrailerVideo } from "../utils/moviesSlice";
// import { useEffect } from "react";

// const useMovieTrailer=(id)=>{
//     const dispatch=useDispatch()
// const trailerVideo=useSelector ((store)=>store.movies.trailerVideo)

//     const getMovieTrailer=async()=>{
//         const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
//         const json=await data.json()

//         const filterData= json.results.filter((video)=>video.type==="Trailer");
//         const trailer=filterData.length ? filterData[0]:json.results[0]
//         dispatch(addTrailerVideo(trailer))
//     }
//     useEffect(()=>{
//         !trailerVideo && getMovieTrailer()
//     })

// }
// export default useMovieTrailer