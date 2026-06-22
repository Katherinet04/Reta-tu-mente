let puntos;

try {

    puntos =
    parseInt(
        new URLSearchParams(
            window.location.search
        ).get('puntos')
    ) || 0;

} catch (error) {

    console.error(
        "Error al obtener los puntos:",
        error
    );

    puntos = 0;

}

// ===============================
// 🔊 AUDIO MUSICA GLOBAL
// ===============================

const audio =
new Audio(
    'audio/8bittownthemesong-59266.mp3'
);

audio.loop = true;

let isAudioPlaying =
localStorage.getItem(
    'isAudioPlaying'
) === 'true';

// ===============================
// 🔊 TOGGLE AUDIO
// ===============================

function toggleAudio(){

    const audioIcon =
    document.getElementById(
        'audio-icon'
    );

    if(isAudioPlaying){

        audio.pause();

        audioIcon.innerText =
        '🔇';

    }else{

        audio.play();

        audioIcon.innerText =
        '🔊';

    }

    isAudioPlaying =
    !isAudioPlaying;

    localStorage.setItem(
        'isAudioPlaying',
        isAudioPlaying
    );

}

// ===============================
// ⭐ MENSAJE CENTRO
// ===============================

function mostrarMensajeCentro(
    texto
){

    const mensaje =
    document.getElementById(
        "textoCentro"
    );

    if(!mensaje) return;

    mensaje.innerHTML =
    texto;

    mensaje.classList.add(
        "mostrar"
    );

    setTimeout(()=>{

        mensaje.classList.remove(
            "mostrar"
        );

    },1800);

}

function actualizarProgreso(){

    const barra =
    document.getElementById(
        "progreso"
    );

    if(!barra) return;

    const paginaActual =
    window.location.pathname
    .split("/")
    .pop();

    let porcentaje = 0;

    switch(paginaActual){

        case "pantalla1.php":
            porcentaje = 0;
            break;

        case "pantalla2.php":
            porcentaje = 25;
            break;

        case "pantalla3.php":
            porcentaje = 50;
            break;

        case "pantalla4.php":
            porcentaje = 75;
            break;

        default:
            porcentaje = 0;

    }

    barra.style.width =
    porcentaje + "%";

}
// ===============================
// 🔊 INICIO
// ===============================

window.onload = () => {
    // Ocultar aviso después de 4 segundos
setTimeout(() => {

    const aviso =
    document.getElementById(
        "avisoIntentos"
    );

    if(aviso){

        aviso.style.transition =
        "opacity 0.5s";

        aviso.style.opacity =
        "0";

        setTimeout(()=>{

            aviso.remove();

        },500);

    }

},4000);

    const icon =
    document.getElementById(
        'audio-icon'
    );

    if(isAudioPlaying){

        audio.play();

        if(icon){

            icon.innerText =
            '🔊';

        }

    }else{

        if(icon){

            icon.innerText =
            '🔇';

        }

    }

    const puntosHTML =
    document.getElementById(
        'puntos'
    );

    if(puntosHTML){

        puntosHTML.innerHTML =
        "⭐ " + puntos;

    }

    actualizarProgreso();

};

// ===============================
// 🎮 INTENTOS
// ===============================

let intentos = 2;

// ===============================
// 🎯 RESPUESTAS
// ===============================

const respuestas = {

    'pantalla1.php':'img2',

    'pantalla2.php':'img5',

    'pantalla3.php':'img11',

    'pantalla4.php':'img16'

};

// ===============================
// 🧠 NOMBRES
// ===============================

const nombresRespuestas = {

    'img2':'Guitarra',

    'img5':'Reloj',

    'img11':'Libro',

    'img16':'Espejo'

};

// ===============================
// 🔊 AUDIOS
// ===============================

const audioCorrecto =
new Audio(
    'audio/correct-6033.mp3'
);

const audioIncorrecto =
new Audio(
    'audio/wronganswer-37702.mp3'
);

// ===============================
// 🎮 SELECCIONAR IMAGEN
// ===============================

function seleccionarImagen(
    element,
    id
){

try{

    const paginaActual =
    window.location.pathname
    .split('/')
    .pop();

    const respuestaCorrecta =
    respuestas[paginaActual];

    if(!respuestaCorrecta){

        console.warn(
            "No hay respuesta configurada"
        );

        return;

    }

    const nombreRespuestaCorrecta =
    nombresRespuestas[
        respuestaCorrecta
    ];

    if(intentos > 0){

        // ===================
        // CORRECTA
        // ===================

        if(
            id ===
            respuestaCorrecta
        ){

            document.body
            .classList.remove(
                'incorrecto'
            );

            document.body
            .classList.add(
                'correcto'
            );

            document.getElementById(
                'footer'
            ).innerText =
            "¡Correcto!";

            puntos += 20;

            const puntosHTML =
            document.getElementById(
                'puntos'
            );

            if(puntosHTML){

                puntosHTML.innerHTML =
                "⭐ " + puntos;

            }

            localStorage.setItem(
                'points',
                puntos
            );

            audioCorrecto.play();

            if(
                typeof mascotaCorrecto
                === "function"
            ){

                mascotaCorrecto();

            }

            mostrarMensajeCentro(
                "🎉 ¡Correcto!"
            );

            setTimeout(()=>{

                redireccionar();

            },2000);

        }

        // ===================
        // INCORRECTA
        // ===================

        else{

            intentos--;

            document.body
            .classList.add(
                'incorrecto'
            );

            document.getElementById(
                'footer'
            ).innerText =
            "Incorrecto. Intenta de nuevo.";

            audioIncorrecto.play();

            if(
                typeof mascotaError
                === "function"
            ){

                mascotaError();

            }

            mostrarMensajeCentro(
                "❌ Incorrecto"
            );

            actualizarVidas();

            // segunda pista

            if(
                typeof pistasNivel
                !== "undefined"
            ){

                if(
                    pistaActual <
                    pistasNivel.length - 1
                ){

                    pistaActual++;

                    mostrarPergamino();

                    if(
                        typeof mascotaPista
                        === "function"
                    ){

                        mascotaPista();

                    }

                }

            }

            if(
                intentos === 1
            ){

                if(
                    typeof mascotaUnaVida
                    === "function"
                ){

                    mascotaUnaVida();

                }

            }

            if(
                intentos === 0
            ){

                document
                .getElementById(
                    'footer'
                ).innerText =
                `Perdiste. La respuesta era ${nombreRespuestaCorrecta}.`;

                if(
                    typeof mascotaPerdio
                    === "function"
                ){

                    mascotaPerdio();

                }

                mostrarMensajeCentro(
                    "💔 Sin vidas"
                );

                setTimeout(()=>{

                    redireccionar();

                },2500);

            }

        }

    }

}catch(error){

    console.error(
        "Error en seleccionarImagen:",
        error
    );

}

}

// ===============================
// ❤️ VIDAS
// ===============================

function actualizarVidas(){

    const vidas =
    document.getElementsByClassName(
        'vida'
    );

    for(
        let i = 0;
        i < vidas.length;
        i++
    ){

        if(
            i >= intentos
        ){

            vidas[i].style.visibility =
            'hidden';

        }

    }

}

// ===============================
// 🔵 REDIRECCIÓN
// ===============================

function redireccionar(){

    const paginas = [

        'pantalla1.php',

        'pantalla2.php',

        'pantalla3.php',

        'pantalla4.php'

    ];

    const paginaActual =
    window.location.pathname
    .split('/')
    .pop();

    const paginaIndex =
    paginas.indexOf(
        paginaActual
    );

    if(
        paginaIndex === -1 ||
        paginaIndex ===
        paginas.length - 1
    ){

        window.location.href =
        "cartas.php?puntos=" +
        puntos;

    }else{

        window.location.href =

        paginas[
            paginaIndex + 1
        ] +

        "?puntos=" +

        puntos;

    }

}

// ===============================
// 🚫 BLOQUEAR ATRÁS
// ===============================

function preventBackNavigation(){

    window.history.pushState(
        null,
        null,
        window.location.href
    );

    window.onpopstate =
    function(){

        window.history.pushState(
            null,
            null,
            window.location.href
        );

    };

}

preventBackNavigation();