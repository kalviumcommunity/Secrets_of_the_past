import React from 'react'
import Navbar from './Navbar'
import Videos from './Videos'

function real() {
  return (
    <>
        <Navbar/>
        <div className='min-h-screen'>
        <Videos/>
        </div>
    </>
  );
}

export default real