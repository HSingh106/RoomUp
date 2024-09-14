// backend/routes/userRoutes.js
import express from 'express';
import User from '../models/userModel.js';

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