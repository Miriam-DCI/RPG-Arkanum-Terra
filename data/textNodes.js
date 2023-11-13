import {
  selectOption,
  showOption,
  showtextNode,
  startGame,
  addItemToInventory,
  improveSkills,
  triggerFlashback,
  adjustMorality,
  updateTimeOfDay,
  discoverLocation,
  addEnemy,
  addAlly,
} from "./game.js";

const consoleElement = document.getElementById("console");
consoleElement.style.backgroundImage = null;

const bgImgPathArray = [
  "./img/Pfad-zur-burg.jpg",
  "./img/door-closeUp.jpg",
  "./img/bild-1.jpeg",
];

function setBgImg(imgUrlIndex) {
  consoleElement.style.backgroundImage = null;
  consoleElement.style.backgroundImage = `url(${bgImgPathArray[imgUrlIndex]})`;
  console.log(bgImgPathArray);
}

let character = {
  allies: [],
  enemies: [],
  discoveredLocations: [],
  timeOfDay: "Tag",
  moralityPoints: 0,
  flashbackTriggered: false,
  characterSkills: [],
  inventory: [],
};
const textNodes = [
  {
    bgImg: setBgImg(0),
    id: 1,
    text: "Willkommen in Arkanum-Terra, eine Welt, die von einer mysteriösen Katastrophe heimgesucht wurde. Die Ursache bleibt ein Rätsel. Übernatürliche Kräfte sind freigesetzt worden, und die Gesellschaft ist neu geordnet. Ressourcen sind knapp, und Konflikte prägen das tägliche Überleben.",
    options: [{ text: "Weiter", nextText: 2 }],
  },
  {
    id: 2,
    text: "Du erlebst die Geschichte durch Textnachrichten und triffst Entscheidungen, die den Verlauf der Handlung beeinflussen. Wähle weise, denn deine Entscheidungen beeinflussen deinen Charakter, seine Fähigkeiten und das Ende der Geschichte.",
    options: [{ text: "Weiter", nextText: 3 }],
  },
  {
    id: 3,
    text: "Erkunde verschiedene Pfade wie den Vergessenen Turm, die Dunkle Umgebung, den Verzauberten Wald und die Wissenssuche. Triff Verbündete, finde Gegenstände und stelle dich Gefahren. Jeder Pfad hat ein einzigartiges Ende mit unterschiedlichen Klassen für deinen Charakter. Viel Glück!",
    options: [{ text: "Weiter", nextText: 5 }],
  },
  {
    id: 5,
    text: "Du stehst auf einer alten Brücke, umgeben von dichtem Wald. Die Luft ist schwer vom Duft der Verwesung. Vor dir erstreckt sich eine verlassene Straße, und am Ende der Brücke siehst du einen Turm mit einer halb offenen Tür.",
    options: [
      { text: "Zum Turm gehen", nextText: 10 },
      { text: "Die Umgebung erkunden", nextText: 101 },
      { text: "Den Wald betreten", nextText: 201 },
      { text: "Nach geheimen Orten suchen", nextText: 301 },
    ],
  },
  // Turmpfad
  {
    id: 10,
    bgImg: setBgImg(1),
    text: "Du betrittst den Turm. Im Inneren siehst du verwitterte Wände und einen schwachen Lichtschein von oben. Eine Treppe führt nach oben, und auf der linken Seite ist eine Tür.",
    options: [
      { text: "Die Treppe nehmen", nextText: 20 },
      {
        text: "Die Tür öffnen",
        setInventory: { bluekey: false },
        nextText: 40,
      },
      { text: "Zurück zur Brücke", nextText: 5 },
    ],
  },
  // Treppepfad
  {
    id: 20,
    text: "Du gehst die Treppe hinauf und kommst zu einem höheren Stockwerk des Turms. Du hörst Geräusche aus einem Raum auf der rechten Seite.",
    options: [
      { text: "Zum Raum gehen", nextText: 30 },
      { text: "Die Treppe hinunter gehen", nextText: 10 },
    ],
  },
  // Raum im Turm
  {
    id: 30,
    text: "Im Raum findest du einen alten Schreibtisch mit verblassten Schriftrollen. Auf dem Boden liegt ein Schlüssel.",
    options: [
      {
        text: "Den Schlüssel aufheben",
        setInventory: { bluekey: true },
        nextText: 35,
      },
      { text: "Den Raum verlassen", nextText: 20 },
    ],
  },
  // Schlüssel gefunden
  {
    id: 35,
    text: "Du hast einen blauen Schlüssel gefunden.",
    options: [{ text: "Weiter", nextText: 20 }],
  },
  // Türpfad
  {
    id: 40,
    text: "Du stehst vor einer Tür. In der Mitte der Tür befindet sich ein Schlüsselloch in Tropfenform. Du erinnerst dich an den blauen Schlüssel, den du gefunden hast.",
    options: [
      {
        text: "Die Tür mit dem Schlüssel öffnen",
        requiredInventory: (inventory) => inventory.bluekey,
        nextText: 50,
      },
      { text: "Die Tür eintreten", nextText: 60 },
      { text: "Zurück zum Turm", nextText: 10 },
    ],
  },
  // Tür mit Schlüssel geöffnet
  {
    id: 50,
    text: "Du öffnest die Tür mit dem blauen Schlüssel. Dahinter erstreckt sich ein Raum mit glänzenden Kristallen an den Wänden.",
    options: [{ text: "Weiter erkunden", nextText: 70 }],
  },
  // Raum mit Kristallen
  {
    id: 70,
    text: "Du findest einen leuchtenden Kristall in der Mitte des Raums. Er scheint magische Energie auszustrahlen.",
    options: [
      {
        text: "Den Kristall berühren",
        setInventory: { magicCrystal: true },
        nextText: 80,
      },
      { text: "Den Raum verlassen", nextText: 90 },
    ],
  },
  // Kristall berührt
  {
    id: 80,
    text: "Du spürst eine Welle magischer Energie. Der Kristall verschwindet, aber du fühlst, dass er dir magische Fähigkeiten verliehen hat.",
    options: [{ text: "Weiter", nextText: 90 }],
  },
  // Ende des Turmpfads
  {
    id: 90,
    text: "Du hast den Turm erforscht und magische Fähigkeiten erlangt. Deine Reise in Arkanum-Terra setzt sich fort.",
    options: [{ text: "Neues Abenteuer beginnen", nextText: 1 }],
  },
  // Pfad der Dunklen Umgebung
  {
    id: 101,
    text: "Willkommen zurück in der Dunklen Umgebung. Der finstere Wald umgibt dich, und düstere Geräusche erfüllen die Luft.",
    options: [{ text: "Weiter", nextText: 110 }],
  },
  {
    id: 110,
    text: "Du gehst tiefer in den Wald. Plötzlich hörst du leise Stimmen und siehst Lichter in der Ferne.",
    options: [
      { text: "Dem Licht folgen", nextText: 120 },
      {
        text: "Den Pfad verlassen und einen anderen Weg suchen",
        nextText: 130,
      },
    ],
  },
  {
    id: 120,
    text: "Du folgst dem Licht und triffst auf eine Gruppe Überlebender, die um ein Lagerfeuer sitzen.",
    options: [
      {
        text: "Sich nähern und sich vorstellen",
        setCharacter: { ally: "Survivor Group" },
        nextText: 140,
      },
      { text: "Weiter durch den Wald gehen", nextText: 150 },
    ],
  },
  {
    id: 130,
    text: "Du verlässt den Pfad und findest einen versteckten Weg durch das Unterholz. Plötzlich stehst du vor einer feindlichen Gruppe.",
    options: [
      { text: "Versuchen, unbemerkt vorbeizukommen", nextText: 140 },
      { text: "Mit der feindlichen Gruppe verhandeln", nextText: 160 },
    ],
  },
  {
    id: 140,
    text: "Deine Entscheidungen haben dich zu neuen Verbündeten geführt oder potenzielle Feinde geschaffen. Deine Reise in Arkanum-Terra setzt sich fort.",
    options: [{ text: "Neues Abenteuer beginnen", nextText: 1 }],
  },
  {
    id: 150,
    text: "Du gehst weiter durch den Wald und entdeckst einen geheimen Pfad, der zu einem verzauberten Ort führt.",
    options: [
      { text: "Dem Pfad folgen", nextText: 170 },
      {
        text: "Den Pfad ignorieren und tiefer in den Wald gehen",
        nextText: 180,
      },
    ],
  },
  {
    id: 160,
    text: "Deine Verhandlungen mit der feindlichen Gruppe haben zu einem Bündnis geführt. Gemeinsam zieht ihr weiter durch die Dunkle Umgebung.",
    options: [{ text: "Weiter", nextText: 140 }],
  },
  {
    id: 170,
    text: "Der geheime Pfad führt dich zu einem verzauberten Ort mit leuchtenden Pflanzen und mysteriösen Kreaturen.",
    options: [{ text: "Den Ort erkunden", nextText: 190 }],
  },
  {
    id: 180,
    text: "Du ignorierst den geheimen Pfad und wanderst tiefer in den Wald. Plötzlich triffst du auf eine mysteriöse Hexe.",
    options: [
      { text: "Mit der Hexe sprechen", nextText: 200 },
      { text: "Versuchen, die Hexe zu umgehen", nextText: 210 },
    ],
  },
  {
    id: 190,
    text: "Die verzauberte Umgebung hat deine magischen Fähigkeiten weiter verstärkt. Deine Reise in Arkanum-Terra setzt sich fort.",
    options: [{ text: "Neues Abenteuer beginnen", nextText: 1 }],
  },
  {
    id: 200,
    text: "Die Hexe enthüllt dir Geheimnisse über die Katastrophe und bietet an, dir magische Kenntnisse beizubringen.",
    options: [
      {
        text: "Von der Hexe lernen",
        setInventory: { magicKnowledge: true },
        nextText: 220,
      },
      { text: "Die Hexe ablehnen und weitergehen", nextText: 230 },
    ],
  },
  {
    id: 210,
    text: "Du versuchst, die Hexe zu umgehen, aber sie erkennt deine Anwesenheit und fordert ein Gespräch.",
    options: [{ text: "Mit der Hexe sprechen", nextText: 200 }],
  },
  {
    id: 220,
    text: "Die Hexe lehrt dich magische Künste, die deine Fähigkeiten erweitern. Deine Reise in Arkanum-Terra setzt sich fort.",
    options: [{ text: "Neues Abenteuer beginnen", nextText: 1 }],
  },
  {
    id: 230,
    text: "Du lehnst das Angebot der Hexe ab und setzt deine Reise in Arkanum-Terra fort.",
    options: [{ text: "Neues Abenteuer beginnen", nextText: 1 }],
  },
  // Pfad des Verzauberten Waldes
  {
    id: 201,
    text: "Willkommen zurück im Verzauberten Wald. Mystische Lichter erhellen die Baumkronen, und die Luft ist erfüllt von magischer Energie.",
    options: [{ text: "Weiter", nextText: 210 }],
  },
  {
    id: 210,
    text: "Du gehst tiefer in den Wald und entdeckst einen geheimnisvollen See, dessen Wasser leise glüht.",
    options: [
      {
        text: "Den See erkunden",
        setCharacter: { skillLevel: "Fortgeschritten" },
        nextText: 220,
      },
      { text: "Den Wald weiter erkunden", nextText: 230 },
    ],
  },
  {
    id: 220,
    text: "Du tauchst in den See ein und spürst, wie magische Energie deine Fähigkeiten stärkt.",
    options: [{ text: "Weiter erkunden", nextText: 230 }],
  },
  {
    id: 230,
    text: "Du wanderst weiter durch den Verzauberten Wald und stößt auf eine versiegelte Höhle.",
    options: [
      {
        text: "Die Höhle öffnen",
        requiredInventory: (inventory) => inventory.magicKnowledge,
        nextText: 240,
      },
      {
        text: "Die Höhle ignorieren und den Wald weiter erkunden",
        nextText: 250,
      },
    ],
  },
  {
    id: 240,
    text: "Durch deine magischen Kenntnisse gelingt es dir, die Höhle zu öffnen. Im Inneren findest du uralte Schriften und verlorene Artefakte.",
    options: [
      {
        text: "Die Schriften studieren",
        setInventory: { ancientScrolls: true },
        nextText: 260,
      },
      { text: "Den Wald weiter erkunden", nextText: 250 },
    ],
  },
  {
    id: 250,
    text: "Deine Reise durch den Verzauberten Wald hat deine magischen Fähigkeiten vertieft. Deine Reise in Arkanum-Terra setzt sich fort.",
    options: [{ text: "Neues Abenteuer beginnen", nextText: 1 }],
  },
  {
    id: 260,
    text: "Die uralten Schriften enthüllen Geheimnisse über die Katastrophe und verleihen dir tiefere Einsicht in die magischen Künste.",
    options: [{ text: "Weiter erkunden", nextText: 250 }],
  },
  // Pfad der Wissenssuche
  {
    id: 301,
    text: "Willkommen zurück bei der Suche nach Wissen. Du stehst vor der alten Bibliothek, die in den Ruinen einer Stadt versteckt ist.",
    options: [{ text: "Weiter", nextText: 310 }],
  },
];

export { textNodes, character };
