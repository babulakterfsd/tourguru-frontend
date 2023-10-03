/* eslint-disable no-unused-vars */
import { useMediaQuery } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useFirebase from './useFirebase';

const AllStates = () => {
    // states
    const [orderData, setOrderData] = useState({});
    const [activeStep, setActiveStep] = useState(0);
    const [isAdmin, setIsAdmin] = useState(false);
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

    // checking admin
    useEffect(() => {
        axios.get(`https://tourguru.onrender.com/users/${user?.email}`).then((result) => {
            setIsAdmin(result?.data?.admin);
        });
    }, [user?.email]);

    // setting user info
    useEffect(() => {
        setTimeout(() => {
            if (user) {
                fetch(`https://tourguru.onrender.com/user/${user?.email}`, {
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
        orderData,
        setOrderData,
        activeStep,
        setActiveStep,
        isAdmin,
        signOut,
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
