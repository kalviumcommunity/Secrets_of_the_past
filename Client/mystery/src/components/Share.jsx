import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Share() {
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [experiences, setExperiences] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editInfo, setEditInfo] = useState('');

  useEffect(() => {
    // Fetch all shared experiences when the component loads
    axios.get('https://secrets-of-the-past-2.onrender.com/share')
      .then(response => setExperiences(response.data))
      .catch(error => console.error('Error fetching experiences:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExperience = { title, info };

    // Post the new experience to the server
    axios.post('https://secrets-of-the-past-2.onrender.com/add-share', newExperience)
      .then(response => {
        setExperiences([...experiences, response.data]); // Update the experiences list
        setTitle(''); // Clear the form fields
        setInfo('');
      })
      .catch(error => console.error('Error sharing experience:', error));
  };

  const handleEdit = (experience) => {
    setEditMode(experience._id);
    setEditTitle(experience.title);
    setEditInfo(experience.info);
  };

  const handleUpdate = (id) => {
    const updatedExperience = { title: editTitle, info: editInfo };

    axios.put(`https://secrets-of-the-past-2.onrender.com/shareupdate/${id}`, updatedExperience)
      .then(response => {
        setExperiences(experiences.map(exp => exp._id === id ? response.data : exp));
        setEditMode(null);
        setEditTitle('');
        setEditInfo('');
      })
      .catch(error => console.error('Error updating experience:', error));
  };

  const handleDelete = (id) => {
    axios.delete(`https://secrets-of-the-past-2.onrender.com/share-delete/${id}`)
      .then(() => {
        setExperiences(experiences.filter(exp => exp._id !== id));
      })
      .catch(error => console.error('Error deleting experience:', error));
  };

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 pt-12">Share Your Experience</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium">Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-lg font-medium">Info:</label>
          <textarea 
            value={info} 
            onChange={(e) => setInfo(e.target.value)} 
            required 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Share
        </button>
      </form>
      
      <h2 className="text-xl font-bold mt-8 mb-4">Shared Experiences</h2>
      <ul className="space-y-4">
        {experiences.map((experience) => (
          <li key={experience._id} className="p-4 border border-gray-200 rounded-lg shadow-sm">
            {editMode === experience._id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-2"
                />
                <textarea
                  value={editInfo}
                  onChange={(e) => setEditInfo(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-2"
                />
                <button 
                  onClick={() => handleUpdate(experience._id)} 
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 mr-2"
                >
                  Update
                </button>
                <button 
                  onClick={() => setEditMode(null)} 
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold">{experience.title}</h3>
                <p className="mt-2 text-gray-700">{experience.info}</p>
                <div className="mt-4 space-x-2">
                  <button 
                    onClick={() => handleEdit(experience)} 
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(experience._id)} 
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
    </div>
    
  );
}

export default Share;
