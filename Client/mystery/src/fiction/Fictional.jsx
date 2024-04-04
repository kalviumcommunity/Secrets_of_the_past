import React from 'react';
import Navbar from '../components/Navbar';
import Fiction from '../components/Fiction';

function Fictional() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <Fiction />
      </div>
    </>
  );
}

export default Fictional;
