import React from 'react'
import Navbar from '../components/Navbar'
import Videos from '../components/Videos'

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