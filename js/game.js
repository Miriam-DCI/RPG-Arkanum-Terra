// top level
import * as entities from "../data/entities.js";
import * as logic from "../data/logic.js";
import * as qalib from "../data/textNodes.js";
import * as items from "../data/items.js";
import * as locations from "../data/locations.js";

document.addEventListener("DOMContentLoaded", function () {
  const consoleElement = document.getElementById("console");
  const inputElement = document.getElementById("input");
  const submitButton = document.getElementById("submit");
  let userInputCounter = 0;
  let userInput = "";

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
});

// choice
// id = 15 || array
