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
    const [userImageURL, setUserImageURL] = useState('');
    const [userInfoInDatabase, setUserInfoInDatabase] = useState({});

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
    const getIndividualUserFromdatabse = `http://localhost:5000/user/${user?.email}`;
    const getAllReviewsURL = `http://localhost:5000/review`;

    // function calls
    useEffect(() => {
        axios.get(getPopularPackageURL).then((result) => setPopularPackages(result?.data));
    }, [getPopularPackageURL]);

    useEffect(() => {
        axios.get(getAllPackageURL).then((result) => setAllPackages(result?.data));
    }, [getAllPackageURL]);

    useEffect(() => {
        axios.get(getAllReviewsURL).then((result) => setAllReviews(result?.data));
    }, [getAllReviewsURL]);

    useEffect(() => {
        axios.get(checkAdminURL).then((result) => {
            setIsAdmin(result?.data?.admin);
        });
    }, [checkAdminURL]);

    useEffect(() => {
        axios.get(getIndividualUserFromdatabse).then((result) => {
            setUserInfoInDatabase(result?.data);
        });
    }, [getIndividualUserFromdatabse]);

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
        setAllReviews,
        getAllReviewsURL,
        userImageURL,
        setUserImageURL,
        userInfoInDatabase,
        setUserInfoInDatabase,
    };
};

export default AllStates;
