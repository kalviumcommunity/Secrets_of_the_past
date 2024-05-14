import { useEffect, useRef } from 'react';
import banner from "../../public/Banner.jpeg";
import Typed from 'typed.js';

function Banner() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Hello Detectives,<br />welcome to the dark world of mysteries just read and dive into <span class='text-yellow-400'>THE SECRETS</span>"],
      typeSpeed: 70,
      loop: true
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='bg-image'>
      <div className='max-w-screen-3x-1 container mx-auto md:px-20 py-24 flex flex-col md:flex-row my-10'>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-20'>
          <div className='space-y-10'>
            <h1 ref={typedRef} className='text-2xl font-bold'></h1>
            <p className='text-xl'>Sometimes truth lies. It's forced to do so as it's incomplete. That incorrect truth forces itself to lie and that lie now presents itself as the truth.</p>
          </div>
        </div>
        <div className='order-1 w-full md:w-1/2 md:order-2'>
          <div style={{ overflow: 'hidden', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
            <div style={{ maskImage: 'radial-gradient(circle at top left, transparent 20%, black 90%)', WebkitMaskImage: 'radial-gradient(circle at top left, transparent 20%, black 100%)' }}>
              <img src={banner} className='w-92 h-92 pt-19 md:pl-12 md:pt-0' alt="home-book" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
