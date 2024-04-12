import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Real() {
  const [stories, setStories] = useState([]);

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

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>Would you like to read <span className='text-red-700'>Real Stories ?</span></h1>
        <p className='mt-7 pb-7'>Here are a few real stories for you</p>
        <ul>
          {stories.map((story, index) => (
            <li key={index} className="flex items-center pb-12">
              <img src={story.image} alt={story.name} style={{ width: '100px', height: '150px' }} />
              <div className="ml-4">
                <h2>{story.name}</h2>
                <p className='md:pt-3 p-4'>{story.description}</p>
                <a href={story.pdf} target="_blank" rel="noopener noreferrer">Read Book</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Real;
