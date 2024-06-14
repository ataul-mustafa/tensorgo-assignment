import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './feedbackForm.css'; 
import { toast } from 'react-toastify';

const FeedbackForm = () => {
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const feedback = { category, rating, comments };
            await axios.post('http://localhost:5000/feedback', feedback, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            });
            toast.success("Feedback submitted successfully")
        } catch (error) {
            toast.error(error.response.data.error)
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/';
        }
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Category:
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Product Features">Product Features</option>
                    <option value="Product Pricing">Product Pricing</option>
                    <option value="Product Usability">Product Usability</option>
                </select>
            </label>
            <label>
                Rating:
                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value="1">1 (Poor)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (Excellent)</option>
                </select>
            </label>
            <label>
                Comments:
                <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
            </label>
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;
