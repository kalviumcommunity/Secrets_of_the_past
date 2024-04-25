import React, { useState, useEffect } from "react";

function Facts() {
  const [facts, setFacts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedFact, setSelectedFact] = useState(null);
  const [replyInput, setReplyInput] = useState("");
  const [replies, setReplies] = useState({});

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
        initializeReplies(data);
      })
      .catch((error) => setError(error.message));
  }, []);

  const initializeReplies = (factsData) => {
    const initialReplies = {};
    factsData.forEach((_, index) => {
      initialReplies[index] = [];
    });
    setReplies(initialReplies);
  };

  const handleTitleClick = (index) => {
    setSelectedFact(index === selectedFact ? null : index);
  };

  const handleReplyChange = (event) => {
    setReplyInput(event.target.value);
  };

  const handleReplySubmit = (index) => {
    const newReply = {
      id: Date.now(), // You may use a more robust ID generation method
      content: replyInput,
      replies: [], // For nested replies
    };

    const updatedReplies = { ...replies };
    updatedReplies[index].push(newReply);
    setReplies(updatedReplies);

    // Clear the reply input after submission
    setReplyInput("");
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          Let's read some <span className="text-red-700">Facts</span>
        </h1>
        {error && <p className="text-red-500">{error}</p>}
        {!error && (
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
                    style={{ width: "100%", maxWidth: "400px", height: "auto" }}
                  >
                    {fact.title}
                  </button>

                  {selectedFact === index && (
                    <div className="fact-info bg-black text-white p-2 rounded-md cursor-default pt-7">
                      <p>{fact.info}</p>
                      <div className="mt-3">
                        <input
                          type="text"
                          value={replyInput}
                          onChange={handleReplyChange}
                          className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md mr-2"
                          placeholder="Write your reply..."
                        />
                        <button
                          onClick={() => handleReplySubmit(index)}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                        >
                          Reply
                        </button>
                      </div>
                      <ul className="mt-3">
                        {replies[index].map((reply) => (
                          <li key={reply.id} className="mb-2">
                            {reply.content}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Facts;
