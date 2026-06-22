// ====================================
// CAMBIAR MASCOTA
// ====================================

function cambiarMascota(
    emoji,
    mensaje
){

    const mascota =
    document.getElementById(
        "mascota"
    );

    const inputMascota =
    document.getElementById(
        "mascotaSeleccionada"
    );

    if(mascota){
        mascota.textContent =
        emoji;
    }

    if(inputMascota){
        inputMascota.value =
        emoji;
    }

    sessionStorage.setItem(
        "mascotaElegida",
        emoji
    );

    hablarMascota(
        mensaje,
        3000
    );

}// ====================================
// MENSAJE TEMPORAL
// ====================================

function hablarMascota(
    texto,
    tiempo = 3500
){

    const mensaje =
    document.getElementById(
        "mensaje"
    );

    if(!mensaje){
        return;
    }

    mensaje.innerHTML =
    texto;

    mensaje.classList.add(
        "mostrar"
    );

    clearTimeout(
        window.mascotaTimer
    );

    window.mascotaTimer =
    setTimeout(() => {

        mensaje.classList.remove(
            "mostrar"
        );

    }, tiempo);

}

// ====================================
// CARGA INICIAL
// ====================================

window.addEventListener(
"DOMContentLoaded",
() => {

    const mascota =
    document.getElementById(
        "mascota"
    );

    const mascotaGuardada =
    sessionStorage.getItem(
        "mascotaElegida"
    );

    if(
        mascota &&
        mascotaGuardada
    ){

        mascota.textContent =
        mascotaGuardada;

    }

    setTimeout(() => {

        hablarMascota(
            "Lee con atención las pistas."
        );

    },1000);

}
);

// ====================================
// MENSAJE DE INICIO NIVEL
// ====================================

function mascotaInicioNivel(){

    hablarMascota(
        " Observa bien las imágenes."
    );

}

// ====================================
// CORRECTO
// ====================================

function mascotaCorrecto(){

    const frases = [

        " ¡Excelente!",

        " Muy bien hecho.",

        " Lo lograste.",

        " Increíble.",

        " Sigue así.",

        " ¡Respuesta correcta!",

        " ¡Lo encontraste!"

    ];

    hablarMascota(

        frases[
            Math.floor(
                Math.random() *
                frases.length
            )
        ]

    );

}

// ====================================
// ERROR
// ====================================

function mascotaError(){

    const frases = [

        " Aquí tienes otra pista.",

        " Observa mejor las imágenes.",

        " Piensa un poco más.",

        "Mira la nueva pista.",

        "Casi lo logras."

    ];

    hablarMascota(

        frases[
            Math.floor(
                Math.random() *
                frases.length
            )
        ]

    );

}

// ====================================
// UNA VIDA
// ====================================

function mascotaUnaVida(){

    hablarMascota(
        "❤️ Te queda una vida. Tú puedes."
    );

}

// ====================================
// SIN VIDAS
// ====================================

function mascotaPerdio(){

    hablarMascota(
        " No pasa nada, inténtalo nuevamente."
    );

}

// ====================================
// PISTA
// ====================================

function mascotaPista(){

    hablarMascota(
        " Revisa cuidadosamente la pista."
    );

}

// ====================================
// AVANCE
// ====================================

function mascotaNivelCompletado(){

    hablarMascota(
        " Nivel completado."
    );

}

// ====================================
// ÁNIMO
// ====================================

function mascotaAnimar(){

    const frases = [

        " Tú puedes.",

        " Sigue intentando.",

        "Concéntrate.",

        "Vas muy bien.",

        " No te rindas."

    ];

    hablarMascota(

        frases[
            Math.floor(
                Math.random() *
                frases.length
            )
        ]

    );

}