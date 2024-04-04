import React from 'react';
import Home from './home/Home';
import { Route, Routes } from "react-router-dom"
import Incidents from "./real/Incidents";
import Fictional from './fiction/Fictional'; 
import More from './facts/More';
import Video from './videos/Video';
function App() {
  return (
    <> 
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/real" element={<Incidents/>}/>
        <Route path="/fiction" element={<Fictional/>}/> 
        <Route path="/facts" element={<More/>}/> 
        <Route path="/videos" element={<Video/>}/> 
      </Routes>
    </>
  );
}

export default App;
