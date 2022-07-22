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
        response,
        signInUsingGoogle,
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
        axios.get(getAllPackageURL).then((result) => setAllPackages(result?.data));
    };
    const getPopularPackages = () => {
        axios.get(getPopularPackageURL).then((result) => setPopularPackages(result?.data));
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
        response,
        signInUsingGoogle,
    };
};

export default AllStates;
