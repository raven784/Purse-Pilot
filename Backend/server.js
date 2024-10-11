const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000; 

//Connect to the databse
connectDB();

//Middleware
app.use(express.json()); //for parsing application/json 

//Routes
app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
    console.log('Server runnign on http://localhost:${PORT}')
})