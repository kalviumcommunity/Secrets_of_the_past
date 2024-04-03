import React from 'react';
import Home from './home/Home';
import { Route, Routes } from "react-router-dom"
import True from "./real/True";

function App() {
  return (
    <> 
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/real" element={<True/>}/>
      </Routes>
    </>
  );
}

export default App;
