/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../components/Banner';
import CheckIn from '../components/CheckIn';
import Motivation from '../components/Motivation';
import PopularPackages from '../components/PopularPackages';
import Reviews from '../components/Reviews/Reviews';
import ScrollToTop from '../components/ScrollToTop';

function Home() {
    return (
        <div>
            <ScrollToTop />
            <Banner />
            <CheckIn />
            <PopularPackages />
            <Motivation />
            <Reviews />
        </div>
    );
}

export default Home;
