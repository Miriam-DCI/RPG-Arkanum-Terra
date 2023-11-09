/*
  TODO:
  funktion zum tausch des bg-img
  array aus dateipfade die sich je nach text-id anpassen

*/

const textElement = document.getElementById("text");
const buttonOptionsElement = document.getElementById("btn-options");
const audioElement = document.getElementById("audio");

let inventory = {};
const bgImgPathArray = ["/img/Pfad-zur-burg.jpg", "/img/door-closeUp.jpg"];

function setBgImg(imgUrl) {
  const consoleElement = document.getElementById("console");
  consoleElement.style.backgroundImage = `url(${imgUrl})`;
}

function startGame() {
  inventory = {};
  playSound();
  showtextNode(1);
}
function playSound() {
  audioElement.play(); //hier wird das audio element mit abgespielt
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

const textNodes = [
  {
    id: 1,
    bgImg: setBgImg(bgImgPathArray[0]),
    text: "Du stehst auf einer Brücke. Du siehst eine Tür ca 50 meter entfernt. Was willst du tun?",
    options: [
      {
        text: "zum Tür gehen",
        setinventory: { bluekey: true },
        nextText: 2,
      },
      {
        text: "umsehen",
        nextText: 3,
      },
      {
        text: "schlafen gehen",
        nextText: 4,
      },
    ],
  },
  {
    id: 2,
    bgImg: setBgImg(bgImgPathArray[1]),
    text: "Du kommst an einer tür an. Auf dem Boden liegt ein kleiner blauer Stein der aussieht wie ein Tropfen. Du siehst in der mitte der tür eine art schlüsselloch in tropfen form. Was willst du tun?",
    options: [
      {
        text: "die tür mit dem stein öffnen",
        setinventory: { bluekey: false },
        nextText: 5,
      },
      {
        text: "zurück gehen",
        nextText: 1,
      },
      {
        text: "tür eintreten",
        nextText: 6,
      },
    ],
  },
  {
    id: 3,
    text: "du siehst dich um und siehst eine Treppe auf der linken seite die nach unten führt. Was willst du tun?",
    options: [
      {
        text: "zurück gehen",
        nextText: 1,
      },
      {
        text: "zur Treppe gehen",
        nextText: 7,
      },
      {
        text: "schlafen gehen",
        nextText: 4,
      },
    ],
  },
  {
    id: 4,
    text: "Du legst dich hin und schläfst ein. Als du aufwachst bist du gefesselt in einem raum der aussieht wie ein mittlealter wohnzimmer du siehst keine fester nur eine tür. Am karmin sitzt ein man der dir den rücken gekehrt hat. Was willst du tun?",
    options: [
      {
        text: "ihn ansprechen",
        nextText: 8,
      },
      {
        text: "ihn angreifen",
        nextText: 9,
      },
      {
        text: "ihn ignorieren",
        nextText: 10,
      },
    ],
  },
  {
    id: 5,
    text: "Du öffnest die tür und gehst hindurch. Du kommst in einen raum mit einem tisch und einem stuhl. Auf dem tisch liegt ein zettel. Was willst du tun?",
    options: [
      {
        text: "zettel lesen",
        nextText: 11,
      },
      {
        text: "zurück gehen",
        nextText: 2,
      },
      {
        text: "raum untersuchen",
        nextText: 12,
      },
    ],
  },
  {
    id: 6,
    text: "Du versuchst die Tür ein zu tereten. Sie gibt nicht nach. Du verletzt dich am fuß. Was willst du tun?",
    options: [
      {
        text: "zurück gehen",
        nextText: 2,
      },
      {
        text: "den Blauen Stein verwenden um die Tür zu öffnen",
        nextText: 5,
      },
      {
        text: "die Tür untersuchen",
        nextText: 13,
      },
    ],
  },
  {
    id: 7,
    text: "",
    options: [],
  },
  {
    id: 8,
    text: "",
    options: [],
  },
  {
    id: 9,
    text: "",
    options: [],
  },
];

startGame();
