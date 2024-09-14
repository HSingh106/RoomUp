// backend/models/user.model.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    matches: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    needs: [{
        type: String,
    }],
    wants: [{
        type: String,
    }],
    profileImage: {
        type: String,
        default: '',
    },
    needsApartment: {
        type: Boolean,
        default: false,
    },
});

const User = mongoose.model('User', userSchema);
export default User;