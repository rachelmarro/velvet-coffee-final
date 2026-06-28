document.addEventListener("DOMContentLoaded", () => {
    const carruseles = document.querySelectorAll(".carrusel");

    carruseles.forEach((carrusel) => {
        const lista = carrusel.querySelector(".menu-lista");
        const ventana = carrusel.querySelector(".carrusel-ventana");
        const izquierda = carrusel.querySelector(".flecha-izquierda");
        const derecha = carrusel.querySelector(".flecha-derecha");
        const tarjeta = carrusel.querySelector(".tarjeta");

        let posicion = 0;

        derecha.addEventListener("click", () => {
            const ancho = tarjeta.offsetWidth + 18;
            const maxScroll = lista.scrollWidth - ventana.offsetWidth;

            posicion += ancho;
            if (posicion > maxScroll) posicion = 0;

            lista.style.transform = `translateX(-${posicion}px)`;
        });

        izquierda.addEventListener("click", () => {
            const ancho = tarjeta.offsetWidth + 18;
            const maxScroll = lista.scrollWidth - ventana.offsetWidth;

            posicion -= ancho;
            if (posicion < 0) posicion = maxScroll;

            lista.style.transform = `translateX(-${posicion}px)`;
        });
    });
});