// backend/controllers/userController.js
import User from '../models/user.model.js';

// Create a new user
export const createUser = async (req, res) => {
    const { name, email, password, isAdmin, profileImage, needsApartment } = req.body;
    const user = new User({ name, email, password, isAdmin, profileImage, needsApartment });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Get a user by ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get apartments associated with a user
export const getUserApartments = async (req, res) => {
    try {
        const apartments = await Apartment.find({ user: req.params.id });
        res.json(apartments);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a user by ID (PATCH)
export const updateUserPatch = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            Object.assign(user, req.body);
            const updatedUser = await user.save();
            res.json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Fully update a user by ID (PUT)
export const updateUserPut = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;
            user.isAdmin = req.body.isAdmin;
            user.matches = req.body.matches;
            user.needs = req.body.needs;
            user.wants = req.body.wants;
            user.profileImage = req.body.profileImage;
            user.needsApartment = req.body.needsApartment;
            const updatedUser = await user.save();
            res.json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};