import React from 'react';
import Home from './home/Home';
import { Route, Routes } from "react-router-dom"
import True from "./real/True";
import Fictional from './fiction/Fictional'; 
function App() {
  return (
    <> 
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/real" element={<True/>}/>
        <Route path="/fiction" element={<Fictional/>}/> 
      </Routes>
    </>
  );
}

export default App;
