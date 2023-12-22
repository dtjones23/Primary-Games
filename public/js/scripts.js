$(document).ready(function() {

    /*
    fetch('/games')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTPS error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const games = data.games;
        console.log(games);
    })
    .catch(error => console.error('Error:', error));
    */

    // Pop up window for games (not sure if this is needed... Yet)
    $('.game-card').on('click', function() {
        $('#popup').css('display', 'block');
    });

    // Hide popup
    $('#close-button').on('click', function() {
        $('#popup').css('display', 'none');
    });

    $('#confirmBuyButton').on('click', function() {
        $('#confirmModal').style.display = 'block';
    });
    
    $('#confirmBuy').on('click', function() {
        window.location.href = '/mygames';
    });

});