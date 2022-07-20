import React from 'react';
import Banner from '../components/Banner';
import CheckIn from '../components/CheckIn';
import Packages from './Packages';

function Home() {
    return (
        <div>
            <Banner />
            <CheckIn />
            <Packages />
        </div>
    );
}

export default Home;
