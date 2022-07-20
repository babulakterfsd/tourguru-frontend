import { useMediaQuery } from '@mui/material';
import useFirebase from './useFirebase';

const AllStates = () => {
    const { user, handleGoogleLogin, logOut, isLoading, setIsLoading } = useFirebase();

    const mobile = useMediaQuery('(max-width:475px)');
    const tablet = useMediaQuery('(max-width:992px)');
    const desktop = useMediaQuery('(min-width:1199px)');

    return {
        user,
        handleGoogleLogin,
        logOut,
        isLoading,
        setIsLoading,
        mobile,
        tablet,
        desktop,
    };
};

export default AllStates;
