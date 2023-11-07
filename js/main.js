document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-button");
    const charSelection = document.getElementById("char-selection");
    const titleScreen = document.getElementById("title-screen");

    function changeBackground(newImage) {
        const gameScreen = document.getElementById("game-window");
        gameScreen.style.backgroundImage = `url(${newImage})`;
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
            charSelection.style.display = "grid";
            hide(titleScreen);
            // changeBackground("img/char-creation.jpg");
            show(charSelection);
        });
    }
});
