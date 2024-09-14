// backend/models/user.model.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    university: { type: String },
    major: { type: String },
    hasApartment: { type: Boolean, default: false },
    apartment: { type: mongoose.Schema.Types.ObjectId, ref: 'Apartment' } // Reference to Apartment
});

const User = mongoose.model('User', userSchema);

export default User;