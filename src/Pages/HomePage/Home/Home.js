import React from 'react';
import Exparts from '../Exparts/Exparts';
import Services from './../Services/Services'
import Banner from './../Banner/Banner'

const Home = () => {
    return (
        <>
        <Banner/>
            <div className='container mb-5'>
                <Services />
            </div>
            <div className='container mb-5'>
                <Exparts />
            </div>
        </>
    );
};

export default Home;