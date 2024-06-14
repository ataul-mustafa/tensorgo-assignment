const Feedback = require('../models/Feedback');
const frillService = require('../services/frillService');

exports.submitFeedback = async (req, res) => {
    try {
        const { category, rating, comments } = req.body;
        const userId = req.user._id;

        const feedback = new Feedback({ userId, category, rating, comments });
        await feedback.save();

        // const frilldata = await frillService.submitFeedback({ category, rating, comments });
        // console.log(frilldata)

        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
};

exports.getFeedback = async (req, res) => {
    console.log("get feedback")
    try {
        const feedback = await Feedback.find().populate('userId', 'displayName email');
        res.status(200).json(feedback);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};