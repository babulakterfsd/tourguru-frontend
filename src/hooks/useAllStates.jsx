/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useMediaQuery } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useFirebase from './useFirebase';

const AllStates = () => {
    // states
    const [allPackages, setAllPackages] = useState([]);

    // firebase
    const { user, handleGoogleLogin, logOut, isLoading, setIsLoading } = useFirebase();

    // responsive check
    const mobile = useMediaQuery('(max-width:475px)');
    const tablet = useMediaQuery('(max-width:992px)');
    const desktop = useMediaQuery('(min-width:1199px)');

    // variables
    const limit = 19;
    const getAllPackageURL = `http://localhost:5000/packages?limit=${limit}`;

    // axios
    const getData = () => {
        axios.get(getAllPackageURL).then((response) => setAllPackages(response?.data));
    };

    // api calls
    useEffect(() => {
        getData();
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
    };
};

export default AllStates;
