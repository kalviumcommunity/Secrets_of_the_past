import React from 'react'
import Navbar from '../components/Navbar'
import Real from '../components/Real'

function Incidents() {
  return (
    <>
        <Navbar/>
        <div className='min-h-screen'>
        <Real/>
        </div>
        {/* Incidents refers to real page */}
    </>
  );
}

export default Incidents