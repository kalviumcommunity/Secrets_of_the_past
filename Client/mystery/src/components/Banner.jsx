import React, { useEffect, useRef } from 'react';
import banner from "../../public/Banner.jpeg";
import Typed from 'typed.js';

function Banner() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Hello Detectives,<br />welcome to the dark world of mysteries just read and dive into <span class='text-yellow-400'>THE SECRETS</span>"],
      typeSpeed: 60,
      loop: true
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='bg-image'>
      <div className='max-w-screen-3x-1 container mx-auto md:px-20 py-12 flex flex-col md:flex-row my-10'>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-30'>
          <div className='space-y-10'>
            <h1 ref={typedRef} className='text-2xl font-bold'></h1>
            <p className='text-xl'>Sometimes truth lies. It's forced to do so as it's incomplete. That incorrect truth forces itself to lie and that lie now presents itself as the truth.</p>
            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Secondary</button>
        </div>
        <div className='order-1 w-full md:w-1/2 md:order-2'>
          <div style={{ overflow: 'hidden', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
            <div style={{ maskImage: 'radial-gradient(circle at top left, transparent 20%, black 100%)', WebkitMaskImage: 'radial-gradient(circle at top left, transparent 20%, black 100%)' }}>
              <img src={banner} className='w-92 h-92 pt-12 md:pl-12' alt="" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
