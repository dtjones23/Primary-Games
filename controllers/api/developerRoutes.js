import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

const APIKey = "ca6843ad46b947099b5a639778e7a3be";
const developersAPI = "https://api.rawg.io/api/developers";

// Middleware function that fetches developers from the API
const fetchDevelopersMiddleware = async (req, res, next) => {
    try {
        const response = await fetch(developersAPI + `?key=${APIKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Attach the fetched developers to the request object for later use
        req.developers = data.results; // Adjust this line based on the actual structure of your API response

        next();
    } catch (error) {
        console.error("Error:", error);
        next(error); // Pass the error to the error handling middleware
    }
};

// Use the middleware for all routes in this router
router.use(fetchDevelopersMiddleware);

// // Example route handler using the fetched developers
// router.get('/developers', (req, res) => {
//     // Access the fetched developers through req.developers
//     const developers = req.developers;
//
//     // Use the developers in your response or further processing
//     res.json({ developers });
// });

export default router;
