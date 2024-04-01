import React from "react";

import ChildrenInterface from "../../interfaces/Children";

const Main: React.FC<ChildrenInterface> = ({children}) => {

    return(
       <div>
           {children}
       </div>
    )
}

export default Main;