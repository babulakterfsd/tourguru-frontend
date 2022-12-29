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
    const [paymentIntentStatus, setPaymentIntentStatus] = useState('');
    const [paymentTrxID, setPaymentTrxID] = useState('');
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
    const getAllPackageURL = `https://tourguru-backend-production.up.railway.app/packages`;
    const getPopularPackageURL = `https://tourguru-backend-production.up.railway.app/packages?limit=6`;
    const checkAdminURL = `https://tourguru-backend-production.up.railway.app/users/${user?.email}`;
    const getIndividualUserFromdatabse = `https://tourguru-backend-production.up.railway.app/user/${user?.email}`;
    const getAllReviewsURL = `https://tourguru-backend-production.up.railway.app/review`;

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
        setTimeout(() => {
            if (user) {
                fetch(`https://tourguru-backend-production.up.railway.app/user/${user?.email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setUserInfoInDatabase(data);
                    })
                    .catch((err) => console.log(err));
            }
        }, 1500);
    }, [user]);

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
        paymentIntentStatus,
        setPaymentIntentStatus,
        paymentTrxID,
        setPaymentTrxID,
    };
};

export default AllStates;
