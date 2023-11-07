document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-button");
    const charSelection = document.getElementById("char-selection");
    const titleScreen = document.getElementById("title-screen");
  
    function changeBackground(oldImage, newImage) {
      const backgroundImage = document.getElementById(oldImage);
      backgroundImage.src = newImage;
    }
  
    function hide(element) {
      element.style.display = "none";
    }
  
    function show(element) {
      element.style.display = "grid"; // Ändere display auf "grid" für die Charakterauswahl
    }
  
    charSelection.style.display = "none";
  
    if (startButton) {
      startButton.addEventListener("click", function() {
        charSelection.style.display = "grid";
        hide(titleScreen);
        changeBackground("background-image", "img/char-creation.jpg"); // Ändere das Hintergrundbild für die Charakterauswahl
        show(charSelection);
      });
    }
  });
  