// Import the necessary function from the PropelAuth package
import pkg from '@propelauth/node';
const { validateAccessTokenAndGetUserClass } = pkg;

// Middleware function to authenticate requests
const authMiddleware = async (req, res, next) => {
    const authorizationHeader = req.headers.authorization; // Get the Authorization header from the request
    if (!authorizationHeader) {
        return res.status(401).json({ message: 'Authorization header missing' }); // Return 401 if the header is missing
    }

    try {
        // Validate the access token and get the user class
        const userClass = await validateAccessTokenAndGetUserClass(authorizationHeader);
        req.user = userClass; // Attach the user class to the request object
        next(); // Call the next middleware or route handler
    } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token' }); // Return 401 if the token is invalid or expired
    }
};

export default authMiddleware; // Export the middleware function