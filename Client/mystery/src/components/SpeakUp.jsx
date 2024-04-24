import { useState, useEffect } from 'react';
import axios from 'axios';

function SpeakUp() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        
        const userToken = localStorage.getItem('token');
        if (userToken) {
            setIsLoggedIn(true);
        }

        axios.get('https://secrets-of-the-past-2.onrender.com/speakup')
            .then(response => {
                setComments(response.data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching comments:', error));
    }, []);

    const handleSubmit = () => {
        if (!isLoggedIn) {
            alert('Please log in to submit a comment.');
            return;
        }

        axios.post('https://secrets-of-the-past-2.onrender.com/speakup', {
            message: newComment
        })
        .then(response => {
            setComments([...comments, response.data]);
            setNewComment('');
        })
        .catch(error => console.error('Error adding comment:', error));
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Type your comment here..." 
                value={newComment} 
                onChange={(e) => setNewComment(e.target.value)} 
            />
            <button onClick={handleSubmit}>Submit</button>

            <div>
                {loading ? (
                    <p>Loading comments...</p>
                ) : (
                    <div>
                        {comments.map(comment => (
                            <div key={comment._id}>
                                <p>{comment.message}</p>
                                <input 
                                    type="text" 
                                    placeholder="Reply to this comment..." 
                                    value={newComment} 
                                    onChange={(e) => setNewComment(e.target.value)} 
                                />
                                <button onClick={handleSubmit}>Reply</button>
                                {comment.replies.map(reply => (
                                    <div key={reply._id}>
                                        <p>{reply.message}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SpeakUp;
