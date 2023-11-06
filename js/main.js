document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.getElementById("start-button");
  const characterCreation = document.getElementById("char-creation");
  const playerLogo = document.getElementById("player-logo");

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

  if (startButton) {
    startButton.addEventListener("click", function() {
      characterCreation.style.display = "grid";
      changeBackground();
      hide(document.querySelector(".text-size-40"));
      hide(document.querySelector(".button-start-screen"));
      hide(document.querySelector("#logo"));
      imgSize(playerLogo, "15%"); // Änderung hier
    });
  }

  const selectImageButton = document.getElementById("select-image-button");
  if (selectImageButton) {
    selectImageButton.addEventListener("click", function() {
      // Hier kannst du die Logik hinzufügen, um ein Bild auszuwählen
    });
  }
});
