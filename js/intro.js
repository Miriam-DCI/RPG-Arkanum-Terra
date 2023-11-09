document.addEventListener("DOMContentLoaded", function () {
  const consoleElement = document.getElementById("console");
  const inputElement = document.getElementById("input");
  const submitButton = document.getElementById("submit");
  let userInputCounter = 0;
  let userInput = "";

  const klasse = {
    magier: {
      hp: 50,
      mp: 100,
      atk: 10,
      Range: 2,
    },
    krieger: {
      hp: 100,
      mp: 50,
      atk: 20,
      Range: 1,
    },
    bogenschütze: {
      hp: 75,
      mp: 75,
      atk: 15,
      Range: 3,
    },
  };
  const player = { name: "player", klasse: undefined };
  // id für choices
  submitButton.addEventListener(
    "click",
    userInputCounter === 0 ? handleInput : charChoice
  );
  inputElement.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      userInputCounter === 0 ? handleInput() : charChoice();
    }
  });

  /**
   *@description Funktion zum anhängen von Text an die Konsole
   *@param {string} text */
  function showValueOfObject(obj) {
    let text = "";
    for (let key in obj) {
      text += key + ": " + obj[key] + " ";
    }
    return text;
  }

  /**
   *@description Funktion zum anhängen von Text an die Konsole
   *@param {string} text
   **/

  function appendToConsole(text) {
    const p = document.createElement("p");
    p.textContent = text;
    consoleElement.appendChild(p);
    consoleElement.scrollTop = consoleElement.scrollHeight;
  }

  /**
   *@description Funktion um userInput zu catchen
   *@param {string} text
   */

  /**
   *@description Funktion um text in der konsole zu anzuzeigen
   *@param {string} text
   */
  function displayTextInConsole(text) {
    appendToConsole(text);
  }

  /**
   *@description Funktion um text in der konsole zu löschen
   *@param {string} text
   **/

  function clearTextInConsole(text) {
    appendToConsole(text);
  } // Funktion um console zu löschen /*

  /**
   *@description Funktion zum löschen der Console
   */
  function clearConsole() {
    consoleElement.innerHTML = "";
  }

  /**

*@description Funktion zum anzeigen der spieler eingabe
*@param {string} text */
  function displayUserInput(text) {
    appendToConsole(text);
  }

  /**
   *@description Funktion wartet auf user input
   */
  function waitForUserInput() {
    return new Promise((resolve) => {
      submitButton.addEventListener("click", function listener() {
        submitButton.removeEventListener("click", listener); // remove this listener after it has been triggered
        resolve(inputElement.value);
      });
    });
  }
  /**
   *@description Funktion startet den spielablauf
   */
  function textCharChoice() {
    displayTextInConsole(
      "Du bist ein Abenteurer der sich auf die Reise macht um die Welt zu erkunden."
    );
    displayTextInConsole(
      "Du hast die Wahl zwischen 3 verschiedenen Charakteren."
    );
    displayTextInConsole(
      "Jeder Charakter hat seine eigenen Stärken und Schwächen."
    );
    displayTextInConsole("Magier: Hohe Magie, niedrige Lebenspunkte");
    displayTextInConsole("Krieger: Hohe Lebenspunkte, niedrige Magie");
    displayTextInConsole("Bogenschütze: Ausgewogen und hohe entfernung");
    displayTextInConsole(
      "Wähle mit bedacht du kannst deinen charakter nicht mehr ändern."
    );
    displayTextInConsole(
      "Wähle deinen Charakter: 1 für Magier, 2 für Krieger, 3 für Bogenschütze"
    );
  }
  function charChoice() {
    console.log("before loop");
    userInput = inputElement.value;
    console.log("userInput: " + userInput);
    // userInput = 1;
    if (userInput == "1") {
      displayTextInConsole(userInput + " Du hast den Magier gewählt.");
      player.klasse = klasse.magier;
      displayTextInConsole(showValueOfObject(player.charakter));
      return (userInput = 1);
    } else if (userInput == "2") {
      player.klasse = klasse.krieger;
      displayTextInConsole(userInput + "Du hast den Krieger gewählt.");
      return (userInput = 2);
    } else if (userInput == "3") {
      player.klasse = klasse.bogenschütze;
      displayTextInConsole(userInput + "Du hast den Bogenschützen gewählt.");
      return (userInput = 3);
    } else {
      displayTextInConsole("Falsche eingabe");
    }
    console.log("after loop");
  }

  /**
   * @description Funktion die den spiel ablauf
   * @param {string} text
   */

  function firstlevle() {}

  /**
   * @description Funktion um sich die hilfe anzeigen zu lassen
   * @param {string} text
   */

  function openHelp() {
    displayTextInConsole("Displaying help...");
    displayTextInConsole(
      "Das ist ein Text basiertes rollen spiel in dem du verschiedene Entscheidungen treffen kannst in dem du Aktionen ausführst (wort ins text feld schreibst)."
    );
  }

  /**
   *@description Funktion startet den spielablauf
   */
  function gameStart() {
    clearConsole();
    textCharChoice();
    userInput = "";
    // firstlevle();
  }

  /**

*@description Funktion zum verarbeiten der Spieler eingabe
*/
  function handleInput() {
    userInputCounter++;
    userInput = inputElement.value;

    displayTextInConsole("Willkommen in der Welt von ...");
    displayUserInput(
      "Möchtest du das spiel start? gib start ein! möchtest du dir die hilfe anzeigen lassen? gib hilfe ein!"
    );
    displayTextInConsole(userInput);

    if (userInput.toLowerCase() === "hilfe") {
      appendToConsole("Spielhilfe anzeigen...");
      openHelp();
      return (userInput = "");
    } else if (userInput.toLowerCase() === "start") {
      appendToConsole("Das Spiel beginnt...");
      gameStart();
      return (userInput = "");
    }
    inputElement.value = "";
  }
  /**
   *@description funktion initialisiert das spiel
   *@param */
});
