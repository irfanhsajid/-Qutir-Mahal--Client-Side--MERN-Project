import React from 'react';
import Features from '../../Features/Features';
import LimitedProducts from '../../Products/limitedProducts/LimitedProducts';

import Reviews from '../../Reviews/Reviews';
import NavBar from '../../Shared/NavBar/NavBar';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <Features />
            <LimitedProducts />
            <Reviews />

        </div>
    );
};

export default Home;