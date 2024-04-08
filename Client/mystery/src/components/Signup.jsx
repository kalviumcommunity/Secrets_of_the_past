import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'; 
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signupError, setSignupError] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (password.length < 6) {
                setSignupError("Password should be more than 5 characters");
                return;
            }
            const response = await axios.post(`https://secrets-of-the-past-2.onrender.com/signup`, { username, password }); 
            if (response.status === 201) {
                sessionStorage.setItem('login', true);
                sessionStorage.setItem('signupSuccess', 'Signup successful');
                console.log(response.data); 
                setSignupSuccess(true); 
            } else {
                setSignupError('Signup failed');
            }
        } catch (err) {
            console.error(err.response.data);
            setSignupError(err.response.data.error || 'An error occurred during the signup');
        }
    }

    if (signupSuccess) {
        return <Navigate to="/login" />;
    }

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Username:</label>
                    <input
                        type="text"
                        id="name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{ padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
                    />
                </div>

                <div>
                    <label htmlFor="password" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
                    />
                </div>
                {signupError && <p style={{ color: 'red', marginBottom: '10px' }}>{signupError}</p>}
                <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>Sign Up</button>
            </form>
            <p style={{ textAlign: 'center' }}>Already have an account? <Link to="/login" style={{ color: '#007bff', textDecoration: 'none' }}>Login</Link></p>
        </div>
    );
}

export default Signup;
