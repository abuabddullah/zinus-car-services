import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container p-5'>
            <h1 className='text-danger text-center p-5 m-5'>404 ! Not Found</h1>

            <div className='p-5 d-flex justify-content-center align-items-center'>
                <Link to='/home' className='btn btn-primary rounded-3'>↞ Go Back To Home</Link>
            </div>
        </div>
    );
};

export default NotFound;