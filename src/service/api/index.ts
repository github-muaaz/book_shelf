import { toast } from "react-toastify";
import request from "../http";

class Api {
    static SignUp = (data: { key: string; secret: string }, onResolve?: any) => {
        request
            .post(`/signup`, data)
            .then((res) => {
                localStorage.setItem("key", data.key);
                localStorage.setItem("secret", data.secret);
                toast.success("Signed up successfully!");

                window.location.pathname = '/books';

                onResolve();
            })
            .catch((err) => {
                console.log('err',err)
                toast.error(err.response?.data?.message);
            });
    };

    static Me = () => {
        return request
            .get(`/myself`)
            .then((res) => {
                return res.data?.data;
            })
            .catch((err) => {
                toast.error(err.response?.message);
            });
    };

    static FetchData = (url: string, config?: object) => {
        return request
            .get(url, config)
            .then((res) => {
                return res.data?.data;
            })
            .catch((err) => {
                if (err.response?.status === 403)
                    toast.error("Please! Login or Sign up first");
                else toast.error(err.response?.message);
            });
    };

    static PostData = (url: string, data: object, notify?: boolean) => {
        return request
            .post(url, data)
            .then((res) => {
                if (notify && res.data?.message) toast.success(res.data?.message);
                return res.data?.data;
            })
            .catch((err) => {
                console.log('post request error', err);
                if (err.response?.status === 403)
                    toast.error('Please! Login or Sign up first');
                else
                    toast.error(err.response?.message);
                return err;
            });
    };

    static PutData = (url: string, data: object, notify: boolean) => {
        return request
            .patch(url, data)
            .then((res) => {
                if (notify && res.data?.message) toast.success(res.data?.message);
                return res.data?.data;
            })
            .catch((err) => {
                console.log('put request error', err);
                if (err.response?.status === 403)
                    toast.error('Please! Login or Sign up first');
                else toast.error(err.response?.message);
                return err;
            });
    };

    static Delete = (url: string, notify = false) => {
        return request
            .delete(url)
            .then((res) => {
                if (notify && res.data?.isOk) toast.success('Successfully deleted');
                return res;
            })
            .catch((err) => {
                console.log('delete request error', err);
                if (err.response?.status === 403) toast.error('Please login or sign up first');
                else toast.error(err.response?.data?.message || 'An error occurred');
                return err;
            });
    };


}

export default Api;