//Require Express
const express = require('express');

//Require CORS
const cors = require('cors')

//get router
const quizRouter = require('../api/quiz/router');

//Create app
const app = express();

//Add in the body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Add cors for api use in frontend
app.use(cors())

//Use routers
app.use('/api/v1/quiz',quizRouter);




module.exports = app;