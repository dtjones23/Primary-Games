$(document).ready(function() {

// Fetch game data from the server
$.get('/games', function(games) {

    console.log(games); // logs array of games
});

$.get('/platforms', function(platforms) {

    console.log(platforms); // logs array of games
});

$.get('/genres', function(genres) {

    console.log(genres); // logs array of games
});



// Platform and Genre button functionality
    const platformButtons = $('.platforms');
    const platformInput = $('#platform-input');

    platformButtons.on('click', function() {
        platformInput.text($(this).text());
    });

    const genreButtons = $('.genre');
    const genreInput = $('#genre-input');

    genreButtons.on('click', function() {
        genreInput.text($(this).text());
    });

    // Pop up window for games (not sure if this is needed... Yet)
    $('.game-card').on('click', function() {
        $('#popup').css('display', 'block');
    });

    // Hide popup
    $('#close-button').on('click', function() {
        $('#popup').css('display', 'none');
    });

});