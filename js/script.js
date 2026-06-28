document.addEventListener("DOMContentLoaded", () => {
    const carruseles = document.querySelectorAll(".carrusel");

    carruseles.forEach((carrusel) => {
        const lista = carrusel.querySelector(".menu-lista");
        const izquierda = carrusel.querySelector(".flecha-izquierda");
        const derecha = carrusel.querySelector(".flecha-derecha");

        izquierda.addEventListener("click", () => {
            lista.scrollBy({
                left: -280,
                behavior: "smooth"
            });
        });

        derecha.addEventListener("click", () => {
            lista.scrollBy({
                left: 280,
                behavior: "smooth"
            });
        });
    });
});