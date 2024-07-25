import React, { useState, useEffect } from "react";

function Share() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFact, setSelectedFact] = useState(null);

  useEffect(() => {
    fetch("https://secrets-of-the-past.onrender.com/facts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch facts");
        }
        setError(null);
        return response.json();
      })
      .then((data) => {
        setFacts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleTitleClick = (index) => {
    setSelectedFact(index === selectedFact ? null : index);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center relative">
        <h1 className="text-2xl md:text-4xl">
          Let's read some <span className="text-red-700">Facts</span>
        </h1>
        {error && <p className="text-red-500">{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          !error && (
            <>
              <p className="mt-7 pb-7">
                Know the facts also you can write about it or add more{" "}
              </p>
              <ul>
                {facts.map((fact, index) => (
                  <li key={index} className="relative mb-6">
                    <button
                      className="bg-gray-300 hover:bg-black-500 text-gray-800 font-bold md:pl-4 pr-4 py-2 rounded focus:outline-none focus:shadow-outline color-white"
                      onClick={() => handleTitleClick(index)}
                      style={{
                        width: "100%",
                        maxWidth: "400px",
                        height: "auto"
                      }}
                    >
                      {fact.title}
                    </button>

                    {selectedFact === index && (
                      <div className="fact-info bg-black text-white p-2 rounded-md cursor-default pt-7">
                        <p>{fact.info}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )
        )}
      </div>
    </div>
  );
}

export default Share;
