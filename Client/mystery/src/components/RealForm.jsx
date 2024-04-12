import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function RealForm({ onNewReal }) {
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    description: '',
    image: '',
    pdf: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://secrets-of-the-past-1.onrender.com/add-real', formData);
      console.log(response);
      onNewReal(response.data); 
      navigate('/real');
      setFormData({ 
        name: '',
        author: '',
        description: '',
        image: '',
        pdf: '',
      });
    } catch (error) {
      console.log('Error adding real books:', error);
     
    }
  }; 

  return (
    <div className='real-form-container flex justify-center items-center h-full mt-20'>
      <div className="w-full max-w-sm p-4 rounded-md shadow-md">
        <h1 className="text-lg font-bold mb-4">Add Real Book</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Book Name" value={formData.name} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md mb-2 block w-full" />
          <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md mb-2 block w-full" />
          <textarea name="description" placeholder="Description" rows="3" value={formData.description} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md mb-2 block w-full"></textarea>
          <input type="url" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md mb-2 block w-full" />
          <input type="url" name="pdf" placeholder="PDF URL" value={formData.pdf} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md mb-2 block w-full" />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 w-full">Submit</button>
        </form>
      </div>
    </div>
  );
}

RealForm.propTypes = {
  onNewReal: PropTypes.func.isRequired,
};

export default RealForm;
