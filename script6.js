
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    let target = button.querySelector('.target');
    function handleMove(e) {
        const x = -50 + (e.pageX - button.offsetLeft - 300 / 2) / 3;
        const y = -10 + (e.pageY - button.offsetTop - 100 / 2) / 3;

        target.style.setProperty('--x', `${x}px`);
        target.style.setProperty('--y', `${y}px`);
    }
    button.addEventListener('mousemove', (e) => {
        handleMove(e);
    });
    button.addEventListener('touchmove', (e) => {
        handleMove(e.changedTouches[0]);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');

    // El usuario da click y redirecciona
    startButton.addEventListener('click', () => {
        const audio = new Audio('audio/click_effect-86995.mp3'); 
        audio.play(); // Reproduce el audio
        audio.onended = () => { // Espera a que termine el audio para redirigir
            window.location.href = 'siguientenivel.html'; // Redirige a la pantalla1
        };
    });
});
