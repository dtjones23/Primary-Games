const APIKey = "ca6843ad46b947099b5a639778e7a3be";
const requestDevelopers = "https://api.rawg.io/api/developers";

async function getDevelopers() {
    try {
        const response = await fetch(requestDevelopers + `?key=${APIKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

getDevelopers();
