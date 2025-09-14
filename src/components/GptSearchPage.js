import React, { useRef, useState } from 'react';
import lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';
import ai from '../utils/gemini'; // updated import from new client
import MovieListOmdb from './MovieListOmdb';

const GptSearchPage = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [suggestions, setSuggestions] = useState("");
  const [movieData, setMovieData] = useState([])

  const searchMoviesOMDB = async (movie) => {
    const apiKey=process.env.REACT_APP_OMDB_API_KEY
    const data = await fetch(`https://www.omdbapi.com/?t=${movie.trim()}&apikey=${apiKey}`)

    const json = await data.json()
    return json
  }

  const handleGptSearchClick = async () => {
    const query = searchText.current.value;

    const gptQuery = `Act as a movie recommendation system and suggest 10 movies for the query: "${query}". Only respond with 10 movie names, comma-separated.`;

    try {
      const result = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [{ role: "user", parts: [{ text: gptQuery }] }],
        config: {
          thinkingConfig: {
            thinkingBudget: 0
          }
        }
      });
      console.log(result)
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

      const geminiMovies = result.candidates?.[0]?.content?.parts?.[0]?.text?.split(",")
      console.log(geminiMovies)
      const data = geminiMovies.map((movie) => searchMoviesOMDB(movie))

      const movieDetails = await Promise.all(data)
      const validMovies=movieDetails.filter(movie=>movie.Response === "True" && movie.Poster !== "N/A"
      );
      setMovieData(validMovies);
      console.log(movieDetails)


      setSuggestions(text);
      console.log("Gemini Response:", text);
    } catch (error) {
      console.error("Gemini API Error:", error);
    }
  };

  return (
    <div className='pt-[30%] md:pt-[10%]'>
      <div className="flex justify-center">
        <form
          className="w-full md:w-1/2 bg-black grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 col-span-9 text-black"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button
          
            className="col-span-3 m-4 py-2 px-2 xsm:px-2  xsm:text-xs bg-red-700 hover:bg-red-800 text-white rounded-lg text-sm sm:text-lg transition-colors duration-200"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
      {movieData.length > 0 && (
        <MovieListOmdb title="AI Recommended Movies" movies={movieData} />
      )}
    </div>
  );
};

export default GptSearchPage;