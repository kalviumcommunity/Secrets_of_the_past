import React from 'react'
import Navbar from './Navbar'
import Images from './Images';

function Image() {
  return (
    <>
        <Navbar/>
        <div className='min-h-screen'>
        <Images/>
        </div>
    </>
  );
}

export default Image