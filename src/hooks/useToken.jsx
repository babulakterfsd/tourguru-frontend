/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            if (user?.email) {
                const userEmail = user?.email;
                fetch('https://tourguru-backend.vercel.app/getaccesstoken', {
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
                    })
                    .catch((err) => console.log(err.message));
            }
        };
        getToken();
    }, [user?.email]);
    return [token];
};

export default useToken;
