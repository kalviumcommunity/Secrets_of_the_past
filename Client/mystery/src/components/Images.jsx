import React, { useState, useEffect } from 'react';

function Images() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://secrets-of-the-past-1.onrender.com/images')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        return response.json();
      })
      .then(data => setImages(data))
      .catch(error => setError('Error fetching images. Please try again later.'));
  }, []);

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>Watch few <span className='text-red-700'>Rare Images</span></h1>
          {error && <p className='text-red-500'>{error}</p>}
          {!error && (
            <>
              <p className='mt-7 pb-7'>Well all the images below are not normal images, there is something mysterious in those. May be at first you would find it simple but description would guide you to think how mysterious these images are.</p>
              <ul className='grid grid-cols-1 md:grid-cols-1 gap-10'>
                {images.map((image, index) => (
                  <li key={index} className='flex flex-col items-center'>
                    <h2 className='mt-3 text-xl'>{image.name}</h2>
                    <img src={image.image} alt={image.name} style={{ width: '600px', height: '500px' }} />
                    <p className='mt-1 text-white-600 pt-5 flex'>{image.description}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Images;
