const carruseles = document.querySelectorAll(".carrusel");

carruseles.forEach((carrusel) => {
    const menuLista = carrusel.querySelector(".menu-lista");
    const btnIzquierda = carrusel.querySelector(".flecha-izquierda");
    const btnDerecha = carrusel.querySelector(".flecha-derecha");
    const ventana = carrusel.querySelector(".carrusel-ventana");

    let posicion = 0;

    function mover(direccion) {
        const tarjeta = menuLista.querySelector(".tarjeta");
        const estilos = getComputedStyle(menuLista);
        const gap = parseInt(estilos.gap) || 18;

        const anchoTarjeta = tarjeta.offsetWidth + gap;
        const maxScroll = menuLista.scrollWidth - ventana.offsetWidth;

        posicion += direccion * anchoTarjeta;

        if (posicion > maxScroll) {
            posicion = 0;
        }

        if (posicion < 0) {
            posicion = maxScroll;
        }

        menuLista.style.transform = `translateX(-${posicion}px)`;
    }

    btnDerecha.addEventListener("click", () => mover(1));
    btnIzquierda.addEventListener("click", () => mover(-1));

    window.addEventListener("resize", () => {
        posicion = 0;
        menuLista.style.transform = "translateX(0)";
    });
});