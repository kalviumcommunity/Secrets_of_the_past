import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ImageUpdateForm() {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
  });
  const { id } = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    let source = axios.CancelToken.source();

    async function fetchImageData() {
      try {
        const response = await axios.get(`https://secrets-of-the-past-1.onrender.com/images/${id}`, {
          cancelToken: source.token
        });
        const imageData = response.data;
        
        setFormData({
          name: imageData.name,
          image: imageData.image,
          description: imageData.description,
        });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          console.error('Error fetching image data:', error);
        }
      }
    }

    fetchImageData();

    return () => {
      source.cancel('Component unmounted');
    };
  }, [id]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://secrets-of-the-past-1.onrender.com/update-image/${id}`, formData);
      navigate('/images');
    } catch (error) {
      console.error('Error updating image:', error);
    }
  };

  return (
    <div className="image-form-container flex justify-center items-center h-full mt-20">
      <div className="w-full max-w-sm p-4 bg-white rounded-md shadow-md">
        <h1 className="text-lg font-bold mb-4 text-black">Update Image</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Image Name" value={formData.name} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md mb-2 block w-full" />
          <input type="url" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md mb-2 block w-full" />
          <textarea name="description" placeholder="Description" rows="3" value={formData.description} onChange={handleChange} className="border border-gray-300 px-3 py-2 rounded-md mb-2 block w-full"></textarea>
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 transition duration-300 w-full">Update</button>

        </form>
      </div>
    </div>
  );
}

export default ImageUpdateForm;
