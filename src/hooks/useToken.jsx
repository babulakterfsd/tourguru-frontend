import axios from 'axios';
import { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            if (user?.email) {
                const { data } = await axios.post(
                    'http://localhost:5000/getaccesstoken',
                    user?.email
                );
                setToken(data?.accessToken);
                localStorage.setItem('accessToken', data?.accessToken);
            }
        };
        getToken();
    }, [user]);
    return [token];
};

export default useToken;
