const axios = require('axios');
require('dotenv').config();

const FRILL_API_KEY = process.env.FRILL_API_KEY;
const FRILL_API_URL = 'https://feedback.frill.co/v1/ideas';

exports.submitFeedback = async (feedback) => {
    try {
        const response = await axios.post(FRILL_API_URL, feedback, {
            headers: {
                'Authorization': `Bearer ${FRILL_API_KEY}`
            }
        });
        return response.data;
        
    } catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
};