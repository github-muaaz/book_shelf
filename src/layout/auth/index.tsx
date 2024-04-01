import React from "react";

import ChildrenInterface from "../../interfaces/Children";

const Auth: React.FC<ChildrenInterface> = ({children}) => {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default Auth;