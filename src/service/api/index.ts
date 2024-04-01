import {toast} from "react-toastify";

import storage from "../../store/local-storage";
import request from "../http";
import config from "../../utils/config.json";

class Auth {

    static SignUp = (data: object) => {
        request
            .post(`/signup`, data)
            .then(res => {
                console.log('res', res)

                // todo save token (if exists in model) to local storage
                storage.set(config.storageKey, {isAuthenticated: true, auth: {token: res.data?.data}}, true);

            })
            .catch((err) => {
                storage.set(config.storageKey, {isAuthenticated: false}, true)

                toast.error(err.response?.message)
            });
    };

    static FetchData = (url: string, config?: object) => {
        return request
            .get(url, config)
            .then(res => {
                return res.data?.data;
            })
            .catch(err => {
                console.log('get request error', err)
                if (err.response?.status === 403)
                    toast.error('Please! Login or Sign up first')
                else
                    toast.error(err.response?.message);
            });
    };

    static PostData = (url: string, data: object, notify?: boolean) => {
        return request
            .post(url, data)
            .then(res => {
                if (notify && res.data?.message)
                    toast.success(res.data?.message)

                return res.data?.data;
            })
            .catch(err => {
                console.log('post request error',err)

                if (err.response?.status === 403)
                    toast.error('Please! Login or Sign up first')
                else
                    toast.error(err.response?.message);

                return err;
            });
    };

    static PutData = (url: string, data: object, notify: boolean) => {
        return request
            .patch(url, data)
            .then((res) => {
                if (notify && res.data?.message)
                    toast.success(res.data?.message)
                return res.data?.data;
            })
            .catch(err => {
                console.log('put request error',err)
                if (err.response?.status === 403)
                    toast.error('Please! Login or Sign up first')
                else
                    toast.error(err.response?.message);
            });
    };

    static Delete = (url: string, notify = false) => {
        return request
            .delete(url)
            .then((res) => {
                if (notify && res.data?.isOk)
                    toast.success('Successfully deleted');

                return res;
            })
            .catch(err => {
                console.log('delete request error', err);
                if (err.response?.status === 403)
                    toast.error('Please login or sign up first');
                else
                    toast.error(err.response?.data?.message || 'An error occurred');

                return err;
            });
    }

}

export default Auth;