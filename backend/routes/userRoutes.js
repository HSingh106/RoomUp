// backend/routes/userRoutes.js
import express from 'express';
import User from '../models/user.model.js';

const router = express.Router();

// Example route to get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Example route to create a new user
router.post('/', async (req, res) => {
    const { name, email, password, isAdmin } = req.body;
    const user = new User({ name, email, password, isAdmin });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
// Now we have a userRoutes.js file that contains the routes for getting all users and creating a new user. We import the User model from user.model.js and use it to interact with the database.

// The routes are defined using router.get() and router.post() functions. The first argument is the route path, and the second argument is an async function that handles the request and response.

// We export the router at the end of the file so that it can be used in the server.js file to define the API routes.

// Step 3: Using the User Routes in the Server File