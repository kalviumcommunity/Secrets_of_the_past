import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Fiction() {
  const [stories, setStories] = useState([]);
  const [updatingId, setUpdatingId] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://secrets-of-the-past-2.onrender.com/fiction')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch fiction stories');
        }
        setError(null);
        return response.json();
      })
      .then(data => {
        setStories(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch fiction stories. Please try again later.');
      });
  }, []); 

  const handleUpdate = (id) => {
    setUpdatingId(id);
    navigate(`/fictionupdate/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://secrets-of-the-past-2.onrender.com/fiction/${id}`, {
        method: 'DELETE',
      });
      setStories(stories.filter(story => story._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  if (updatingId) {
    return null;
  }

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>Would you like to read <span className='text-red-700'>Fictional Stories?</span></h1>
        {error && <p className='text-red-500'>{error}</p>}
        {!error && (
          <>
            <p className='mt-7 pb-7'>Here are a few fictional stories for you</p>
            <ul>
              {stories.map((story, index) => (
                <li key={index} className="flex items-center pb-12">
                  <img src={story.image} alt={story.name} style={{ width: '100px', height: '150px' }} />
                  <div className="ml-4">
                    <h2>{story.name}</h2>
                    <p className='md:pt-3 p-4'>{story.description}</p>
                    <a href={story.pdf} target="_blank" rel="noopener noreferrer">Read Book</a>
                  </div>
                  <div className="flex mt-3">
                    <button className='imgupdate' onClick={() => handleUpdate(story._id)}>Update</button>
                    <button className='imgdel' onClick={() => handleDelete(story._id)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Fiction;
