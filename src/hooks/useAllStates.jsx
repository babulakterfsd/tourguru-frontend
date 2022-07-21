/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useMediaQuery } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useFirebase from './useFirebase';

const AllStates = () => {
    // states
    const [allPackages, setAllPackages] = useState([]);
    const [popularPackages, setPopularPackages] = useState([]);

    // firebase
    const {
        user,
        handleGoogleLogin,
        logOut,
        isLoading,
        setIsLoading,
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword,
        setName,
        updateUser,
        registerWithEmail,
        setResponse,
        name,
        setUser,
        auth,
        signInWithEmailAndPassword,
    } = useFirebase();

    // responsive check
    const mobile = useMediaQuery('(max-width:475px)');
    const tablet = useMediaQuery('(max-width:992px)');
    const desktop = useMediaQuery('(min-width:1199px)');

    // variables
    const getAllPackageURL = `http://localhost:5000/packages?limit=19`;
    const getPopularPackageURL = `http://localhost:5000/packages?limit=6`;

    // axios
    const getAllPackages = () => {
        axios.get(getAllPackageURL).then((response) => setAllPackages(response?.data));
    };
    const getPopularPackages = () => {
        axios.get(getPopularPackageURL).then((response) => setPopularPackages(response?.data));
    };

    // api calls
    useEffect(() => {
        getAllPackages();
    }, []);
    useEffect(() => {
        getPopularPackages();
    }, []);

    return {
        user,
        handleGoogleLogin,
        logOut,
        isLoading,
        setIsLoading,
        mobile,
        tablet,
        desktop,
        allPackages,
        popularPackages,
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword,
        updateUser,
        name,
        setName,
        registerWithEmail,
        setResponse,
        setUser,
        auth,
        signInWithEmailAndPassword,
    };
};

export default AllStates;
