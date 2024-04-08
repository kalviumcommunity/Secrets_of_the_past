import React from 'react';
import Navbar from './Navbar';
import Fiction from './Fiction';

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
