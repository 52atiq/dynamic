import React from 'react';
import { Outlet } from 'react-router-dom';

const Users = () => {
    return (
        <div className='container pt-3 text-yellow-600 text-3xl'>
        <p>User 1</p>
        <p>User 2</p>
        <p>User 3</p>
        <Outlet />
        </div>
    );
};

export default Users;