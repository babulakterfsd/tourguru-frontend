import useFirebase from './useFirebase';

const AllStates = () => {
    const { user, handleGoogleLogin, logOut, isLoading, setIsLoading } = useFirebase();

    return {
        user,
        handleGoogleLogin,
        logOut,
        isLoading,
        setIsLoading,
    };
};

export default AllStates;
