document.addEventListener('DOMContentLoaded', function () {
    const consoleElement = document.getElementById('console');
    const inputElement = document.getElementById('input');
    const submitButton = document.getElementById('submit');
    const userInput = inputElement.value;
    submitButton.addEventListener('click', handleInput);
  
    function handleInput() {
      const userInput = inputElement.value;
      inputElement.value = '';
  
      appendToConsole(`Spieler: ${userInput}`);
  
      if (userInput.toLowerCase() === 'hilfe') {
        appendToConsole('Spielhilfe anzeigen...');
      } else if (userInput.toLowerCase() === 'start') {
        appendToConsole('Das Spiel beginnt...');
      } else {
        appendToConsole('Unbekannte Aktion.');
      }
    }
  


    function appendToConsole(text) {
      const p = document.createElement('p');
      p.textContent = text;
      consoleElement.appendChild(p);
      consoleElement.scrollTop = consoleElement.scrollHeight;
    }
  
    // Funktion, um Text in der Konsole anzuzeigen
    function displayTextInConsole(text) {
      appendToConsole(text);
    }

    // Funktion um text in der konsole zu löchen 
    function clearTextInConsole(text) {
        appendToConsole(text);
        }
  
    // Funktion um console zu löschen
    function clearConsole() {
      consoleElement.innerHTML = '';
    }

    // Funktion zum anzeigen der spieler eingabe

    function displayUserInput(text) {
        appendToConsole(text);
        }

    // Beispiel: Anzeige von Text in der Konsole
    displayTextInConsole('Willkommen zum Text-RPG!');
    displayTextInConsole('Gib "start" ein, um das Spiel zu beginnen.');
    displayTextInConsole(userInput);
    displayTextInConsole('Gib "hilfe" ein, um die Spielhilfe anzuzeigen.');
  });
  