const formReserva = document.getElementById("form-reserva");
const fechaReserva = document.getElementById("fecha");
const resultadoReserva = document.getElementById("resultado-reserva");

if (formReserva && fechaReserva && resultadoReserva) {
    const hoy = new Date();
    const fechaLocal = [
        hoy.getFullYear(),
        String(hoy.getMonth() + 1).padStart(2, "0"),
        String(hoy.getDate()).padStart(2, "0")
    ].join("-");

    fechaReserva.min = fechaLocal;

    formReserva.addEventListener("submit", (event) => {
        event.preventDefault();
        resultadoReserva.textContent = "Datos válidos. Esta demostración no envía ni guarda la reserva. Para confirmarla, contáctanos por teléfono o correo.";
        resultadoReserva.hidden = false;
    });

    formReserva.addEventListener("reset", () => {
        resultadoReserva.textContent = "";
        resultadoReserva.hidden = true;
    });
}
