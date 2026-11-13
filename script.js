let actual = 0;

const diapositivas = document.querySelectorAll(".slide");

function mostrarSlide() {

    diapositivas.forEach((slide, indice) => {

        slide.classList.remove("active");

        if (indice === actual) {
            slide.classList.add("active");
        }

    });

    document.getElementById("numero").textContent =
        (actual + 1) + " / " + diapositivas.length;

    document.getElementById("anterior").disabled =
        actual === 0;

    document.getElementById("siguiente").disabled =
        actual === diapositivas.length - 1;
}

function cambiarSlide(direccion) {

    actual += direccion;

    if (actual < 0) {
        actual = 0;
    }

    if (actual >= diapositivas.length) {
        actual = diapositivas.length - 1;
    }

    mostrarSlide();
}


document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        cambiarSlide(1);
    }

    if (event.key === "ArrowLeft") {
        cambiarSlide(-1);
    }

});

mostrarSlide();