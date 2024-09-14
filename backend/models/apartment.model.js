// backend/models/apartment.model.js
import mongoose from 'mongoose';

const apartmentSchema = new mongoose.Schema({
    address: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    rentPrice: { type: Number, required: true },
    squareFeet: { type: Number, required: true },
    description: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Reference to User
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

export default Apartment;