import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Fiction() {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem('login') === 'true';

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('https://secrets-of-the-past-2.onrender.com/fiction');
        if (!response.ok) {
          throw new Error('Failed to fetch fiction stories');
        }
        const data = await response.json();
        setStories(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch fiction stories. Please try again later.');
      }
    };

    fetchStories();
  }, []);

  const handleUpdate = (id) => {
    navigate(`/fictionupdate/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this story?");
    if (!confirmed) return;

    try {
      await fetch(`https://secrets-of-the-past-2.onrender.com/fiction-delete/${id}`, {
        method: 'DELETE',
      });
      setStories(stories.filter(story => story._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const filteredStories = stories.filter(story =>
    story.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 bg-black'>
      <div className='mt-28 items-center justify-center text-center text-white'>
        <h1 className='text-2xl md:text-4xl'>
          Would you like to read <span className='text-red-700'>Fictional Stories?</span>
        </h1>
        {error && <p className='text-red-500'>{error}</p>}
        {!error && (
          <>
            <div className='flex items-center justify-center mt-7 pb-7'>
              <p className='mr-4'>Here are a few fictional stories for you</p>
              <input
                type="text"
                placeholder="Search by name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 border border-gray-300 rounded text-white"
              />
            </div>
            <ul>
              {filteredStories.map((story) => (
                <li key={story._id} className="flex items-center pb-12 border border-white rounded-lg shadow-md p-4 mb-4">
                  <img src={story.image} alt={story.name} className="w-24 h-36 object-cover" />
                  <div className="ml-4 text-white">
                    <h2 className="text-lg font-semibold">{story.name}</h2>
                    <p className='md:pt-3 p-4'>{story.description}</p>
                    <a href={story.pdf} target="_blank" rel="noopener noreferrer" className="text-yellow-500 underline text-xl hover:text-yellow-700">
                  Read Book
                </a>
                  </div>
                  {isLoggedIn && (
                    <div className="flex mt-3 space-x-4">
                      <button
                        className='bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        onClick={() => handleUpdate(story._id)}
                      >
                        Update
                      </button>
                      <button
                        className='bg-red-900 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
                        onClick={() => handleDelete(story._id)}
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

export default Fiction;
