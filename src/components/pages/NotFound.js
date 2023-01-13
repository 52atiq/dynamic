import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
        <h2 className='text-purple-800 font-bold p-3 font-rubik'> Oooops Page Not Found !</h2>
        <Link to='/' className='bg-black  text-white hover:bg-red-500 py-2 px-10 rounded-md'> Go to Home </Link>
      </div>
    );
};

export default NotFound;