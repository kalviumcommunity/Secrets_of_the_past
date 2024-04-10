import React, { useState, useEffect } from 'react';

function Facts() {
  const [facts, setFacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://secrets-of-the-past.onrender.com/facts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch facts');
        }
        setError(null); 
        return response.json();
      })
      .then(data => setFacts(data))
      .catch(error => setError(error.message)); 
  }, []); 

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>Let's read some <span className='text-red-700'>Facts</span></h1>
        {error && <p className='text-red-500'>{error}</p>} 
        {!error && (
          <>
            <p className='mt-7 pb-7'>Know the facts also you can write about it or add more </p>
            <ul>
              {facts.map((fact, index) => (
                <li key={index}>{fact.fact}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Facts;
