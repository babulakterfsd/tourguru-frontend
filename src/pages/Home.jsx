import React from 'react';
import Banner from '../components/Banner';
import CheckIn from '../components/CheckIn';
import PopularPackages from '../components/PopularPackages';

function Home() {
    return (
        <div>
            <Banner />
            <CheckIn />
            <PopularPackages />
        </div>
    );
}

export default Home;
