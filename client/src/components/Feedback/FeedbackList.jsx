import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './feedbackList.css'; 
import { toast } from 'react-toastify';

const FeedbackList = () => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {

        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/';
        }

        const fetchFeedback = async () => {
            try {
                const result = await axios.get('http://localhost:5000/feedback', {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                });
                if (result.data) {
                    setFeedback(result.data);
                } else {
                    toast.error("You don't have feedback")
                }
            } catch (error) {
                toast.error("Error fetching feedback")
            }
        };
        fetchFeedback();
    }, []);

    return (
        <div className="feedback-list">
            <h2>Feedback List</h2>
            <ul>
                {
                    feedback.length > 0 ? (
                        feedback.map((item, i) => (
                            <li key={item._id || i}>
                                <p>Category: {item.category}</p>
                                <p>Rating: {item.rating}</p>
                                <p>Comments: {item.comments}</p>
                            </li>
                        ))
                    ) : (
                        <p>No feedback available.</p>
                    )
                }
            </ul>
        </div>
    );
};

export default FeedbackList;
