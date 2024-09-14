// backend/config/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;

        // Debugging statement to check if MONGO_URI is loaded correctly
        console.log('Mongo URI:', mongoURI);

        if (!mongoURI) {
            throw new Error('MONGO_URI is not defined in the environment variables.');
        }

        const conn = await mongoose.connect(mongoURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;
