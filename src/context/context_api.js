// import React, { createContext, useState } from 'react';

// // Create the context
// const MyContext = createContext();

// // Create a provider component
// const MyProvider = ({ children }) => {
//   const [state, setState] = useState(1);

//   return (
//     <MyContext.Provider value={{ state, setState }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

// export { MyContext, MyProvider };
import React from "react";
import { createContext,useState } from "react";

const MyContext = createContext()
const MyProvider=({children})=>{
const [state,setState] = useState(1)
return(
    <MyContext.Provider value={{state,setState}}>
        {children}
    </MyContext.Provider>
)
}

export {MyProvider,MyContext}