const Auth = ({children}) => {

    const checkAuth = () => {
        const key = localStorage.getItem('key');
        const secret = localStorage.getItem('secret');

        return key && secret;
    }

    const path = window.location.pathname;

    if (path.includes("books") && !checkAuth())
        window.location.pathname = '/sign-up';

    else if (path.includes("sign-up") && checkAuth())
        window.location.pathname = '/books';

    return children;
}

export default Auth;