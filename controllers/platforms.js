const APIKey = "ca6843ad46b947099b5a639778e7a3be";
const requestPlatforms = "https://api.rawg.io/api/platforms";

async function getPlatform() {  
    try {
        const response = await fetch(requestPlatforms + `?key=${APIKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

getPlatform();
