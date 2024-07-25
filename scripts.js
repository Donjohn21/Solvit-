function toggleSection(element) {
    console.log(element.parentElement)
    var section = element.parentElement; // Obtiene el elemento padre (la sección)
    var sectionContent = section.querySelector('.section-content'); // Encuentra el contenido de la sección

    // Alterna la visibilidad del contenido de la sección y cambia la imagen
    if (sectionContent.style.display === 'none') {
        sectionContent.style.display = 'block'; // Muestra el contenido
        element.src = element.getAttribute('data-open-src'); // Cambia la imagen a la de abrir
    } else {
        sectionContent.style.display = 'none'; // Oculta el contenido
        element.src = element.getAttribute('data-close-src'); // Cambia la imagen a la de cerrar
    }

    // Evita que el botón realice el comportamiento predeterminado de un botón
    return false;
}


