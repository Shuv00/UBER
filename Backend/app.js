const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const connectDB = require('./db/db');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const userRoutes = require('./routes/user.routes')
connectDB();
app.get('/', (req, res) => {
    res.send("Hello world!");
})
app.use('/users', userRoutes);

module.exports = app;   