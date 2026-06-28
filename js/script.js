document.addEventListener("DOMContentLoaded", () => {
    const carruseles = document.querySelectorAll(".carrusel");

    carruseles.forEach((carrusel) => {
        const ventana = carrusel.querySelector(".carrusel-ventana");
        const izquierda = carrusel.querySelector(".flecha-izquierda");
        const derecha = carrusel.querySelector(".flecha-derecha");

        derecha.addEventListener("click", () => {
            ventana.scrollBy({
                left: 300,
                behavior: "smooth"
            });
        });

        izquierda.addEventListener("click", () => {
            ventana.scrollBy({
                left: -300,
                behavior: "smooth"
            });
        });
    });
});