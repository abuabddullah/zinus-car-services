import React from 'react';

const Footer = () => {
    return (
        <footer className='p-3 bg-light text-center'>
            <p>
                <small className='fw-bold'>
                    All rights reserved &copy; {new Date().getFullYear()}
                </small>
            </p>
        </footer>
    );
};

export default Footer;