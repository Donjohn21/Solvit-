function toggleSection(element) {
    var section = element.parentElement; // Obtiene el elemento padre (la sección)
    var sectionContent = section.querySelector('.section-content'); // Encuentra el contenido de la sección

    // Alterna la visibilidad del contenido de la sección y cambia la imagen
    if (sectionContent.style.display === 'none' || sectionContent.style.display === '') {
        sectionContent.style.display = 'block'; // Muestra el contenido
        element.src = element.getAttribute('data-close-src'); // Cambia la imagen a la de cerrar
    } else {
        sectionContent.style.display = 'none'; // Oculta el contenido
        element.src = element.getAttribute('data-open-src'); // Cambia la imagen a la de abrir
    }

    // Evita que el botón realice el comportamiento predeterminado de un botón
    return false;
}

// Añadir evento para reiniciar la página al hacer clic en el logo
document.getElementById('logoButton').addEventListener('click', function() {
    location.reload(); // Reinicia la página
});
