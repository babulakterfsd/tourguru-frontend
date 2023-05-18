/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import CheckIn from '../components/CheckIn';
import Motivation from '../components/Motivation';
import PopularPackages from '../components/PopularPackages';
import Reviews from '../components/Reviews/Reviews';
import ScrollToTop from '../components/ScrollToTop';
import Classes from '../styles/Contact.module.css';

function Home() {
    useEffect(() => {
        document.title = 'Tourguru | your trusted tour partner';
    });
    return (
        <div className={Classes.controller}>
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
