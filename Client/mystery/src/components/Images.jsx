import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Images() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem('login') === 'true';

  useEffect(() => {
    fetch('https://secrets-of-the-past-1.onrender.com/images')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        return response.json();
      })
      .then(data => setImages(data))
      .catch(error => {
        console.error('Error fetching images:', error);
        setError('Error fetching images. Please try again later.');
      });
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this image?");
    if (!confirmed) {
      return;
    }

    try {
      await fetch(`https://secrets-of-the-past-1.onrender.com/delete-images/${id}`, {
        method: 'DELETE',
      });
      setImages(prevImages => prevImages.filter(image => image._id !== id));
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  const handleUpdate = (id) => {
    setUpdatingId(id);
    navigate(`/update-image/${id}`);
  };

  if (updatingId) {
    return null; 
  }

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>Watch a few <span className='text-red-700'>Rare Images</span></h1>
        {error && <p className='text-red-500'>{error}</p>}
        {!error && (
          <>
            <p className='mt-7 pb-7'>All the images below are not normal images; there is something mysterious about them. They may appear simple at first, but the descriptions will guide you to see how mysterious they are.</p>
            <ul className='grid grid-cols-1 md:grid-cols-1 gap-10'>
              {images.map(({ _id, name, image, description }) => (
                <li key={_id} className='flex flex-col items-center'>
                  <h2 className='mt-3 text-xl'>{name}</h2>
                  <img src={image} alt={name} style={{ width: '600px', height: '500px' }} />
                  <p className='mt-1 text-white-600 pt-5 flex'>{description}</p>
                  {isLoggedIn && (
                    <div className="flex mt-3 space-x-4">
                      <button
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        onClick={() => handleUpdate(_id)}
                      >
                        Update
                      </button>
                      <button
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                        onClick={() => handleDelete(_id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Images;
