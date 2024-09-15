import User from '../models/user.model.js';

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
            user.state = req.body.state;
            user.city = req.body.city;
            const updatedUser = await user.save();
            res.json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};