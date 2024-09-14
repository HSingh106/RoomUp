// backend/routes/userRoutes.js
import express from 'express';
import User from '../models/user.model.js';
import Apartment from '../models/apartment.model.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Endpoint to find users with or without apartments within a specified range
router.get('/find-users', authMiddleware, async (req, res) => {
    const { hasApartment, range } = req.query;

    try {
        const users = await User.find({ hasApartment: hasApartment === 'true' }).populate('apartment');
        // Assuming you have a function to calculate distance between users
        const filteredUsers = users.filter(user => calculateDistance(user.location, req.user.location) <= range);
        res.json(filteredUsers);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;