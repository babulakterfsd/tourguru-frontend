/* eslint-disable no-param-reassign */
import axios from 'axios';

const axiosPrivate = axios.create({});

// Add a request interceptor
axiosPrivate.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        if (!config.headers.authorization) {
            config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`;
        }
        return config; // if authorization header gets undefined, content-type when sending the request
    },
    (error) =>
        // Do something with request error
        Promise.reject(error)
);

// Add a response interceptor
axiosPrivate.interceptors.response.use(
    (response) =>
        // Do something with response data
        response,
    (error) => {
        if (error.response.status === 401) {
            // refresh token
        }
        Promise.reject(error);
    }
);

export default axiosPrivate;
