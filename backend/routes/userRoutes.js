// backend/routes/userRoutes.js
import express from 'express';
import { createUser, updateUserPatch, updateUserPut } from '../controllers/userController.js';

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

// Route to create a new user
router.post('/', createUser);

// Route to update a user by ID (PATCH)
router.patch('/:id', updateUserPatch);

// Route to fully update a user by ID (PUT)
router.put('/:id', updateUserPut);

export default router;