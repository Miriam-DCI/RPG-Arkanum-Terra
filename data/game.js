/*
  TODO:
  funktion zum tausch des bg-img hintergrundbilder funktionieren aktuell nicht weil DOM fehlt
  array aus dateipfade die sich je nach text-id anpassen 
  
  
  item abfrage überarbeiten
  Story weiter schreiben (ausführlicher aktuell sind nur kern punkte vorhanden)

  array für charackter story fortschritt (ids der textnodes werden ins array
  gepuscht und später kann abgefragt werden ob wir bereites an einem bestimmten 
  story punkt waren um andeere optionen zu bekommen)
*/

// imports

import { textNodes, character } from "./textNodes.js";

const textElement = document.getElementById("text");
const buttonOptionsElement = document.getElementById("btn-options");
//  audioElement = document.getElementById("audio");
// audioElement = "/audio/ME3_AnEndOnceAndForAll.mp3";

let inventory = {};
// let playButton = document.getElementById("play");

// playButton.addEventListener("click", function () {
//   playSound();
// });

function playSound() {
  audioElement.play();
}

function addAlly(ally) {
  character.allies.push(ally);
}

function addEnemy(enemy) {
  character.enemies.push(enemy);
}

function discoverLocation(location) {
  if (!character.discoveredLocations.includes(location)) {
    character.discoveredLocations.push(location);
  }
}

function updateTimeOfDay() {
  // Logik zur Aktualisierung der Tageszeit
}

function adjustMorality(points) {
  character.moralityPoints += points;
}

function triggerFlashback() {
  character.flashbackTriggered = true;
}

function improveSkills(skillType) {
  if (!character.characterSkills.includes(skillType)) {
    character.characterSkills.push(skillType);
  }
}

function addItemToInventory(item) {
  character.inventory.push(item);
}

function startGame() {
  inventory = {};
  showtextNode(1);
}

function showtextNode(textNodeindex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeindex);
  textElement.innerText = textNode.text;
  while (buttonOptionsElement.firstChild) {
    buttonOptionsElement.removeChild(buttonOptionsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.addEventListener("click", () => selectOption(option));
      buttonOptionsElement.appendChild(button);
    }
  });
}

function showOption(option) {
  return (
    option.requiredinventory == null || option.requiredinventory(inventory)
  );
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  inventory = Object.assign(inventory, option.setinventory);
  showtextNode(nextTextNodeId);
}

startGame();

export {
  selectOption,
  showOption,
  showtextNode,
  startGame,
  addItemToInventory,
  improveSkills,
  triggerFlashback,
  adjustMorality,
  updateTimeOfDay,
  discoverLocation,
  addEnemy,
  addAlly,
};
