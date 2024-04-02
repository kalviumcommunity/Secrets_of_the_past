import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Books from './components/Books';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    
    <> 
      <Navbar />
      <Banner />
      <Books/>
    </>
  );
}

export default App;
