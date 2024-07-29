import React, { useState, useEffect } from "react";

function Facts() {
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
    <div className="max-w-screen-lg mx-auto p-4 md:p-8 bg-black text-white">
      <div className="text-center mt-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Let's read some <span className="text-red-600">Facts</span>
        </h1>
        {error && <p className="text-red-600 text-lg">{error}</p>}
        {loading ? (
          <p className="text-gray-400 text-lg">Loading...</p>
        ) : (
          !error && (
            <>
              <p className="text-gray-300 text-lg mb-8">
                Know the facts, you can also write about them or add more.
              </p>
              <ul className="space-y-4">
                {facts.map((fact, index) => (
                  <li key={index} className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
                    <button
                      className="w-full text-left p-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold focus:outline-none"
                      onClick={() => handleTitleClick(index)}
                    >
                      {fact.title}
                    </button>

                    {selectedFact === index && (
                      <div className="p-4 bg-gray-900">
                        <p className="text-white">{fact.info}</p> {/* Changed to white */}
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

export default Facts;
