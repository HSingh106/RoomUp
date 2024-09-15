import './fetch-polyfill.js';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import pkg from '@propelauth/node';
import helmet from 'helmet';
import morgan from 'morgan';
import fetch from 'node-fetch';

// Load environment variables from .env file
dotenv.config();

// Connect to the MongoDB database
connectDB().catch(error => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
});

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Initialize PropelAuth with the provided URL and API key
const { initBaseAuth } = pkg;
const { validateAccessTokenAndGetUserClass } = initBaseAuth({
    authUrl: process.env.PROPELAUTH_URL,
    apiKey: process.env.PROPELAUTH_API_KEY,
});

// Security middlewares
app.use(helmet()); // Adds various security headers to the response
app.use(morgan('combined')); // Logs HTTP requests

// Use routes
app.use('/api/users', userRoutes); // Routes for user-related operations
app.use('/api/auth', authRoutes); // Routes for authentication-related operations

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}).on('error', (error) => {
    console.error('Error starting the server:', error);
});