document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.getElementById("start-button");
  const charSelection = document.getElementById("char-selection");
  const titleScreen = document.getElementById("title-screen");

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

  charSelection.style.display = "none";

  if (startButton) {
      startButton.addEventListener("click", function() {
          charSelection.style.display = "block";
          changeBackground();
          hide(titleScreen);
      });
  }
});
