import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

const APIKey = "ca6843ad46b947099b5a639778e7a3be";
const gamesAPI = "https://api.rawg.io/api/games";

// Route to fetch game data from the RAWG API
router.get('/games', async (req, res) => {
    try {
    
        const response = await fetch(`${gamesAPI}?key=${APIKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const games = data.results; // Array of games

        res.json({ games });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to fetch game data" });
    }
});

// // Example route handler using the fetched games
// router.get('/games', (req, res) => {
//     // Access the fetched games through req.games
//     const games = req.games;
//
//     // Use the developers in your response or further processing
//     res.json({ games });
// });

export default router;