import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FactsForm() {
  const [formData, setFormData] = useState({
    title: '',
    info: '', 
  });

  const [facts, setFacts] = useState([]);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const response = await axios.get('https://secrets-of-the-past-1.onrender.com/facts');
        setFacts(response.data);
      } catch (error) {
        console.log('Error fetching facts:', error);
      }
    };

    fetchFacts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); 
    try {
      await axios.post('https://secrets-of-the-past-1.onrender.com/add-facts', formData); 
      navigate('/facts');
    } catch (error) {
      console.log('Error adding fictional book:', error);
    }
  };

  const SubmitButton = () => (
    <button
      type="submit"
      onClick={handleSubmit}
      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 w-full"
    >
      Submit
    </button>
  );

  return (
    
    <div className='fictional-form-container flex justify-center items-center h-full mt-20'>
      

      <div className="w-full max-w-sm p-4 bg-white rounded-md shadow-md">
        <h1 className="text-lg font-bold mb-4">Add Facts</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md mb-2 block w-full" />
          <textarea name="info" placeholder="Info" rows="3" value={formData.info} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md mb-2 block w-full"></textarea>
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}

export default FactsForm;
