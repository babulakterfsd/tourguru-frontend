/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useToken = (user) => {
    const [token, setToken] = useState('');
    const { setGlobalToken } = useAuth();
    useEffect(() => {
        const getToken = async () => {
            if (user?.email) {
                const userEmail = user?.email;
                fetch('https://rocky-inlet-29740.herokuapp.com/getaccesstoken', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userEmail }),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        setToken(data?.accessToken);
                        setGlobalToken(data?.accessToken);
                        localStorage.setItem('accessToken', data?.accessToken);
                    })
                    .catch((err) => console.log(err.message));
            }
        };
        getToken();
    }, [user, setGlobalToken]);
    return [token];
};

export default useToken;
