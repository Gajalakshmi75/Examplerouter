import React from "react";
import Demo from "./Examplerouter/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./Examplerouter/Home";
import About from "./Examplerouter/About";
import DashBoard from "./Examplerouter/DashBoard";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
    <div className="App">
      <Demo/>
    
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Dashboard/:name" element={<DashBoard/>}/>
      </Routes>
  
    </div>
  );
}
export default App;