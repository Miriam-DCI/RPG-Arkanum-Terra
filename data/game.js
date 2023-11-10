/*
  TODO:
  funktion zum tausch des bg-img hintergrundbilder funktionieren aktuell nicht weil DOM fehlt
  array aus dateipfade die sich je nach text-id anpassen 
  
  
  item abfrage überarbeiten
  Story weiter schreiben (ausführlicher aktuell sind nur kern punkte vorhanden)

  array für charackter story fortschritt (ids der textnodes werden ins array
  gepuscht und später kann abgefragt werden ob wir bereites an einem bestimmten 
  story punkt waren um andeere optionen zu bekommen)

  Deploly error mit bildern fixen 

*/

// imports

import { textNodes, character } from "./textNodes.js";

const textElement = document.getElementById("text");
const buttonOptionsElement = document.getElementById("btn-options");
const audioElement = document.getElementById("audio");

let inventory = {};

const bgImgPathArray = ["/img/Pfad-zur-burg.jpg", "/img/door-closeUp.jpg"];

function setBgImg(imgUrlIndex, imageArray) {
  // Überprüfen, ob der übergebene Index gültig ist
  if (imgUrlIndex >= 0 && imgUrlIndex < imageArray.length) {
    const consoleElement = document.getElementById("console");
    consoleElement.style.backgroundImage = `url(${imageArray[imgUrlIndex]})`;
  } else {
    console.error("Ungültiger Index für das Hintergrundbild.");
  }
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
  playSound();
  showtextNode(1);
}
function playSound() {
  audioElement.play();
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
  bgImgPathArray,
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
  setBgImg,
};
