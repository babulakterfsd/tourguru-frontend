import { useEffect, useState } from 'react';
import useFirebase from './useFirebase';

const AllStates = () => {
    const { user, handleGoogleLogin, logOut, isLoading, setIsLoading } = useFirebase();

    const [products, setProducts] = useState([]);
    const [admin, setAdmin] = useState(null);

    // check admin role
    useEffect(() => {
        fetch(`https://cryptic-sea-29383.herokuapp.com/users/${user}`)
            .then((res) => res.json())
            .then((data) => setAdmin(data.admin));
    }, [user]);

    // get all products
    useEffect(() => {
        fetch('https://cryptic-sea-29383.herokuapp.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return {
        user,
        handleGoogleLogin,
        logOut,
        products,
        isLoading,
        setIsLoading,
        admin,
        setAdmin,
    };
};

export default AllStates;
