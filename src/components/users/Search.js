// import React,{useContext} from 'react'
// import { MyContext } from '../../context/context_api';
// import { useEffect } from 'react';
// const Search = () => {
//   const { state, setState } = useContext(MyContext);

 
//   return (
//     <div>
// <form className='form'>
//     <input type="text" name='text' placeholder='search'/>
//     <input type="submit" value="submit" className='btn btn-dark btn-block'/>
//     <button onClick={() => setState(previus=>previus+1)}>Change State</button>
//     <h1>{state}</h1>
// </form>


//     </div>
//   )
// }

// export default Search
import React, { useContext } from 'react';
import { MyContext } from '../../context/context_api';

const ComponentA = () => {
  const { state, setState } = useContext(MyContext);

  return (
    <div>
      <h1>Component A</h1>
      <p>State: {state}</p>
      <button onClick={() => setState(previus=>previus+1)}>Update State</button>
      
    </div>
  );
};

export default ComponentA;
