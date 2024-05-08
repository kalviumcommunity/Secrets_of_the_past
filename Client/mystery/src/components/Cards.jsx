import React from 'react';

function Cards({ item }) {
  return (
    <div className="card-container">
      <div className="card">
        <img src={item.image} alt={item.title} className="card-image" />
        <div className="card-content">
          <h3>{item.title}</h3>
          <p>{item.author}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
