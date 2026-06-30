const carruseles = document.querySelectorAll(".carrusel");

carruseles.forEach((carrusel) => {
    const menuLista = carrusel.querySelector(".menu-lista");
    const btnIzquierda = carrusel.querySelector(".flecha-izquierda");
    const btnDerecha = carrusel.querySelector(".flecha-derecha");

    let posicion = 0;

    btnDerecha.addEventListener("click", () => {
        const tarjeta = menuLista.querySelector(".tarjeta");
        const anchoTarjeta = tarjeta.offsetWidth + 18;
        const maxScroll = menuLista.scrollWidth - carrusel.querySelector(".carrusel-ventana").offsetWidth;

        posicion += anchoTarjeta;

        if (posicion > maxScroll) {
            posicion = 0;
        }

        menuLista.style.transform = `translateX(-${posicion}px)`;
    });

    btnIzquierda.addEventListener("click", () => {
        const tarjeta = menuLista.querySelector(".tarjeta");
        const anchoTarjeta = tarjeta.offsetWidth + 18;
        const maxScroll = menuLista.scrollWidth - carrusel.querySelector(".carrusel-ventana").offsetWidth;

        posicion -= anchoTarjeta;

        if (posicion < 0) {
            posicion = maxScroll;
        }

        menuLista.style.transform = `translateX(-${posicion}px)`;
    });
});