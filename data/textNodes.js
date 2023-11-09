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

  // firstlevle();
}

/**

*@description Funktion zum verarbeiten der Spieler eingabe
*/
function handleInput(userInput, userInputCounter) {
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
}

export {
  handleInput,
  charChoice,
  textCharChoice,
  gameStart,
  openHelp,
  displayUserInput,
  clearConsole,
  displayTextInConsole,
  appendToConsole,
  showValueOfObject,
};
