function retryGame() {
    window.location.href = 'principal.html';
}
function retryGame() {
    const audio = document.getElementById('game-over-sound');
    audio.play();
    setTimeout(function() {
        window.location.href = 'principal.html';
    }, 2000); 
}
