import React from 'react'
import Navbar from '../components/Navbar'
import Real from '../components/Real'

function real() {
  return (
    <>
        <Navbar/>
        <div className='min-h-screen'>
        <Real/>
        </div>
    </>
  );
}

export default real