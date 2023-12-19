const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const APIKey = "ca6843ad46b947099b5a639778e7a3be";
const gamesAPI = "https://api.rawg.io/api/games";

// Middleware function that fetches games from the API
const fetchGamesMiddleware = async (req, res, next) => {
    try {
        const response = await fetch(gamesAPI + `?key=${APIKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Attach the fetched games to the request object for later use
        req.games = data.results; // Adjust this line based on the actual structure of your API response

        next();
    } catch (error) {
        console.error("Error:", error);
        next(error); // Pass the error to the error handling middleware
    }
};

// Use the middleware for all routes in this router
router.use(fetchGamesMiddleware);

// // Example route handler using the fetched games
// router.get('/games', (req, res) => {
//     // Access the fetched games through req.games
//     const games = req.games;
//
//     // Use the developers in your response or further processing
//     res.json({ games });
// });

module.exports = router;
