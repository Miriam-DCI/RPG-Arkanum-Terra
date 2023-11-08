document.addEventListener('DOMContentLoaded', function () {
    const consoleElement = document.getElementById('console');
    const inputElement = document.getElementById('input');
    const submitButton = document.getElementById('submit');
    const userInput = inputElement.value;

    const charChoice = {
        


    };
    submitButton.addEventListener('click', handleInput);
  
  
  /**
 * @description Funktion zum anhängen von Text an die Konsole
 * @param {string} text
 */
    function appendToConsole(text) {
      const p = document.createElement('p');
      p.textContent = text;
      consoleElement.appendChild(p);
      consoleElement.scrollTop = consoleElement.scrollHeight;
    }

      /**
 * @description Funktion um text in der konsole zu anzuzeigen
 * @param {string} text
 */

    function displayTextInConsole(text) {
      appendToConsole(text);
    }

      /**
 * @description Funktion um text in der konsole zu löschen
 * @param {string} text
 */
    function clearTextInConsole(text) {
        appendToConsole(text);
        }
  
    // Funktion um console zu löschen
      /**
 * @description Funktion zum löschen der Console
 
 */
    function clearConsole() {
      consoleElement.innerHTML = '';
    }

  /**
 * @description Funktion zum anzeigen der spieler eingabe
 * @param {string} text
 */
    function displayUserInput(text) {
        appendToConsole(text);
        }
  /**
 * @description Funktion startet den spielablauf
 *
 */ 
    function charChoice () {
        displayTextInConsole("Wähle deinen Charakter: 1 für Magier, 2 für Krieger, 3 für Bogenschütze");
        if (userInput === '1') {
            appendToConsole('Du hast den Magier gewählt.');
          } else if (userInput === '2') {
            appendToConsole('Du hast den Krieger gewählt.');
          } else if (userInput === '3') {
            appendToConsole('Du hast den Bogenschützen gewählt.');
          } else {
            appendToConsole('Unbekannte Aktion.');
          }
        
    }

        
   /**
 * @description Funktion startet den spielablauf
 *
 */  
        function gameStart (){
         clearConsole();
           charChoice();
        }
    
/**
 * @description Funktion zum verarbeiten der Spieler eingabe
 *
 */
function handleInput() {
    const userInput = inputElement.value;
    inputElement.value = '';
    displayTextInConsole("willkommen zum spiel");
    displayUserInput("Möchtest du das spiel start? gib start ein! möchtest du dir die hilfe anzeigen lassen? gib hilfe ein!");

    if (userInput.toLowerCase() === 'hilfe') {
      appendToConsole('Spielhilfe anzeigen...');
      openHelp();
    } else if (userInput.toLowerCase() === 'start') {
      appendToConsole('Das Spiel beginnt...');
      gameStart();
    } else {
      appendToConsole('Unbekannte Aktion.');
    }
  }

/**
 * @description funktion initialisiert das spiel
 * @param
 */
    function gameInit (){
        handleInput();
    }

    gameInit();
  });