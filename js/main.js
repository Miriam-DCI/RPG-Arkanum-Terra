/* Warten auf das Laden der Webseite */
document.addEventListener("DOMContentLoaded", function() {
    // Start-Button selektieren
    const startButton = document.getElementById("start-button");
  
    // Charaktererstellungselement selektieren
    const characterCreation = document.getElementById("char-creation");
  
    // Hintergrundbild zu Char-Erstellung ändern
    function changeBackground() {
      const backgroundImage = document.getElementById("background-image");
      backgroundImage.src = "img/char-creation.jpg";
    }
    // H1-Text ändern
    function changeText() {
        const h1 = document.querySelector(".text-border-lightgrey");
        h1.innerHTML = "Charaktererstellung";
    }
    //Willkommens-Text ausblenden
    function hideText() {
    //   const h1 = document.querySelector(".text-size-50"); // Hier den richtigen Selektor verwenden
      const welcomeText = document.querySelector(".text-size-40");
      const buttonContainer = document.querySelector(".button-start-screen");
    //   h1.style.display = "none";
      welcomeText.style.display = "none";
      buttonContainer.style.display = "none";
    }
  
    // Char-Erstellung beim Start verstecken
    characterCreation.style.display = "none";
  
    // Start-Button Klick-Event
    startButton.addEventListener("click", function() {
      // Char-Erstellung anzeigen lassen
      characterCreation.style.display = "block";
      // Hintergrundbild ändern
      changeBackground();
    //  Willkommens-Text ausblenden
      hideText();
    //   H1-Text ändern
        changeText();
    });
  });
  