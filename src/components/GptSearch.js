import React from 'react'
import GptSearchPage from './GptSearchPage'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div className="relative overflow-x-hidden">
      <div className='fixed  -z-10'>
        <img
          className='w-screen h-screen object-cover'
          src={BG_URL}
          alt=""
        />

      </div>
      <div className=''>
        <GptSearchPage />

        <GptMovieSuggestions />

      </div>
    </div>
  )
}

export default GptSearch
