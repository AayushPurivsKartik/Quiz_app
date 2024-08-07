const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');

router.get('/', async (req, res) => {
    const quizzes = await Quiz.find({});
    res.render('quiz', { quizzes });
});

router.post('/submit', async (req, res) => {
    res.render('result');
});

module.exports = router;
