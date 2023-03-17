//require express
const express = require('express');

//Router
const router = express.Router();

//Quiz Controller
const quizController = require('./controller')

router.get('/',quizController.fetchData)

module.exports = router