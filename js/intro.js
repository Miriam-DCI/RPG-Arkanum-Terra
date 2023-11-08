document.addEventListener('DOMContentLoaded', function () {
    const consoleElement = document.getElementById('console');
    const inputElement = document.getElementById('input');
    const submitButton = document.getElementById('submit');
    let userInput = '';

    const klasse = {
        magier: {
            hp: 50,
            mp: 100,
            atk: 10,
            Range: 2
        },
        krieger: {
            hp: 100,
            mp: 50,
            atk: 20,
            Range: 1
        },
        bogenschütze: {
            hp: 75,
            mp: 75,
            atk: 15,
            Range: 3
        }
    };
        
const player = {
    name: 'player',
    klasse: undefined,
};

    submitButton.addEventListener('click', handleInput);
    inputElement.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        handleInput();
      }
    });  


     /**
 * @description Funktion zum anhängen von Text an die Konsole
 * @param {string} text
 */
    function showValueOfObject(obj) {
        let text = '';
        for (let key in obj) {
          text += key + ': ' + obj[key] + ' ';
        }
        return text;
    }

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
 * @description Funktion um userInput zu catchen
 * @param {string} text
 */

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
 * @description Funktion wartet auf user input
 *
 */
  function waitForUserInput() {
    return new Promise((resolve) => {
        function listener() {
            submitButton.removeEventListener('click', listener);
            resolve(inputElement.value);
        }
        submitButton.addEventListener('click', listener);
    });

}  
  /**
 * @description Funktion startet den spielablauf
 *
 */ 
  async function charChoice() {
    // displayTextInConsole("Du bist ein Abenteurer der sich auf die Reise macht um die Welt zu erkunden.");
    // displayTextInConsole("Du hast die Wahl zwischen 3 verschiedenen Charakteren.");
    // displayTextInConsole("Jeder Charakter hat seine eigenen Stärken und Schwächen.");
    // displayTextInConsole("Magier: Hohe Magie, niedrige Lebenspunkte");
    // displayTextInConsole("Krieger: Hohe Lebenspunkte, niedrige Magie");
    // displayTextInConsole("Bogenschütze: Ausgewogen und hohe entfernung");
    // displayTextInConsole("Wähle mit bedacht du kannst deinen charakter nicht mehr ändern.");
    // displayTextInConsole("Wähle deinen Charakter: 1 für Magier, 2 für Krieger, 3 für Bogenschütze");
    console.log("before loop");
    do {
        userInput = await waitForUserInput();
    } while (userInput !== '1' && userInput !== '2' && userInput !== '3');

    if (userInput === '1') {
        displayTextInConsole(userInput + ' Du hast den Magier gewählt.');
        player.klasse = klasse.magier;
        displayTextInConsole(showValueOfObject(player.klasse));
    } else if (userInput === '2') {
        player.klasse = klasse.krieger;
        displayTextInConsole(userInput + ' Du hast den Krieger gewählt.');
        displayTextInConsole(showValueOfObject(player.klasse));
    } else if (userInput === '3') {
        player.klasse = klasse.bogenschütze;
        displayTextInConsole(userInput + ' Du hast den Bogenschützen gewählt.');
        displayTextInConsole(showValueOfObject(player.klasse));
    }else {
        displayTextInConsole('Irgendwas ist schief gelaufen. :c');
    }
    console.log("after loop");
}

function openHelp() {
    displayTextInConsole("Displaying help...");
    displayTextInConsole("Das ist ein Text basiertes rollen spiel in dem du verschiedene Entscheidungen treffen kannst in dem du Aktionen ausführst (wort ins text feld schreibst).");
}
        
   /**
 * @description Funktion startet den spielablauf
 *
 */  
        function gameStart (){
            clearConsole();
            charChoice()
            displayTextInConsole("upsi ich sollte nicht angezeigt werden.");
            // if (player.klasse === klasse.magier) {
            //     displayTextInConsole(userInput + ' Du hast den Magier gewählt.');
            // } else if (player.klasse === klasse.krieger) {
            //     displayTextInConsole(userInput + ' Du hast den Krieger gewählt.');
            // } else if (player.klasse === klasse.bogenschütze) {
            //     displayTextInConsole(userInput + ' Du hast den Bogenschützen gewählt.');
            // } else {
            //     displayTextInConsole('Irgendwas ist schief gelaufen. :c');
            // }
            firstLevel();
        }

/**
 * @description Das erste Level
 *
 */
        
async function firstLevel() {
    displayTextInConsole("Du bist ein Abenteurer der sich auf die Reise macht um die Welt zu erkunden.");
    displayTextInConsole("du wanderst durch den wald und siehst eine höhle.");
    displayTextInConsole("links von dir ist ein fluss und rechts von dir ist ein berg.");
    displayTextInConsole("was möchtest du tun?");
    displayTextInConsole("1. Höhle betreten");
    displayTextInConsole("2. Fluss folgen");
    displayTextInConsole("3. Berg besteigen");

    do {
        userInput = await waitForUserInput();
    } while (userInput !== '1' && userInput !== '2' && userInput !== '3');

    if (userInput == "1" ){
        displayTextInConsole("Du betrittst die Höhle und siehst einen schlafenden Bären");
    }else if (userInput == "2" ){
        displayTextInConsole("Du folgst dem Fluss und siehst einen Wasserfall");
    }else if (userInput == "3" ){
        displayTextInConsole("auf dem weg zum Berg wirst du von einem Wolf angegriffen");
    }

}

/**
 * @description Funktion zum verarbeiten der Spieler eingabe
 *
 */

/*
    handleInput überarbeiten
*/ 
function handleInput() {
    let userInput = inputElement.value;
    inputElement.value = '';
    displayTextInConsole("Willkommen in der Welt von ...");
    displayUserInput("Möchtest du das spiel start? gib start ein! möchtest du dir die hilfe anzeigen lassen? gib hilfe ein!");
    displayTextInConsole(userInput);
    if (userInput.toLowerCase() === 'hilfe') {
      appendToConsole('Spielhilfe anzeigen...');
      
    } else if (userInput.toLowerCase() === 'start') {
      appendToConsole('Das Spiel beginnt...');

    }
  }
  });