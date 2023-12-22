import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

const APIKey = "ca6843ad46b947099b5a639778e7a3be";
const platformsAPI = "https://api.rawg.io/api/platforms";

// Route to fetch platform data from the RAWG API
router.get('/platforms', async (req, res) => {
    try {
        const response = await fetch(`${platformsAPI}?key=${APIKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const platforms = data.results;
        
        res.json({ platforms });
        
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to fetch game data" });
    }
});

   // Example route handler using the fetched platforms
// router.get('/platforms', (req, res) => {
       // Access the fetched platforms through req.platforms
//     const platforms = req.platforms;
//
       // Use the developers in your response or further processing
//     res.json({ platforms });
// });

export default router;