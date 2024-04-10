import React from 'react'
import Navbar from './Navbar'
import Images from './Videos';

function real() {
  return (
    <>
        <Navbar/>
        <div className='min-h-screen'>
        <Images/>
        </div>
    </>
  );
}

export default real