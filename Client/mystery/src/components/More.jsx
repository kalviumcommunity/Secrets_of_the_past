import React from 'react'
import Navbar from './Navbar'
import Facts from './Facts'

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