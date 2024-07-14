document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        addMessage(userInput, 'user');
        document.getElementById('user-input').value = '';
        addToChatHistory(userInput); // Agregar mensaje al historial de chat
        getBotResponse(userInput);
    }
});

document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('send-btn').click();
    }
});

function addToChatHistory(message) {
    const historyContainer = document.getElementById('chat-history');
    const messageElement = document.createElement('div');
    messageElement.classList.add('history-message');
    messageElement.textContent = message;
    historyContainer.appendChild(messageElement);
    historyContainer.scrollTop = historyContainer.scrollHeight; // Hacer scroll hacia abajo al agregar un nuevo mensaje
}

function addMessage(text, sender) {
    const message = document.createElement('div');
    message.className = 'message ' + sender;
    message.textContent = text;
    document.getElementById('messages').appendChild(message);
    document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
}

function getBotResponse(input) {
    // Aquí puedes agregar lógica para manejar diferentes preguntas y respuestas
    setTimeout(() => {
        const response = 'Esta es una respuesta de SolvIT para tu pregunta: ' + input;
        addMessage(response, 'bot');
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const themeIcon = document.getElementById('theme-icon');

    // Verifica el tema actual almacenado en localStorage al cargar la página
    const currentMode = localStorage.getItem('themeMode');
    if (currentMode === 'dark-mode') {
        document.body.classList.add('dark-mode');
        themeIcon.src = 'img/image-dark.png'; // Cambia la imagen del icono de tema
        themeSwitch.setAttribute('title', 'Modo oscuro');
    } else {
        document.body.classList.add('light-mode');
        themeIcon.src = 'img/image.png'; // Cambia la imagen del icono de tema
        themeSwitch.setAttribute('title', 'Modo claro');
    }

    // Cambia el tema cuando se hace clic en el botón de cambio de tema
    themeSwitch.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            // Cambia a modo claro
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            themeIcon.src = 'img/image.png'; // Cambia la imagen del icono de tema
            themeSwitch.setAttribute('title', 'Modo claro');
            localStorage.setItem('themeMode', 'light-mode'); // Guarda el modo en localStorage
        } else {
            // Cambia a modo oscuro
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            themeIcon.src = 'img/image-dark.png'; // Cambia la imagen del icono de tema
            themeSwitch.setAttribute('title', 'Modo oscuro');
            localStorage.setItem('themeMode', 'dark-mode'); // Guarda el modo en localStorage
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Mostrar la animación al cargar la página
    showAnimation();

    // Función para mostrar la animación
    function showAnimation() {
        // Mostrar el texto "SolvIT"
        const brandText = document.getElementById('brand-text');
        brandText.style.opacity = '1';

        // Desvanecer el texto "SolvIT" después de unos segundos
        setTimeout(function() {
            brandText.style.opacity = '0';
        }, 2000); // Ajusta el tiempo para que el texto "SolvIT" sea visible inicialmente
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento del sidebar
    const sidebarTitle = document.querySelector('#sidebar h2');

    // Agregar un evento click al título del sidebar
    sidebarTitle.addEventListener('click', function() {
        // Redireccionar a la página actual (recargar la página)
        window.location.href = 'index.html'; // Cambia 'index.html' por la ruta correcta si es diferente
    });
});

// Función para añadir mensajes al historial
function addToChatHistory(message) {
    var history = document.getElementById('chat-history');
    var messageElement = document.createElement('div');
    messageElement.classList.add('history-message');
    messageElement.textContent = message.length > 50 ? message.substring(0, 50) + '...' : message; // Limita el mensaje a 50 caracteres
    history.appendChild(messageElement);
}