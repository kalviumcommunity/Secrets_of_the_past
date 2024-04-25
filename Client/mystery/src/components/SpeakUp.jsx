import { useState, useEffect } from 'react';
import axios from 'axios';

function SpeakUp() {
    const [comments, setComments] = useState([]);
    const [newMainComment, setNewMainComment] = useState('');
    const [newReply, setNewReply] = useState('');
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('token') !== null);

        axios.get('https://secrets-of-the-past-2.onrender.com/speakup', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            setComments(response.data);
            setLoading(false);
        })
        .catch(error => console.error('Error fetching comments:', error));
    }, []);

    const handleSubmitMainComment = () => {
        if (!isLoggedIn) {
            alert('Please log in to submit a comment.');
            return;
        }

        axios.post('https://secrets-of-the-past-2.onrender.com/speakup', {
            message: newMainComment
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            setComments([...comments, response.data]);
            setNewMainComment('');
        })
        .catch(error => console.error('Error adding main comment:', error));
    };

    const handleSubmitReply = (parentCommentId) => {
        if (!isLoggedIn) {
            alert('Please log in to submit a reply.');
            return;
        }

        axios.post(`https://secrets-of-the-past-2.onrender.com/speakup/${parentCommentId}`, {
            message: newReply
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            setComments(comments.map(comment => {
                if (comment._id === parentCommentId) {
                    return response.data;
                }
                return comment;
            }));
            setNewReply('');
        })
        .catch(error => console.error('Error adding reply:', error));
    };

    return (
        <div className='p-20'>
            <input 
                type="text" 
                placeholder="Type your comment here..." 
                value={newMainComment} 
                onChange={(e) => setNewMainComment(e.target.value)} 
            />
            <button onClick={handleSubmitMainComment}>Submit</button>

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
                                    value={newReply} 
                                    onChange={(e) => setNewReply(e.target.value)} 
                                />
                                <button onClick={() => handleSubmitReply(comment._id)}>Reply</button>
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
