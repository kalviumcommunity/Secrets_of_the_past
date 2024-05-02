import React, { useState } from 'react';

function Books() {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="custom-accordion">
        {[...Array(7)].map((_, index) => (
          <div
            className={`item ${activeItem === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggleItem(index)}
          >
            <div>
              <div className="icon">{index + 1}</div>
              <div className="title">
                <div className="text">Title {index + 1}</div>
              </div>
              <div className="content">
                {activeItem === index && (
                  <div>
                    {index === 0 && "Content for item 1. This is the content for the first item."}
                    {index === 1 && "Content for item 2. This is the content for the second item."}
                    {index === 2 && "Content for item 3. This is the content for the third item."}
                    {index === 3 && "Content for item 4. This is the content for the fourth item."}
                    {index === 4 && "Content for item 5. This is the content for the fifth item."}
                    {index === 5 && "Content for item 6. This is the content for the sixth item."}
                    {index === 6 && "Content for item 7. This is the content for the seventh item."}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
