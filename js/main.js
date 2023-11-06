document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-button");
    const characterCreation = document.getElementById("char-creation");
    const playerLogo = document.getElementById("player-logo");
    const playerImage = document.getElementById("player-image");
  
    function changeBackground() {
      const backgroundImage = document.getElementById("background-image");
      backgroundImage.src = "img/char-creation.jpg";
    }
  
    function hide(element) {
      element.style.display = "none";
    }
  
    function show(element) {
      element.style.display = "block";
    }
  
    function imgSize(element, size) {
      element.style.width = size;
    }
  
    characterCreation.style.display = "none";
  
    startButton.addEventListener("click", function() {
      characterCreation.style.display = "block";
      changeBackground();
      hide(document.querySelector(".text-size-40"));
      hide(document.querySelector(".button-start-screen"));
      hide(document.querySelector("#logo"));
      imgSize(playerLogo, "15%");
      playerLogo.style.position = "absolute";
      playerLogo.style.top = "0";
      playerLogo.style.left = "0";
      imgSize(playerImage, "20%");
    });
  
    const selectImageButton = document.getElementById("select-image-button");
    selectImageButton.addEventListener("click", function() {
      // Hier kannst du die Logik hinzufügen, um ein Bild auszuwählen
    });
  });
  