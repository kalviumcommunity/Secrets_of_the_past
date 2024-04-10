import React, { useState, useEffect } from 'react';

function Facts() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    // Fetch data from your backend when the component mounts
    fetch('https://secrets-of-the-past.onrender.com/facts')
      .then(response => response.json())
      .then(data => setFacts(data))
      .catch(error => console.error('Error fetching facts:', error));
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>Let's read some <span className='text-red-700'>Facts</span></h1>
        <p className='mt-7 pb-7'>Know the facts also you can write about it or add more </p>
        <ul>
          {/* Map through facts and render them */}
          {facts.map((fact, index) => (
            <li key={index}>{fact.fact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Facts;
