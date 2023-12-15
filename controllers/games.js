const APIKey = 'ca6843ad46b947099b5a639778e7a3be';
const fetchGames = 'https://api.rawg.io/api/games'

async function getGames() {
    try {
        const response = await fetch(fetchGames + `?key=${APIKey}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

getGames();