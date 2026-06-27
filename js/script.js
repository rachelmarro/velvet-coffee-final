const menuLista = document.getElementById("menuLista");
const btnIzquierda = document.getElementById("btnIzquierda");
const btnDerecha = document.getElementById("btnDerecha");

let posicion = 0;

function moverCarrusel(direccion) {
    const tarjeta = document.querySelector(".tarjeta");
    const ventana = document.querySelector(".carrusel-ventana");

    if (!tarjeta || !ventana) return;

    const estilos = window.getComputedStyle(menuLista);
    const gap = parseInt(estilos.columnGap) || 18;

    const anchoTarjeta = tarjeta.offsetWidth + gap;
    const totalTarjetas = document.querySelectorAll(".tarjeta").length;
    const tarjetasVisibles = Math.floor(ventana.offsetWidth / anchoTarjeta);

    const limite = totalTarjetas - tarjetasVisibles;

    posicion += direccion;

    if (posicion < 0) {
        posicion = limite;
    }

    if (posicion > limite) {
        posicion = 0;
    }

    menuLista.style.transform = `translateX(-${posicion * anchoTarjeta}px)`;
}

btnDerecha.addEventListener("click", () => moverCarrusel(1));
btnIzquierda.addEventListener("click", () => moverCarrusel(-1));

window.addEventListener("resize", () => {
    posicion = 0;
    menuLista.style.transform = "translateX(0)";
});