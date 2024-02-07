import React from 'react'

function Navbar() {
  return (
    <div className='main z-20 lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[Purple] py-4 sticky top-0'  >
        <div className='left flex items-center space-x-3 '>
            <img src="https://www.cleanpng.com/png-photographic-film-movie-camera-cinema-website-and-7346906/preview.html"/>
            <h1 className='font-bold text-2xl text-white'>RDX Movies</h1>

        </div>
        <div className='right '>
            <ul className='flex space-x-4 text-white text-xl justify-center'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar