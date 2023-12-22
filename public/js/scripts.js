$(document).ready(function() {

// Fetch genre data from the server
$.get('/genres', function(data) {
    const genres = data.genres;

    // Sort genres array in alphabetical order
    genres.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });

    // Defines the Handlebars template for genre select
    const genreSelectTemplate = `
    <select>
        <option>Select Genre</option>
    {{#each genres}}
        <option>{{this.name}}</option>
    {{/each}}
    </select>
    `;

    // Compile the Handlebars template
    const compiledTemplate = Handlebars.compile(genreSelectTemplate);

    // Generate HTML using the compiled template and genre data
    const html = compiledTemplate({ genres });

    // Append the generated HTML to your select container
    $('#select-genre').html(html);

    // console.log(genres); // logs array of genres
});

/////

// Fetch platform data from the server
$.get('/platforms', function(data) {
    const platforms = data.platforms;

    // Sort platforms array in alphabetical order
    platforms.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });

    // Defines the Handlebars template for platform select
    const platformSelectTemplate = `
    <select>
        <option>Select Platform</option>
    {{#each platforms}}
        <option>{{this.name}}</option>
    {{/each}}
    </select>
    `;

    // Compile the Handlebars template
    const compiledTemplate = Handlebars.compile(platformSelectTemplate);

    // Generate HTML using the compiled template and platform data
    const html = compiledTemplate({ platforms });

    // Append the generated HTML to your select container
    $('#select-platform').html(html);

    // console.log(platforms); // logs array of platforms
});
//////

    // Fetch game data from the server
$.get('/games', function(data) {
        const games = data.games;

        const gameCardTemplate = `{{#each games}}
    <div class="game-card m-3" data-id="{{this.id}}">
    <img src="{{this.background_image}}" alt="{{this.name}} Background">
    <p class="game-title">{{this.name}}</p>
    </div>
    {{/each}}`

        // Compile the Handlebars template for game cards
        const compiledGameTemplate = Handlebars.compile(gameCardTemplate);

        // Generate HTML for game cards using the compiled template and game data
        const html = compiledGameTemplate({ games });

        // Append the generated HTML to the game container
        $('.game-container').html(html);
    });

    $('#confirmBuyButton').on('click', function() {
        $('#confirmModal').style.display = 'block';
    });
    
    $('#confirmBuy').on('click', function() {
        window.location.href = '/mygames';
    });

});