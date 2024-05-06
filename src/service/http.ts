import axios from "axios";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js";

import configJson from "../utils/config.json";

const request = axios.create({
    baseURL: configJson.apiEndpoint,
});

// Request interceptor
request.interceptors.request.use(
    (config) => {
        if (!config.headers.key)
            config.headers.key = localStorage.getItem('key') || configJson.apiKey;

        if (!config.headers.sign) {
            const secret = localStorage.getItem('secret') || configJson.apiSecret;
            const method = config.method?.toUpperCase();
            const url = config.url;
            let bodyString = "";

            if (config.data) {
                bodyString = JSON.stringify(config.data);
            }

            // console.log('body', bodyString, config.data)

            const signstr = `${method}${url}${bodyString}${secret}`;
            const sign = CryptoJS.MD5(signstr).toString();
            config.headers.sign = sign;
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
