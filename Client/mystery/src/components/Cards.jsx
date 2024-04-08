import React from 'react';

function Cards({ item }) {
  return (
    <>
   <div className="partition">
    
      <div className='mt-10'> 
        <div className="card w-96 bg-base-100 shadow-xl">
          <a href={item.pdf} target="_blank" rel="noopener noreferrer"> 
            <figure className='color'><img src={item.image} alt="Book Cover" /></figure> 
          </a>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.name}</p>
            <div className="card-actions justify-end">
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
