import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Home = () => {
    const [auth,setAuth]=useState(false);
    if(auth){
        return <Navigate to='/Dashboard'/>
    }
  return (
    <div>
        <div>
        <center>
            <h4>Displaying Home page</h4>
            <button onClick={()=> setAuth(true)}>Login</button>
        </center>
    </div>
    </div>
  )
}

export default Home