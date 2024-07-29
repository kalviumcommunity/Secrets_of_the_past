import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Real() {
  const [stories, setStories] = useState([]);
  const [updatingId, setUpdatingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem('login') === 'true';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://secrets-of-the-past-2.onrender.com/books');
        setStories(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = (id) => {
    setUpdatingId(id);
    navigate(`/booksupdate/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this story?");
    if (!confirmed) {
      return;
    }

    try {
      await axios.delete(`https://secrets-of-the-past-2.onrender.com/books-delete/${id}`);
      setStories(prevBooks => prevBooks.filter(book => book._id !== id));
    } catch (error) {
      console.log('Error deleting the book', error);
    }
  };

  const filteredStories = stories.filter(story =>
    story.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (updatingId) {
    return null; 
  }

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 bg-black'>
      <div className='mt-28 items-center justify-center text-center text-white'>
        <h1 className='text-2xl md:text-4xl'>Would you like to read <span className='text-red-700'>Real Stories?</span></h1>
        <p className='mt-7 pb-7'>Here are a few real stories for you</p>
        
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded text-white"
        />

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
                    className='bg-blue-900 hover:bg-blue-600 text-white py-1 px-3 rounded'
                    onClick={() => handleUpdate(story._id)}
                  >
                    Update
                  </button>
                  <button
                    className='bg-red-900 hover:bg-red-600 text-white py-1 px-3 rounded'
                    onClick={() => handleDelete(story._id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Real;
