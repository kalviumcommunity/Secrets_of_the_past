import React from 'react';

function Cards({ item }) {
  return (
    <div className="p-4 transform transition-transform duration-300 hover:scale-105">
      <div className="bg-black rounded-lg overflow-hidden shadow-lg">
        <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
