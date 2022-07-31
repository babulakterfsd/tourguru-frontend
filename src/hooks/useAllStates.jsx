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
    const [orderData, setOrderData] = useState({});
    const [activeStep, setActiveStep] = useState(0);
    const [isAdmin, setIsAdmin] = useState(false);
    const [allReviews, setAllReviews] = useState([]);

    // firebase
    const {
        user,
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
        signOut,
    } = useFirebase();

    // variables
    const getAllPackageURL = `http://localhost:5000/packages`;
    const getPopularPackageURL = `http://localhost:5000/packages?limit=6`;
    const checkAdminURL = `http://localhost:5000/users/${user?.email}`;
    const getAllReviewsURL = `http://localhost:5000/review`;

    // get data
    const getAllPackages = () => {
        axios.get(getAllPackageURL).then((result) => setAllPackages(result?.data));
    };

    const getPopularPackages = () => {
        axios.get(getPopularPackageURL).then((result) => setPopularPackages(result?.data));
    };

    const getAllReviews = () => {
        axios.get(getAllReviewsURL).then((result) => setAllReviews(result?.data));
    };

    // check admin role
    const checkIsAdminOrNot = () => {
        axios.get(checkAdminURL).then((result) => {
            setIsAdmin(result?.data?.admin);
        });
    };

    // function calls
    useEffect(() => {
        getPopularPackages();
    }, []);

    useEffect(() => {
        getAllPackages();
    }, []);

    useEffect(() => {
        getAllReviews();
    }, []);

    useEffect(() => {
        checkIsAdminOrNot();
    }, [user?.email]);

    // responsive check
    const mobile = useMediaQuery('(max-width:475px)');
    const tablet = useMediaQuery('(max-width:992px)');
    const desktop = useMediaQuery('(min-width:1199px)');

    return {
        user,
        isLoading,
        setIsLoading,
        mobile,
        tablet,
        desktop,
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
        allPackages,
        popularPackages,
        orderData,
        setOrderData,
        activeStep,
        setActiveStep,
        isAdmin,
        signOut,
        allReviews,
    };
};

export default AllStates;
