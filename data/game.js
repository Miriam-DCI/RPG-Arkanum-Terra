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

let inventory = {};

/**
 * @description Funktion fügt einen verbündeteten zum spieler hinzu
 * @param
 */

function addAlly(ally) {
  character.allies.push(ally);
}

/**
 * @description Funktions fügt einen gegner zum spieler hinzu
 * @param
 */

function addEnemy(enemy) {
  character.enemies.push(enemy);
}

/**
 * @description Funktion fügt einen ort zur entdeckten orte liste hinzu
 * @param
 */

function discoverLocation(location) {
  if (!character.discoveredLocations.includes(location)) {
    character.discoveredLocations.push(location);
  }
}

/**
 * @description Funktion aktualisiert die Tageszeit
 * @param
 */

function updateTimeOfDay() {
  // Logik zur Aktualisierung der Tageszeit
}

/**
 * @description Funktion aktualisiert die Moral des Spielers
 * @param
 */

function adjustMorality(points) {
  character.moralityPoints += points;
}

/**
 * @description Funktion löst einen Flashback aus
 * @param
 */

function triggerFlashback() {
  character.flashbackTriggered = true;
}

/**
 * @description Funktion fügt einen Skill zum Spieler hinzu
 * @param
 */

function improveSkills(skillType) {
  if (!character.characterSkills.includes(skillType)) {
    character.characterSkills.push(skillType);
  }
}

/**
 * @description Funktion fügt einen Gegenstand zum Inventar hinzu
 * @param
 */

function addItemToInventory(item) {
  character.inventory.push(item);
}

/**
 * @description Funktion startet das Spiel
 * @param
 */

function startGame() {
  inventory = {};
  showtextNode(1);
}

/**
 * @description Funktion zeigt den Text an und fügt die Buttons hinzu
 * @param
 */

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

/**
 * @description Funktion zeigt die Optionen an
 * @param
 */

function showOption(option) {
  return (
    option.requiredinventory == null || option.requiredinventory(inventory)
  );
}

/**
 * @description Funktion wählt die Option aus und führt sie aus
 * @param
 */

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
