// import CryptoJS from "crypto-js";

const createSign = (
    method: string,
    url: string,
    body: string,
    secret: string
) => {
    const stringToSign = `${method}${url}${body}${secret}`;
    // return CryptoJS.MD5(stringToSign).toString();
};

export default createSign;