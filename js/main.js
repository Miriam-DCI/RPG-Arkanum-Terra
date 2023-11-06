/* warten auf das laden der webseite */ 
document.addEventListener("DOMContentLoaded", function() {

    // starte button selektieren
const startButton = document.getElementById("start-button");

    // Charaktererstellungselement selektieren
const characterCreation = document.getElementById("character-creation");

// verstecken der characktererstellung beim start
characterCreation.style.display = "none";

    // startbutton klick event
startButton.addEventListener("click", function() {
    // zeige die charaktererstellung an
    characterCreation.style.display = "block";

    });
});