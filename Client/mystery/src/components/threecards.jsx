import React from 'react';

function ThreeCards() {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="card bg-black-100 border border-gray-300 rounded-lg p-4 m-4 w-full md:w-auto md:max-w-xs lg:max-w-sm xl:max-w-md">
        <h2 className="text-xl font-semibold mb-2">Card 1</h2>
        <p className="text-gray-700">This is the content of card 1.</p>
      </div>
      <div className="card bg-black-100 border border-gray-300 rounded-lg p-4 m-4 w-full md:w-auto md:max-w-xs lg:max-w-sm xl:max-w-md">
        <h2 className="text-xl font-semibold mb-2">Card 2</h2>
        <p className="text-gray-700">This is the content of card 2.</p>
      </div>
      <div className="card bg-black-100 border border-gray-300 rounded-lg p-4 m-4 w-full md:w-auto md:max-w-xs lg:max-w-sm xl:max-w-md">
        <h2 className="text-xl font-semibold mb-2">Card 3</h2>
        <p className="text-gray-700">This is the content of card 3.</p>
      </div>
    </div>
  );
}

export default ThreeCards;
