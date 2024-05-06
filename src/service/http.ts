import axios from "axios";
import {toast} from "react-toastify";
import CryptoJS from "crypto-js";

import configJson from "../utils/config.json";

const request = axios.create({
    baseURL: configJson.apiEndpoint,
});

// Request interceptor
request.interceptors.request.use(
    (config) => {
        if (!config.headers.key)
            config.headers.key = localStorage.getItem('key');

        if (!config.headers.sign) {
            const secret = localStorage.getItem('secret');
            const method = config.method?.toUpperCase();
            const url = config.url;
            let bodyString = "";

            if (config.data)
                bodyString = JSON.stringify(config.data);

            const signStr = `${method}${url}${bodyString}${secret}`;
            config.headers.sign = CryptoJS.MD5(signStr).toString();
        }

        return config;
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

request.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('Response error:', error);

        toast.error(error.response?.data?.errors?.[0]?.message);

        return Promise.reject(error);
    }
);

export default request;
