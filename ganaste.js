// Recuperar los puntos desde localStorage
const points = Number(localStorage.getItem('points')) || 0;
const messageDiv = document.getElementById('message');
const nextLevelButton = document.getElementById('nextLevel');

// Obtener los elementos de audio
const winSound = document.getElementById('win-sound');
const loseSound = document.getElementById('lose-sound');

// Mostrar mensaje según los puntos acumulados y reproducir el sonido correspondiente
if (points >= 100) {
    messageDiv.textContent = "¡Ganaste! Tu puntaje es " + points + ".";
    nextLevelButton.style.display = 'block';
    
    // Reproducir sonido de ganar
    winSound.play();
} else {
    messageDiv.textContent = "Perdiste. Tu puntaje es " + points + ".";
    
    // Reproducir sonido de perder
    loseSound.play();
}

// Función para ir al siguiente nivel
function goToNextLevel() {
    window.location.href = 'nevel.html'; // Redirige a la página del siguiente nivel
}
