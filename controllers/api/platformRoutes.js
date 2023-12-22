import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

const APIKey = "ca6843ad46b947099b5a639778e7a3be";
const platformsAPI = "https://api.rawg.io/api/platforms";

// Middleware function that fetches platforms from the API
const fetchPlatformsMiddleware = async (req, res, next) => {
    try {
        const response = await fetch(platformsAPI + `?key=${APIKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Attach the fetched platforms to the request object for later use
        req.platforms = data.results; // Adjust this line based on the actual structure of your API response

        next();
    } catch (error) {
        console.error("Error:", error);
        next(error); // Pass the error to the error handling middleware
    }
};

// Use the middleware for all routes in this router
router.use(fetchPlatformsMiddleware);

   // Example route handler using the fetched platforms
// router.get('/platforms', (req, res) => {
       // Access the fetched platforms through req.platforms
//     const platforms = req.platforms;
//
       // Use the developers in your response or further processing
//     res.json({ platforms });
// });

export default router;
