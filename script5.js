document.addEventListener("DOMContentLoaded", () => {

    const startButton = document.getElementById("start-button");

    if (startButton) {

        startButton.addEventListener("click", () => {

            const audio = new Audio("audio/click_effect-86995.mp3");

            audio.play().catch(error => {
                console.log("Error al reproducir audio:", error);
            });

            // Redirección después de un pequeño retraso
            setTimeout(() => {
                window.location.href = "pantalla1.php";
            }, 800);

        });

    } else {
        console.error("No se encontró el botón con id 'start-button'");
    }

    crearEstrellas();

});

function crearEstrellas() {

    setInterval(() => {

        const estrella = document.createElement("div");

        estrella.classList.add("estrella");
        estrella.textContent = "⭐";

        estrella.style.left = Math.random() * 100 + "vw";
        estrella.style.animationDuration = (Math.random() * 3 + 3) + "s";

        document.body.appendChild(estrella);

        setTimeout(() => {
            estrella.remove();
        }, 7000);

    }, 400);

}