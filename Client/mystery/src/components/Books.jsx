import React from 'react';
import { useNavigate } from 'react-router-dom';
import list from "../../public/List.json";
import Cards from "./Cards";

function Books() {
  const navigate = useNavigate();

  const filterData = list.filter((data) => data.category === "Read");

  const handleCardClick = (title) => {
    if (title === "Truth") {
      navigate('/real');
    }
   else if (title === "Fiction") {
    navigate('/fiction');
  }else if (title === "Facts") {
    navigate('/facts');
  }else if (title === "Pics") {
    navigate('/images');
  }
  
  };
  

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-5'>
        <div>
          <h1 className='font-semibold text-xl pb-2'>You might like</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filterData.map((item) => (
            <div key={item.id} onClick={() => handleCardClick(item.title)}>
              <Cards item={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Books;
