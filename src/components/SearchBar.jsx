import React from 'react'

function SearchBar({searchMovie, setSearchMovie,fetchMovieData}) {
  
  

  return (
    <div className='main flex justify-center py-5 px-4'>
        <input type="text" placeholder='Search'
        value={searchMovie}
        
        onChange={(e)=> setSearchMovie(e.target.value)}
        
        className=' rounded-l-lg w-80 bg-gray-200 placeholder-gray-400 px-3 py-2 shadow-md outline-none  border-gray-600 text-black'/>
        <button 
        onClick={fetchMovieData}
        className='bg-[blue] text-white shadow-md px-4 py-2 rounded-r-lg '>Search</button>
    </div>
  )
}

export default SearchBar