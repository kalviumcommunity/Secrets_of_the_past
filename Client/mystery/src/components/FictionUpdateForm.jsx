import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function FictionUpdateForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    pdf: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://secrets-of-the-past-2.onrender.com/fiction/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://secrets-of-the-past-2.onrender.com/fictionupdate/${id}`, formData);
      navigate('/fiction');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28 text-center'>
      <form onSubmit={handleSubmit} className='mt-7'>
        <div className='mb-4'>
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className='block w-full mt-2 p-2 border'
            />
          </label>
        </div>
        <div className='mb-4'>
          <label>
            Description:
            <input 
              type="text" 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              className='block w-full mt-2 p-2 border'
            />
          </label>
        </div>
        <div className='mb-4'>
          <label>
            Image URL:
            <input 
              type="text" 
              name="image" 
              value={formData.image} 
              onChange={handleChange} 
              className='block w-full mt-2 p-2 border'
            />
          </label>
        </div>
        <div className='mb-4'>
          <label>
            PDF URL:
            <input 
              type="text" 
              name="pdf" 
              value={formData.pdf} 
              onChange={handleChange} 
              className='block w-full mt-2 p-2 border'
            />
          </label>
        </div>
        <button 
          type="submit" 
          className='bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800'
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default FictionUpdateForm;
