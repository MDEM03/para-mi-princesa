function ocultarPantallas() {
    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(pantalla => {
        pantalla.classList.remove("activa");
    });
}


/* ========================================
   INICIO
======================================== */

function comenzar() {

    ocultarPantallas();

    document.getElementById("razon1").classList.add("activa");

    crearParticulas(15);
}


/* ========================================
   CAMBIAR DE RAZÓN
======================================== */

function mostrarRazon(numero) {

    ocultarPantallas();

    const razon = document.getElementById("razon" + numero);

    razon.classList.add("activa");

    crearParticulas(12);
    crearCorazonesTransicion();
}


/* ========================================
   MOSTRAR FINAL
======================================== */

function mostrarFinal() {

    ocultarPantallas();

    document.getElementById("final").classList.add("activa");

    crearParticulas(25);

    setTimeout(() => {
        crearCorazonesFinal();
    }, 500);
}


/* ========================================
   PARTÍCULAS
======================================== */

function crearParticulas(cantidad) {

    for (let i = 0; i < cantidad; i++) {

        const particula = document.createElement("div");

        particula.classList.add("particula");

        particula.style.left =
            Math.random() * 100 + "vw";

        particula.style.animationDuration =
            (4 + Math.random() * 6) + "s";

        particula.style.animationDelay =
            Math.random() * 2 + "s";

        const tamanio =
            (2 + Math.random() * 5) + "px";

        particula.style.width = tamanio;
        particula.style.height = tamanio;

        document.body.appendChild(particula);

        setTimeout(() => {
            particula.remove();
        }, 10000);
    }
}


/* ========================================
   CORAZONES ENTRE RAZONES
======================================== */

function crearCorazonesTransicion() {

    const simbolos = ["❤️", "💕", "💗", "💖"];

    for (let i = 0; i < 12; i++) {

        const corazon = document.createElement("div");

        corazon.classList.add("corazon-transicion");

        corazon.innerHTML =
            simbolos[Math.floor(Math.random() * simbolos.length)];

        // Dirección aleatoria
        const x = (Math.random() - 0.5) * 600;
        const y = (Math.random() - 0.5) * 450;

        const rotacion =
            (Math.random() - 0.5) * 80;

        corazon.style.setProperty(
            "--x",
            x + "px"
        );

        corazon.style.setProperty(
            "--y",
            y + "px"
        );

        corazon.style.setProperty(
            "--rotacion",
            rotacion + "deg"
        );

        corazon.style.animationDelay =
            Math.random() * 0.15 + "s";

        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 2200);
    }
}


/* ========================================
   CORAZONES DEL FINAL
======================================== */

function crearCorazonesFinal() {

    const simbolos = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💘"
    ];

    for (let i = 0; i < 45; i++) {

        const corazon = document.createElement("div");

        corazon.classList.add("corazon-flotante");

        corazon.innerHTML =
            simbolos[Math.floor(Math.random() * simbolos.length)];

        corazon.style.left =
            Math.random() * 100 + "vw";

        corazon.style.fontSize =
            (15 + Math.random() * 25) + "px";

        corazon.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        corazon.style.animationDelay =
            Math.random() * 4 + "s";

        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 10000);
    }
}