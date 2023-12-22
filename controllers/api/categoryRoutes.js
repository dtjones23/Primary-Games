import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

const APIKey = "ca6843ad46b947099b5a639778e7a3be";
const genresAPI = "https://api.rawg.io/api/genres";

// Route to fetch game data from the RAWG API
router.get('/genres', async (req, res) => {
    try {
        const response = await fetch(`${genresAPI}?key=${APIKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const genres = data.results; // Attach the fetched genres to the request object for later use

        res.json({ genres });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to fetch Genre data" });
    }
});

// // Example route handler using the fetched genres
// router.get('/categories', (req, res) => {
//     // Access the fetched genres through req.genres
//     const genres = req.genres;
//
//     // Use the genres in your response or further processing
//     res.json({ genres });
// });

export default router;