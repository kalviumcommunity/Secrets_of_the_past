import React from 'react'
import Navbar from '../components/Navbar'
import Facts from '../components/Facts'

function more() {
  return (
    <>
        <Navbar/>
        <div className='min-h-screen'>
        <Facts/>
        </div>
    </>
  );
}

export default more