const menuLista = document.getElementById("menuLista");
const btnIzquierda = document.getElementById("btnIzquierda");
const btnDerecha = document.getElementById("btnDerecha");

let posicion = 0;
const anchoTarjeta = 238;

btnDerecha.addEventListener("click", () => {
    posicion += anchoTarjeta;

    if (posicion > menuLista.scrollWidth - 900) {
        posicion = 0;
    }

    menuLista.style.transform = `translateX(-${posicion}px)`;
});

btnIzquierda.addEventListener("click", () => {
    posicion -= anchoTarjeta;

    if (posicion < 0) {
        posicion = menuLista.scrollWidth - 900;
    }

    menuLista.style.transform = `translateX(-${posicion}px)`;
});