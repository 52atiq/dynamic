import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-black p-7'>
            <div className='container flex justify-center gap-9'>
            <Link to='/' className='text-white text-base hover:text-red-600'>Home</Link>
            <Link to='blogs' className='text-white text-base hover:text-red-600'>Blogs</Link>
            <Link to='contact' className='text-white text-base hover:text-red-600'>Contact</Link>
            <Link to='tab' className='text-white text-base hover:text-red-600'>tab</Link>

            </div>
        </div>
    );
};

export default Navbar;