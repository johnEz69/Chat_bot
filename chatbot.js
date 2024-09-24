// Añade un evento al botón con el ID 'open-chatbot' para abrir el modal del chatbot
document.getElementById('open-chatbot').addEventListener('click', function() {
    // Cambia el estilo del modal 'chatbot-modal' para que sea visible
    document.getElementById('chatbot-modal').style.display = 'block';
});

// Añade un evento al botón con el ID 'close-chatbot' para cerrar el modal del chatbot
document.getElementById('close-chatbot').addEventListener('click', function() {
    // Cambia el estilo del modal 'chatbot-modal' para que se oculte
    document.getElementById('chatbot-modal').style.display = 'none';
});

// Añade un evento al botón con el ID 'send-button' para manejar el envío de mensajes en el chatbot
document.getElementById('send-button').addEventListener('click', function() {
    // Obtiene el valor ingresado por el usuario en el campo de entrada con ID 'user-input'
    const userInput = document.getElementById('user-input').value;
    // Muestra el mensaje del usuario en el chatbox llamando a la función 'displayMessage'
    displayMessage('Usuario: ' + userInput);

    // Define una respuesta por defecto si el mensaje no coincide con las palabras clave
    let response = 'Lo siento, no entiendo lo que dices.';

    // Verifica si el mensaje del usuario contiene la palabra 'hola' (sin importar mayúsculas)
    if (userInput.toLowerCase().includes('hola')) {
        response = '¡Hola! ¿Cómo puedo ayudarte hoy?';
    // Verifica si el mensaje del usuario contiene la palabra 'adiós'
    } else if (userInput.toLowerCase().includes('adiós')) {
        response = '¡Hasta luego! Que tengas un buen día.';
    // Verifica si el mensaje del usuario contiene la frase 'cómo estás'
    } else if (userInput.toLowerCase().includes('cómo estás')) {
        response = 'Estoy bien, gracias por preguntar. ¿Y tú?';
    }

    // Muestra la respuesta del chatbot en el chatbox llamando a la función 'displayMessage'
    displayMessage('Chatbot: ' + response);
    // Limpia el campo de entrada para que el usuario pueda escribir un nuevo mensaje
    document.getElementById('user-input').value = '';
});

// Función que muestra un mensaje en el chatbox
function displayMessage(message) {
    // Obtiene el elemento chatbox donde se mostrarán los mensajes
    const chatbox = document.getElementById('chatbox');
    // Crea un nuevo elemento <div> que contendrá el mensaje
    const messageElement = document.createElement('div');
    // Establece el texto del nuevo elemento <div> como el mensaje proporcionado
    messageElement.textContent = message;
    // Añade el nuevo elemento <div> al final del chatbox
    chatbox.appendChild(messageElement);
    // Desplaza el chatbox hacia abajo para mostrar el último mensaje añadido
    chatbox.scrollTop = chatbox.scrollHeight;
}
