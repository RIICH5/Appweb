// script.js
document.addEventListener("DOMContentLoaded", function() {
    const year = new Date().getFullYear();
    document.getElementById("copyright").innerHTML = `&copy; ${year} Todos los derechos reservados`;
});
