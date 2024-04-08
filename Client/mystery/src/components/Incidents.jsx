import React from 'react'
import Navbar from './Navbar'
import Real from './Real'

function Incidents() {
  return (
    <>
        <Navbar/>
        <div className='min-h-screen'>
        <Real/>
        </div>
    </>
  );
}

export default Incidents