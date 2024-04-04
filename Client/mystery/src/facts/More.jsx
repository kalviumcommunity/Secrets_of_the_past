import React from 'react'
import Navbar from '../components/Navbar'
import Facts from '../components/Facts'

function More() {
  return (
    <>
        <Navbar/>
        <div className='min-h-screen'>
        <Facts/>
        </div>
    </>
  );
}

export default More