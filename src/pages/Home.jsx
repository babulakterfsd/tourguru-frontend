import React from 'react';
import Banner from '../components/Banner';
import CheckIn from '../components/CheckIn';
import PopularPackages from '../components/PopularPackages';
import ScrollToTop from '../components/ScrollToTop';

function Home() {
    return (
        <div>
            <ScrollToTop />
            <Banner />
            <CheckIn />
            <PopularPackages />
        </div>
    );
}

export default Home;
