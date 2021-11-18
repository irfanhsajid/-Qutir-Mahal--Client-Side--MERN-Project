import React from 'react';
import LimitedProducts from '../../Products/limitedProducts/LimitedProducts';

import Reviews from '../../Reviews/Reviews';
import NavBar from '../../Shared/NavBar/NavBar';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <LimitedProducts />
            <Reviews />

        </div>
    );
};

export default Home;