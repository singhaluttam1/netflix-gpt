import React from 'react';

const MovieCardOmdb = ({ poster, title, year }) => {
  return (
    <div className="w-48 pr-4 text-white transform transition-all duration-300 hover:scale-125 hover:rounded-xl">
      {/* <h2 className='text-center text-lg'> {title}</h2> */}
      <img
        src={poster !== 'N/A' ? poster : '/fallback.jpg'}
        alt={title}
        className="rounded-md shadow-md"
      />
      <h2 className="mt-2 text-2xl md:text-lg font-semibold">{title}</h2>
      <p className="text-gray-400  text-xl md:text-xs">{year}</p>
    </div>
  );
};

export default MovieCardOmdb;