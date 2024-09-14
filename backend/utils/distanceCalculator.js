// utils/distanceCalculator.js
import axios from 'axios';

const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

export const calculateDistance = async (origin, destination) => {
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${destination}&key=${API_KEY}`;

    try {
        const response = await axios.get(url);
        const distance = response.data.rows[0].elements[0].distance.value; // Distance in meters
        return distance;
    } catch (error) {
        console.error('Error calculating distance:', error);
        throw new Error('Error calculating distance');
    }
};