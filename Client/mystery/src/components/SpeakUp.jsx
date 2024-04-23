import React, { useState } from 'react';
import axios from 'axios';

function SpeakUp() {
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('login') === 'true');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isLoggedIn) {
        console.error('User is not logged in');
        return;
      }
      const response = await axios.post(
        'https://secrets-of-the-past-1.onrender.com/speakup',
        { info: message },
        { withCredentials: true }
      );
      console.log('Message posted:', response.data);
      setMessage('');
    } catch (error) {
      console.error('Error posting message:', error);
    }
  };

  return (
    <div>
      <h2>SpeakUp</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          rows={4}
          cols={50}
          required
        />
        <br />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default SpeakUp;
