function actualizarRelojes() {

    const zonas = {
        py: "America/Asuncion",
        london: "Europe/London",
        ny: "America/New_York",
        tokyo: "Asia/Tokyo",
        sidney: "Australia/Sydney",
        frankfurt: "Europe/Berlin",
        chicago: "America/Chicago"
    };

    for (const id in zonas) {
        const hora = new Date().toLocaleTimeString("es-ES", {
            timeZone: zonas[id],
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        document.getElementById(id).textContent = hora;
    }
}

setInterval(actualizarRelojes, 1000);
actualizarRelojes();
