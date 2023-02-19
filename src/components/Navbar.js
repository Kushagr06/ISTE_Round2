import React from 'react';
import logo from './Orion.webp';
import user from './user.jpg';
import {Link} from 'react-router-dom';
import Hero from '../pages/Hero';
import News from '../pages/News';
import Bookmark from '../pages/Bookmark';

function Navbar() {
  return (
    <div className='z-10'>
        <header className="text-gray-600 body-font bg-black">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            </img>
            <span className=" text-white ml-3 text-xl">Orion News</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-between text-center align-bottom">
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2">
              <Link className="hover:text-gray-900" to="/home">Home</Link>
            </button>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2">
              <Link to="/news" className="hover:text-gray-900">News</Link>
            </button>
            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-2 mb-2">
              <Link to="/bookmark" className=" hover:text-gray-900">Bookmarks</Link>
            </button>
          </nav>
          <div>
            <img src={user}  className=" rounded-full w-16 h-16 ml-1"> 
            </img>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar
