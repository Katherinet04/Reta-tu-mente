document.addEventListener("DOMContentLoaded", () => {

    const game = document.getElementById("juego");
    const cards = Array.from(document.querySelectorAll(".card"));

    const result = document.getElementById("result");
    const pointsDisplay = document.getElementById("points");
    const textoCentro = document.getElementById("textoCentro");
    const progressFill = document.getElementById("progress-fill");

    let points = parseInt(new URLSearchParams(window.location.search).get("puntos")) || 0;

    let catIndex = Math.floor(Math.random() * cards.length);
    let hasGuessed = false;

    const audioCorrecto = new Audio("audio/correct-6033.mp3");
    const audioIncorrecto = new Audio("audio/wronganswer-37702.mp3");

    pointsDisplay.textContent = points;

    progressFill.style.width = "71%";

    // =========================
    // MENSAJE CENTRAL
    // =========================
    function mostrarMensaje(texto) {
        textoCentro.textContent = texto;
        textoCentro.classList.add("mostrar");

        setTimeout(() => {
            textoCentro.classList.remove("mostrar");
        }, 1500);
    }

    // =========================
    // MOSTRAR GATO
    // =========================
    function mostrarGato() {

        cards.forEach((card, i) => {
            const back = card.querySelector(".card-back");

            back.innerHTML = (i === catIndex) ? "😺" : "🐾";

            card.classList.add("flip");
        });

        setTimeout(() => {
            cards.forEach(card => card.classList.remove("flip"));
            startShuffleLoop();
        }, 1400);
    }

    // =========================
    // TRANSFORM RANDOM SUAVE
    // =========================
    function randomTransform(card) {

        const x = (Math.random() - 0.5) * 200;
        const y = (Math.random() - 0.5) * 150;
        const rotY = Math.random() * 360;
        const rotX = Math.random() * 30 - 15;
        const scale = 0.95 + Math.random() * 0.1;

        card.style.transition = "transform 0.7s ease-in-out";

        card.style.transform =
            `translate(${x}px, ${y}px)
             rotateY(${rotY}deg)
             rotateX(${rotX}deg)
             scale(${scale})`;
    }

    // =========================
    // RESET POSICIÓN
    // =========================
    function resetCards() {
        cards.forEach(card => {
            card.style.transition = "transform 0.6s ease-in-out";
            card.style.transform = "translate(0,0) rotateY(0deg) rotateX(0deg) scale(1)";
        });
    }

    // =========================
    // SHUFFLE SUAVE (9 cartas optimizado)
    // =========================
    function shuffleCards() {

        let steps = 5;
        let speed = 1200;

        const interval = setInterval(() => {

            const i = Math.floor(Math.random() * cards.length);
            let j = Math.floor(Math.random() * cards.length);

            while (j === i) {
                j = Math.floor(Math.random() * cards.length);
            }

            const a = cards[i];
            const b = cards[j];

            const rectA = a.getBoundingClientRect();
            const rectB = b.getBoundingClientRect();

            const dx = rectB.left - rectA.left;
            const dy = rectB.top - rectA.top;

            const dx2 = rectA.left - rectB.left;
            const dy2 = rectA.top - rectB.top;

            a.style.transition = "transform 0.8s ease-in-out";
            b.style.transition = "transform 0.8s ease-in-out";

            a.style.transform = `translate(${dx}px, ${dy}px) scale(1.03)`;
            b.style.transform = `translate(${dx2}px, ${dy2}px) scale(1.03)`;

            setTimeout(() => {
                a.style.transform = "translate(0,0) scale(1)";
                b.style.transform = "translate(0,0) scale(1)";
            }, 800);

            steps--;

            if (steps <= 0) {
                clearInterval(interval);

                setTimeout(() => {
                    resetCards();
                    allowGuess();
                }, 900);
            }

        }, speed);
    }

    // =========================
    // LOOP DE SHUFFLE
    // =========================
    function startShuffleLoop() {

        let steps = 4;

        const interval = setInterval(() => {

            shuffleCards();

            steps--;

            if (steps <= 0) {

                clearInterval(interval);

                resetCards();

                catIndex = Math.floor(Math.random() * cards.length);

                allowGuess();
            }

        }, 900);
    }

    // =========================
    // PERMITIR CLICK
    // =========================
    function allowGuess() {

        hasGuessed = false;

        cards.forEach(card => {
            card.addEventListener("click", makeGuess, { once: true });
        });
    }

    // =========================
    // CLICK JUGADOR
    // =========================
    function makeGuess(event) {

        if (hasGuessed) return;
        hasGuessed = true;

        const card = event.currentTarget;
        const index = cards.indexOf(card);

        card.classList.add("flip");

        if (index === catIndex) {

            card.querySelector(".card-back").innerHTML = "😺";

            audioCorrecto.play();

            points += 20;
            pointsDisplay.textContent = points;

            result.textContent = "¡Correcto!";
            result.style.color = "#00ff66";

            mostrarMensaje("¡Excelente!");

        } else {

            card.querySelector(".card-back").innerHTML = "❌";

            audioIncorrecto.play();

            result.textContent = "Fallaste";
            result.style.color = "#ff4444";

            mostrarMensaje("Se te escapó el gato");
        }

        setTimeout(() => {
            window.location.href = "numero2.php?puntos=" + points;
        }, 2000);
    }

    // =========================
    // BLOQUEAR BACK
    // =========================
    function preventBack() {
        window.history.pushState(null, null, window.location.href);
        window.onpopstate = () => {
            window.history.pushState(null, null, window.location.href);
        };
    }

    preventBack();

    setTimeout(() => {
        mostrarGato();
    }, 800);

});