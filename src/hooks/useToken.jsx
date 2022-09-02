/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');
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
                        setToken(data?.accessToken);
                        localStorage.setItem('accessToken', data?.accessToken);
                    });
            }
        };
        getToken();
    }, [user]);
    return [token];
};

export default useToken;
