// backend/models/user.model.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    profileImage: { type: String },
    needsApartment: { type: Boolean, default: false },
    state: { type: String },
    city: { type: String },
    matches: { type: Array },
    needs: { type: Array },
    wants: { type: Array },
});

const User = mongoose.model('User', userSchema);

export default User;