const textElement = document.getElementById("text");
const buttonOptionsElement = document.getElementById("btn-options");

let state = {};

function startGame() {
  state = {};
  showtextNode(1);
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
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  state = Object.assign(state, option.setState);
  showtextNode(nextTextNodeId);
}

const textNodes = [
  {
    id: 1,
    text: "Du stehst in einem dunklen Raum. Du siehst ein licht ca 10 meter entfernt. Was willst du tun?",
    options: [
      {
        text: "zum licht gehen",
        setState: { bluekey: true },
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
    text: "Du kommst an einer tür an. Auf dem Boden liegt ein kleiner blauer Stein der aussieht wie ein Tropfen. Du siehst in der mitte der tür eine art schlüsselloch in tropfen form. Was willst du tun?",
    options: [
      {
        text: "die tür mit dem stein öffnen",
        setState: { bluekey: false },
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
    text: "du siehst dich um und siehst eine abzweigung auf der linken seite die nach draußen führt. Was willst du tun?",
    options: [
      {
        text: "zurück gehen",
        nextText: 1,
      },
      {
        text: "zur abzweigung gehen",
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
