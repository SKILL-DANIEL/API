const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const employeeRouter = require('./routes/employe');

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://devdaniel.web.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use('/api', employeeRouter);

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Employee Management System');
})


mongoose.connect(process.env.MONGODB)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Error connecting to Mongo'));


app.listen(port, () => console.log(`Server running on port ${port}`));