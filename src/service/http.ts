import axios from "axios";
import { toast } from "react-toastify";

// import storage from "../store/local-storage";
import configJson from "../utils/config.json";

const request = axios.create({
    baseURL: configJson.apiEndpoint,
});

const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// Request interceptor
request.interceptors.request.use(
    (config: any) => {
        // const storageItem = storage.get(configJson.storageKey);

        // if (!config.headers.Authorization) {
        //     const token = storageItem?.auth?.token || {};
        //
        //     if (token)
        //         config.headers.Authorization = `${token?.tokenType} ${token?.accessToken}`;
        // }

        if (!config.headers.key)
            config.headers.key = configJson.apiKey;

        if (!config.headers.secret)
            config.headers.secret = configJson.apiSecret;

        config.headers.TimeZone = timezone;
        return config;
    },
    (error: any) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

request.interceptors.response.use(
    (response: any) => response,
    (error: any) => {
        console.error('Response error:', error);

        toast.error(error.response?.data?.errors?.[0]?.message);

        return Promise.reject(error);
    }
);

export default request;