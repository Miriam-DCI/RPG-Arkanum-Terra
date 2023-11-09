/*
  TODO:
  funktion zum tausch des bg-img
  array aus dateipfade die sich je nach text-id anpassen 
  state abfragen
  hintergrundbilder funktionieren aktuell nicht weil DOM fehlt
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
  audioElement.play();
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
    //bgImg: setBgImg(bgImgPathArray[1]),
    text: "Du stehst am Anfang einer alten Steinbrücke, umgeben von dichtem Wald. Vor dir erhebt sich ein mysteriöser Turm, dessen Spitze von den Baumwipfeln verdeckt wird. Auf der linken Seite entdeckst du eine versteckte Treppe im Schatten der Bäume. Was willst du tun?",
    options: [
      { text: "Zum Turm gehen", nextText: 2 },
      { text: "Die Treppe untersuchen", nextText: 3 },
      { text: "Den Wald erkunden", nextText: 4 },
    ],
  },
  {
    id: 2,
    text: "Du kommst am Turm an. Die Tür des Turms ist verschlossen, aber du hörst seltsame Geräusche von drinnen. Was willst du tun?",
    options: [
      { text: "An die Tür klopfen", nextText: 5 },
      { text: "Zurück zur Brücke", nextText: 1 },
      { text: "Die Treppe benutzen", nextText: 6 },
    ],
  },
  {
    id: 3,
    text: "Die Treppe führt dich zu einer versteckten Plattform, von der aus du einen besseren Blick auf den Wald hast. Plötzlich siehst du bewegte Schatten und hörst merkwürdige Geräusche unter dir. Was möchtest du tun?",
    options: [
      { text: "Zurück zur Brücke", nextText: 1 },
      { text: "Dem Geräusch folgen", nextText: 7 },
      { text: "Einen Stein werfen", nextText: 8 },
    ],
  },
  {
    id: 5,
    text: "Nachdem du an die Tür geklopft hast, öffnet sie sich langsam. Ein alter Mann mit einem zerlumpten Umhang steht vor dir. 'Ah, endlich jemand Neues. Du musst mir helfen. Mein Buch wurde gestohlen. Findest du es für mich?' Er deutet auf den Wald. Was wirst du tun?",
    options: [
      { text: "Das Buch suchen", nextText: 9 },
      {
        text: "Dem alten Mann nicht trauen und den Wald erkunden",
        nextText: 4,
      },
    ],
  },
  {
    id: 6,
    text: "Die Treppe führt dich zu einer geheimen Kammer unter der Brücke. Hier entdeckst du eine versteckte Truhe. Möchtest du die Truhe öffnen?",
    options: [
      { text: "Ja", nextText: 10 },
      { text: "Nein, zur Brücke zurückkehren", nextText: 1 },
    ],
  },
  {
    id: 7,
    text: "Du folgst dem Geräusch und entdeckst eine Gruppe friedlicher Wesen. Sie haben dich bemerkt und laden dich ein, ihrer Gemeinschaft beizutreten. Akzeptierst du ihre Einladung?",
    options: [
      { text: "Ja, der Gemeinschaft beitreten", nextText: 11 },
      { text: "Nein, zur Brücke zurückkehren", nextText: 1 },
    ],
  },
  {
    id: 8,
    text: "Du wirfst einen Stein in die Richtung des Geräuschs. Plötzlich tauchen feindliche Kreaturen auf! Möchtest du kämpfen oder fliehen?",
    options: [
      { text: "Kämpfen", nextText: 12 },
      { text: "Fliehen zur Brücke", nextText: 1 },
    ],
  },
  {
    id: 9,
    text: "Du machst dich auf die Suche nach dem gestohlenen Buch. Tief im Wald entdeckst du eine Höhle. Gehst du hinein?",
    options: [
      { text: "Ja, die Höhle betreten", nextText: 13 },
      { text: "Nein, zum Turm zurückkehren", nextText: 2 },
    ],
  },
  {
    id: 10,
    text: "Die Truhe enthält einen magischen Kristall. Du spürst, wie sich eine neue Kraft in dir entfaltet. Erhältst du die Fähigkeit der Telekinese. Möchtest du deine neue Kraft testen?",
    options: [
      { text: "Ja, Telekinese anwenden", nextText: 14 },
      { text: "Nein, zur Brücke zurückkehren", nextText: 1 },
    ],
  },
  {
    id: 11,
    text: "Du schließt dich der Gemeinschaft an und lernst, deine Fähigkeiten zu verbessern. Die Wesen gewähren dir Zugang zu einer alten Bibliothek. Hier könntest du mehr über die Mysteriöse Katastrophe erfahren. Möchtest du in der Bibliothek nach Informationen suchen?",
    options: [
      { text: "Ja, die Bibliothek erkunden", nextText: 15 },
      { text: "Nein, zur Brücke zurückkehren", nextText: 1 },
    ],
  },
  {
    id: 12,
    text: "Du kämpfst tapfer gegen die feindlichen Kreaturen. Nach dem Sieg entdeckst du eine geheime Höhle. Möchtest du die Höhle erkunden?",
    options: [
      { text: "Ja, die Höhle betreten", nextText: 16 },
      { text: "Nein, zur Brücke zurückkehren", nextText: 1 },
    ],
  },
  {
    id: 13,
    text: "In der Höhle findest du das gestohlene Buch, das von merkwürdigen Symbolen und alten Schriften geprägt ist. Als du es berührst, spürst du eine Verbindung zu einer vergangenen Zeit. Möchtest du mehr über die Geschichte des Buches erfahren?",
    options: [
      { text: "Ja, die Geschichte des Buches erkunden", nextText: 17 },
      { text: "Nein, zur Brücke zurückkehren", nextText: 1 },
    ],
  },
  {
    id: 14,
    text: "Du versuchst, mit deiner neuen Telekinese-Fähigkeit einen alten Baumstamm zu bewegen. Plötzlich öffnet sich eine verborgene Höhle. Möchtest du die Höhle betreten?",
    options: [
      { text: "Ja, die Höhle erkunden", nextText: 18 },
      { text: "Nein, zur Brücke zurückkehren", nextText: 1 },
    ],
  },
  {
    id: 15,
    text: "In der Bibliothek findest du Informationen über die Mysteriöse Katastrophe. Es wird klar, dass die Kräfte, die den Menschen verliehen wurden, Teil eines größeren Plans sind. Du könntest dich entscheiden, die Informationen zu teilen oder für dich zu behalten. Was willst du tun?",
    options: [
      { text: "Die Informationen teilen", nextText: 19 },
      { text: "Die Informationen für dich behalten", nextText: 20 },
    ],
  },
  {
    id: 16,
    text: "Die Höhle ist voller wertvoller Ressourcen. Du kannst entscheiden, ob du sie für dich behalten oder mit anderen teilen möchtest. Was wirst du tun?",
    options: [
      { text: "Die Ressourcen für dich behalten", nextText: 21 },
      { text: "Die Ressourcen mit anderen teilen", nextText: 22 },
    ],
  },

  {
    id: 17,
    text: "Du erfährst, dass das Buch eine Verbindung zu einer uralten Zivilisation hat, die einst über übernatürliche Kräfte verfügte. Es enthält Wissen über eine mächtige Energiequelle. Wie möchtest du mit diesem Wissen umgehen?",
    options: [
      { text: "Die Energiequelle suchen", nextText: 23 },
      { text: "Dem alten Mann zurückgeben", nextText: 24 },
      { text: "Das Wissen geheim halten", nextText: 25 },
    ],
  },
  {
    id: 18,
    text: "Die Höhle ist mit antiken Artefakten gefüllt. Du kannst entscheiden, ob du sie für deine eigenen Zwecke verwenden oder der Gemeinschaft geben möchtest. Was wirst du tun?",
    options: [
      { text: "Die Artefakte für dich behalten", nextText: 26 },
      { text: "Die Artefakte der Gemeinschaft geben", nextText: 27 },
    ],
  },
  {
    id: 19,
    text: "Die Menschen reagieren unterschiedlich auf die Enthüllung. Einige sehen die Kräfte als Hoffnung, andere als Bedrohung. Du könntest zu einer Schlüsselfigur im Konflikt werden. Wie wirst du mit dieser Verantwortung umgehen?",
    options: [
      { text: "Für Harmonie und Zusammenarbeit eintreten", nextText: 28 },
      { text: "Macht für persönlichen Nutzen nutzen", nextText: 29 },
    ],
  },
  {
    id: 20,
    text: "Du entscheidest, das Wissen für dich zu behalten. Dies könnte Konsequenzen für die Menschen haben, die nach Antworten suchen. Wie möchtest du mit den Konsequenzen umgehen?",
    options: [
      { text: "Verantwortung übernehmen und helfen", nextText: 30 },
      { text: "Die Konsequenzen ignorieren", nextText: 31 },
    ],
  },
  {
    id: 21,
    text: "Du entscheidest dich, die Ressourcen für dich zu behalten. Dein Wohlstand steigt, aber andere leiden unter Ressourcenmangel. Wie wirst du mit den zunehmenden Spannungen umgehen?",
    options: [
      { text: "Versuch, Frieden zu vermitteln", nextText: 32 },
      { text: "Verteidige deinen Besitz", nextText: 33 },
    ],
  },
  {
    id: 22,
    text: "Du teilst die Ressourcen großzügig mit anderen. Dein Handeln wird von vielen geschätzt, aber es gibt auch diejenigen, die versuchen, deinen Einfluss zu untergraben. Wie wirst du reagieren?",
    options: [
      { text: "Versuch, Konflikte zu lösen", nextText: 34 },
      { text: "Verteidige deine Großzügigkeit", nextText: 35 },
    ],
  },
  {
    id: 23,
    text: "Die Suche nach der Energiequelle führt dich zu einem versteckten Ort im Herzen des Waldes. Hier könntest du entscheiden, wie die Energiequelle genutzt wird. Wie wirst du sie verwenden?",
    options: [
      { text: "Für das Wohl aller einsetzen", nextText: 36 },
      { text: "Macht für persönliche Zwecke nutzen", nextText: 37 },
    ],
  },
  {
    id: 24,
    text: "Du bringst das gestohlene Buch dem alten Mann zurück. Er ist dankbar und verspricht, dir bei Bedarf zu helfen. Du könntest ihn später um Unterstützung bitten. Wie möchtest du weitermachen?",
    options: [
      { text: "Um Hilfe bitten", nextText: 38 },
      { text: "Selbstständig weiter erkunden", nextText: 39 },
    ],
  },
  {
    id: 25,
    text: "Du entscheidest dich, das Wissen über die Mysteriöse Katastrophe geheim zu halten. Dies schafft eine Aura des Mysteriums um dich herum, aber es gibt Leute, die nach Antworten suchen. Wie wirst du mit denen umgehen, die nach Wahrheit suchen?",
    options: [
      { text: "Teile selektive Informationen", nextText: 40 },
      { text: "Halte das Geheimnis aufrecht", nextText: 41 },
    ],
  },
  {
    id: 26,
    text: "Du behältst die antiken Artefakte für dich. Sie verleihen dir immense Macht, aber andere beginnen, dich als Bedrohung zu betrachten. Wie wirst du mit den wachsenden Ängsten umgehen?",
    options: [
      { text: "Versuch, Vertrauen aufzubauen", nextText: 42 },
      { text: "Zeig deine Macht, um zu herrschen", nextText: 43 },
    ],
  },
  {
    id: 27,
    text: "Du entscheidest dich, die Artefakte der Gemeinschaft zu geben. Sie nutzen die Artefakte, um ihre Fähigkeiten zu verstärken und die Gemeinschaft zu stärken. Wie wirst du deine Rolle in dieser Gemeinschaft gestalten?",
    options: [
      { text: "Führungsposition übernehmen", nextText: 44 },
      { text: "Im Hintergrund unterstützen", nextText: 45 },
    ],
  },
  {
    id: 28,
    text: "Du setzt dich für Harmonie und Zusammenarbeit ein. Dies macht dich zu einer respektierten Figur, aber es gibt immer noch Leute, die nach persönlicher Macht streben. Wie wirst du mit diesen Ambitionen umgehen?",
    options: [
      { text: "Versuch, sie zu integrieren", nextText: 46 },
      { text: "Konfrontiere die Ambitionierten", nextText: 47 },
    ],
  },
  {
    id: 29,
    text: "Du entscheidest dich, die Macht für persönlichen Nutzen zu nutzen. Dein Einfluss wächst, aber du wirst zu einer umstrittenen Figur. Wie wirst du mit denen umgehen, die gegen deine Macht aufbegehren?",
    options: [
      { text: "Unterdrückung und Kontrolle", nextText: 48 },
      { text: "Versuch, ihre Loyalität zu gewinnen", nextText: 49 },
    ],
  },
  {
    id: 30,
    text: "Du entscheidest dich, Verantwortung zu übernehmen und zu helfen. Dies macht dich zu einer respektierten Figur, aber es gibt immer noch skeptische Stimmen. Wie wirst du mit der Skepsis umgehen?",
    options: [
      { text: "Zeig durch Taten deine Absichten", nextText: 50 },
      { text: "Ignoriere die Zweifel", nextText: 51 },
    ],
  },
  {
    id: 31,
    text: "Du ignorierst die Konsequenzen deiner Entscheidung und fährst fort, deine eigenen Ziele zu verfolgen. Das könnte zu Unruhen führen. Wie wirst du mit den wachsenden Unruhen umgehen?",
    options: [
      { text: "Schlag nieder und bestrafe", nextText: 52 },
      { text: "Suche nach diplomatischen Lösungen", nextText: 53 },
    ],
  },
  {
    id: 32,
    text: "Du versuchst, Frieden zu vermitteln. Es gibt Menschen, die deine Bemühungen unterstützen, aber es gibt auch Widerstand. Wie wirst du mit denen umgehen, die gegen den Frieden sind?",
    options: [
      { text: "Verhandlungen führen", nextText: 54 },
      { text: "Härtere Maßnahmen ergreifen", nextText: 55 },
    ],
  },
  {
    id: 33,
    text: "Du verteidigst deinen Besitz und zeigst Stärke. Das beruhigt vorübergehend die Spannungen, aber einige könnten eine Gelegenheit sehen, gegen dich vorzugehen. Wie wirst du mit möglichen Bedrohungen umgehen?",
    options: [
      { text: "Proaktive Maßnahmen ergreifen", nextText: 56 },
      { text: "Diplomatische Lösungen suchen", nextText: 57 },
    ],
  },
  {
    id: 34,
    text: "Du versuchst, Konflikte zu lösen, und zeigst Verständnis für die Sorgen anderer. Das gewinnt dir viele Unterstützer, aber es gibt immer noch Unzufriedenheit. Wie wirst du mit denjenigen umgehen, die sich gegen deine Großzügigkeit wenden?",
    options: [
      { text: "Dialog suchen und überzeugen", nextText: 58 },
      { text: "Ignorieren und weitermachen", nextText: 59 },
    ],
  },
  {
    id: 35,
    text: "Du verteidigst deine Großzügigkeit und zeigst Entschlossenheit. Einige mögen das als Autorität sehen, andere als Unterdrückung. Wie wirst du mit denjenigen umgehen, die sich gegen dich auflehnen?",
    options: [
      { text: "Harte Linie beibehalten", nextText: 60 },
      { text: "Versuch, ihre Anliegen zu verstehen", nextText: 61 },
    ],
  },
  {
    id: 36,
    text: "Du entscheidest dich, die Energiequelle für das Wohl aller einzusetzen. Das bringt dir viel Respekt ein, aber es gibt Gruppen, die das als Bedrohung sehen. Wie wirst du mit den skeptischen Gruppen umgehen?",
    options: [
      { text: "Überzeugungsarbeit leisten", nextText: 62 },
      { text: "Verteidigung stärken", nextText: 63 },
    ],
  },
  {
    id: 37,
    text: "Du entscheidest dich, die Energiequelle für persönliche Zwecke zu nutzen. Deine Macht wächst, aber du wirst zu einer umstrittenen Figur. Wie wirst du mit denjenigen umgehen, die gegen deine Macht aufbegehren?",
    options: [
      { text: "Unterdrückung und Kontrolle", nextText: 64 },
      { text: "Versuch, ihre Loyalität zu gewinnen", nextText: 65 },
    ],
  },
  {
    id: 38,
    text: "Du bittest den alten Mann um Hilfe. Gemeinsam könnt ihr mehr über die Mysteriöse Katastrophe erfahren. Wirst du dem alten Mann vertrauen oder deine eigenen Pläne verfolgen?",
    options: [
      { text: "Dem alten Mann vertrauen", nextText: 66 },
      { text: "Eigene Pläne verfolgen", nextText: 67 },
    ],
  },
  {
    id: 39,
    text: "Du entscheidest dich, selbstständig weiter zu erkunden. Dein Weg führt dich zu neuen Orten und Herausforderungen. Wie wirst du mit den Unbekannten umgehen?",
    options: [
      { text: "Freundliche Annäherung", nextText: 68 },
      { text: "Misstrauisch sein", nextText: 69 },
    ],
  },
  {
    id: 40,
    text: "Du teilst selektive Informationen über die Mysteriöse Katastrophe. Das schafft Vertrauen, aber es gibt immer noch Unsicherheit. Wie wirst du mit denjenigen umgehen, die nach mehr Informationen suchen?",
    options: [
      { text: "Weitere Informationen preisgeben", nextText: 70 },
      { text: "Geheimnisse bewahren", nextText: 71 },
    ],
  },
  {
    id: 41,
    text: "Du hältst das Geheimnis um die Mysteriöse Katastrophe aufrecht. Das gibt dir Macht, aber es gibt Menschen, die die Wahrheit herausfinden wollen. Wie wirst du mit den Wahrheitssuchenden umgehen?",
    options: [
      {
        text: "Sie manipulieren, um von der Wahrheit abzubringen",
        nextText: 72,
      },
      { text: "Vorsichtige Enthüllung", nextText: 73 },
    ],
  },
  {
    id: 42,
    text: "Die Menschen beginnen, dich als Bedrohung zu sehen. Du versuchst, Vertrauen aufzubauen, aber es gibt Widerstand. Wie wirst du mit denjenigen umgehen, die sich gegen dich verschwören?",
    options: [
      { text: "Diplomatie und Versöhnung", nextText: 74 },
      { text: "Harte Maßnahmen ergreifen", nextText: 75 },
    ],
  },
  {
    id: 43,
    text: "Du zeigst deine Macht, um zu herrschen. Deine Dominanz beeindruckt einige, aber viele sehen dich als Unterdrücker. Wie wirst du mit den rebellierenden Gruppen umgehen?",
    options: [
      { text: "Brutale Unterdrückung", nextText: 76 },
      { text: "Verhandlungen führen", nextText: 77 },
    ],
  },
  {
    id: 44,
    text: "Du übernimmst die Führung der Gemeinschaft. Dein Einfluss wächst, aber es gibt interne Konflikte. Wie wirst du mit den internen Spannungen umgehen?",
    options: [
      { text: "Interne Reformen durchführen", nextText: 78 },
      { text: "Härtere Kontrolle", nextText: 79 },
    ],
  },
  {
    id: 45,
    text: "Du unterstützt die Gemeinschaft im Hintergrund. Deine Hilfe bleibt unerkannt, aber es gibt diejenigen, die nach deiner wahren Identität suchen. Wie wirst du mit den Neugierigen umgehen?",
    options: [
      { text: "Täuschung aufrechterhalten", nextText: 80 },
      { text: "Teilweise Enthüllung", nextText: 81 },
    ],
  },
  {
    id: 46,
    text: "Du versuchst, die Ambitionierten zu integrieren. Einige sehen deine Bemühungen positiv, aber andere betrachten dich als Schwächling. Wie wirst du mit den skeptischen Individuen umgehen?",
    options: [
      { text: "Stärke und Entschlossenheit zeigen", nextText: 82 },
      { text: "Durch Überzeugung gewinnen", nextText: 83 },
    ],
  },
  {
    id: 47,
    text: "Du konfrontierst die Ambitionierten und versuchst, ihre Pläne zu durchkreuzen. Das führt zu Spannungen. Wie wirst du mit denjenigen umgehen, die sich gegen deine Konfrontation wehren?",
    options: [
      { text: "Durch Verhandlungen einigen", nextText: 84 },
      { text: "Harte Strafen verhängen", nextText: 85 },
    ],
  },
  {
    id: 48,
    text: "Du unterdrückst die Widerständigen und kontrollierst mit eiserner Hand. Das festigt deine Macht, aber es gibt diejenigen, die im Verborgenen gegen dich arbeiten. Wie wirst du mit den Untergrundaktivitäten umgehen?",
    options: [
      { text: "Geheime Überwachung verstärken", nextText: 86 },
      { text: "Verhandlungen für Frieden führen", nextText: 87 },
    ],
  },
  {
    id: 49,
    text: "Du versuchst, die Loyalität der Widerständigen zu gewinnen und sie auf deine Seite zu ziehen. Einige könnten sich ergeben, aber andere bleiben misstrauisch. Wie wirst du mit den Hartnäckigen umgehen?",
    options: [
      { text: "Mit großzügigen Angeboten überzeugen", nextText: 88 },
      { text: "Harte Maßnahmen ergreifen", nextText: 89 },
    ],
  },
  {
    id: 50,
    text: "Du zeigst durch Taten deine Absichten, und das gewinnt das Vertrauen vieler. Es gibt jedoch immer noch Kritiker. Wie wirst du mit denjenigen umgehen, die deine Taten anzweifeln?",
    options: [
      { text: "Transparente Kommunikation", nextText: 90 },
      { text: "Ignorieren und weitermachen", nextText: 91 },
    ],
  },
  {
    id: 51,
    text: "Du ignorierst die Zweifel und fährst fort, deine eigenen Ziele zu verfolgen. Die Kritiker werden lauter. Wie wirst du mit denjenigen umgehen, die gegen deine Handlungen protestieren?",
    options: [
      { text: "Harte Maßnahmen gegen die Proteste", nextText: 92 },
      { text: "Dialog suchen und überzeugen", nextText: 93 },
    ],
  },
  {
    id: 52,
    text: "Du schlägst die Unruhen nieder und bestrafst die Aufrührer. Das schafft vorübergehend Ruhe, aber es gibt Menschen, die sich im Untergrund organisieren. Wie wirst du mit dem Widerstand umgehen?",
    options: [
      { text: "Stärkere Überwachung und Kontrolle", nextText: 94 },
      { text: "Amnesty und Verhandlungen anbieten", nextText: 95 },
    ],
  },
  {
    id: 53,
    text: "Du suchst nach diplomatischen Lösungen, um die Unruhen zu beenden. Einige sind bereit, zu verhandeln, andere bleiben hartnäckig. Wie wirst du mit denjenigen umgehen, die sich weigern, zu verhandeln?",
    options: [
      { text: "Durch Überzeugung zur Kooperation bewegen", nextText: 96 },
      { text: "Isolieren und isolieren lassen", nextText: 97 },
    ],
  },
  {
    id: 54,
    text: "Du führst Verhandlungen, um den Frieden zu sichern. Es gibt jedoch Radikale auf beiden Seiten, die gegen die Vereinbarungen verstoßen. Wie wirst du mit den Brüchen des Friedens umgehen?",
    options: [
      { text: "Harte Strafen für Verstöße", nextText: 98 },
      { text: "Weitere Verhandlungen und Kompromisse", nextText: 99 },
    ],
  },
  {
    id: 55,
    text: "Du nimmst härtere Maßnahmen gegen diejenigen, die gegen den Frieden sind. Das schüchtert einige ein, aber es gibt auch Widerstand. Wie wirst du mit denjenigen umgehen, die sich gegen deine Autorität auflehnen?",
    options: [
      { text: "Stärkere Repression und Kontrolle", nextText: 100 },
      { text: "Versuch, ihre Anliegen zu verstehen", nextText: 101 },
    ],
  },
  {
    id: 56,
    text: "Du ergreifst proaktive Maßnahmen gegen mögliche Bedrohungen. Das stärkt vorübergehend deine Position, aber es gibt Menschen, die deine Vorgehensweise kritisieren. Wie wirst du mit den Kritikern umgehen?",
    options: [
      { text: "Ignorieren und weitermachen", nextText: 102 },
      { text: "Dialog und Erklärung", nextText: 103 },
    ],
  },
  {
    id: 57,
    text: "Du suchst diplomatische Lösungen für mögliche Bedrohungen. Einige sind kooperativ, andere bleiben feindselig. Wie wirst du mit den unkooperativen Gruppen umgehen?",
    options: [
      { text: "Durch Überzeugung zur Kooperation bewegen", nextText: 104 },
      { text: "Isolation und Sanktionen", nextText: 105 },
    ],
  },
  {
    id: 58,
    text: "Du versuchst, die rebellierenden Gruppen durch Dialog zu beruhigen. Einige sind offen für Gespräche, andere bleiben unnachgiebig. Wie wirst du mit den hartnäckigen Widerständen umgehen?",
    options: [
      { text: "Versuch, ihre Anliegen zu verstehen", nextText: 106 },
      { text: "Harte Maßnahmen ergreifen", nextText: 107 },
    ],
  },
  {
    id: 59,
    text: "Du ignorierst die Unzufriedenheit und fährst fort, deinen Weg zu gehen. Das schafft vorübergehende Ruhe, aber die Spannungen könnten wieder aufbrechen. Wie wirst du mit der Möglichkeit neuer Konflikte umgehen?",
    options: [
      { text: "Stärkere Überwachung und Kontrolle", nextText: 108 },
      { text: "Maßnahmen für soziale Gerechtigkeit ergreifen", nextText: 109 },
    ],
  },
  {
    id: 60,
    text: "Du hältst an deiner harten Linie fest, um deinen Einfluss zu sichern. Einige folgen dir aus Furcht, andere sind entschlossen, sich dagegen zu wehren. Wie wirst du mit den Entschlossenen umgehen?",
    options: [
      { text: "Harte Bestrafungen für Widerstand", nextText: 110 },
      { text: "Versuch, ihre Loyalität zu gewinnen", nextText: 111 },
    ],
  },
  {
    id: 61,
    text: "Du versuchst, die skeptischen Individuen durch Überzeugung zu gewinnen. Einige sind offen für Veränderungen, andere bleiben hartnäckig. Wie wirst du mit den Unnachgiebigen umgehen?",
    options: [
      { text: "Durch hartnäckige Überzeugung beeindrucken", nextText: 112 },
      { text: "Toleranz und Akzeptanz fördern", nextText: 113 },
    ],
  },
  {
    id: 62,
    text: "Du leistest Überzeugungsarbeit bei den skeptischen Gruppen. Einige sind bereit, sich dir anzuschließen, andere bleiben misstrauisch. Wie wirst du mit den Misstrauischen umgehen?",
    options: [
      { text: "Beweise deiner guten Absichten zeigen", nextText: 114 },
      { text: "Ignorieren und weitermachen", nextText: 115 },
    ],
  },
  {
    id: 63,
    text: "Du stärkst deine Verteidigung gegen skeptische Gruppen. Das schafft Sicherheit, aber es gibt auch Befürchtungen in der Bevölkerung. Wie wirst du mit den Ängsten umgehen?",
    options: [
      { text: "Transparente Kommunikation für Aufklärung", nextText: 116 },
      { text: "Strenge Kontrolle zur Sicherheit", nextText: 117 },
    ],
  },
  {
    id: 64,
    text: "Du verstärkst die Geheimhaltung und manipulierst diejenigen, die nach der Wahrheit suchen. Das festigt deine Position, aber es gibt Menschen, die weiterhin nach Antworten suchen. Wie wirst du mit den hartnäckigen Wahrheitssuchenden umgehen?",
    options: [
      { text: "Intensivere Desinformationskampagnen", nextText: 118 },
      { text: "Teilweise Wahrheiten zulassen", nextText: 119 },
    ],
  },
  {
    id: 65,
    text: "Du versuchst, vorsichtig Informationen über die Mysteriöse Katastrophe preiszugeben. Das schafft Neugier, aber es gibt auch Skeptiker. Wie wirst du mit den Skeptikern umgehen?",
    options: [
      { text: "Überzeugende Beweise präsentieren", nextText: 120 },
      { text: "Ignorieren und weitermachen", nextText: 121 },
    ],
  },
  {
    id: 66,
    text: "Du vertraust dem alten Mann und folgst gemeinsam den Hinweisen zur Mysteriösen Katastrophe. Es gibt jedoch Gefahren auf dem Weg. Wie wirst du mit den unerwarteten Herausforderungen umgehen?",
    options: [
      { text: "Gemeinsam die Herausforderungen meistern", nextText: 122 },
      { text: "Eigenständig handeln", nextText: 123 },
    ],
  },
  {
    id: 67,
    text: "Du verfolgst weiterhin deine eigenen Pläne, unabhängig vom alten Mann. Du entdeckst geheime Orte und Artefakte. Wie wirst du diese Entdeckungen nutzen?",
    options: [
      { text: "Für das Wohl aller einsetzen", nextText: 124 },
      { text: "Macht für persönliche Zwecke nutzen", nextText: 125 },
    ],
  },
  {
    id: 68,
    text: "Du gehst freundlich auf die Unbekannten zu und versuchst, Frieden zu schließen. Einige sind kooperativ, andere bleiben feindselig. Wie wirst du mit den feindseligen Gruppen umgehen?",
    options: [
      { text: "Durch Überzeugung zur Kooperation bewegen", nextText: 126 },
      { text: "Verteidigung stärken", nextText: 127 },
    ],
  },
  {
    id: 69,
    text: "Du betrachtest die Unbekannten misstrauisch und behältst eine defensive Haltung bei. Einige könnten friedliche Absichten haben, andere könnten als Feinde betrachtet werden. Wie wirst du mit den möglichen Bedrohungen umgehen?",
    options: [
      { text: "Friedliche Annäherung versuchen", nextText: 128 },
      { text: "Harte Verteidigung aufrechterhalten", nextText: 129 },
    ],
  },
  {
    id: 70,
    text: "Du gibst weitere Informationen über die Mysteriöse Katastrophe preis. Das schafft Vertrauen, aber es gibt immer noch Zweifler. Wie wirst du mit den Zweiflern umgehen?",
    options: [
      { text: "Weitere Beweise und Erklärungen präsentieren", nextText: 130 },
      { text: "Ignorieren und weitermachen", nextText: 131 },
    ],
  },
  {
    id: 71,
    text: "Du bewahrst die Geheimnisse und enthüllst nur selektive Informationen. Das bewahrt die Mystik, aber es gibt diejenigen, die nach vollständiger Offenbarung verlangen. Wie wirst du mit den Drängenden umgehen?",
    options: [
      { text: "Strenge Geheimhaltung aufrechterhalten", nextText: 132 },
      { text: "Teilweise Offenlegung zulassen", nextText: 133 },
    ],
  },
  {
    id: 72,
    text: "Du manipulierst die Wahrheitssuchenden geschickt, um von der Wahrheit abzubringen. Das verschafft dir vorübergehend Ruhe, aber es gibt Menschen, die weiterhin hartnäckig nach Antworten suchen. Wie wirst du mit den Hartnäckigen umgehen?",
    options: [
      { text: "Intensive Desinformation verstärken", nextText: 134 },
      { text: "Teilweise Wahrheiten zulassen", nextText: 135 },
    ],
  },
  {
    id: 73,
    text: "Du wählst die vorsichtige Enthüllung von Informationen über die Mysteriöse Katastrophe. Das weckt Interesse, aber es gibt auch Kritiker. Wie wirst du mit den Kritikern umgehen?",
    options: [
      { text: "Transparente Kommunikation und Diskussion", nextText: 136 },
      { text: "Harte Maßnahmen gegen Kritiker", nextText: 137 },
    ],
  },
  {
    id: 74,
    text: "Du setzt auf Diplomatie und Versöhnung, um das Vertrauen der Menschen zurückzugewinnen. Einige sind kooperativ, andere bleiben misstrauisch. Wie wirst du mit den Misstrauischen umgehen?",
    options: [
      { text: "Durch konstante Bemühungen Vertrauen aufbauen", nextText: 138 },
      { text: "Härtere Maßnahmen gegen Skeptiker", nextText: 139 },
    ],
  },
  {
    id: 75,
    text: "Du ergreifst harte Maßnahmen gegen diejenigen, die sich gegen dich verschworen haben. Das festigt deine Position, aber es gibt auch Menschen, die deine Methoden verurteilen. Wie wirst du mit den Kritikern umgehen?",
    options: [
      { text: "Ignorieren und weitermachen", nextText: 140 },
      {
        text: "Transparente Erklärungen für deine Handlungen geben",
        nextText: 141,
      },
    ],
  },
  {
    id: 76,
    text: "Du entscheidest dich für brutale Unterdrückung, um rebellierende Gruppen zu zerschlagen. Das verschafft dir vorübergehend Ruhe, aber es gibt Menschen, die deine harte Hand verurteilen. Wie wirst du mit den Kritikern umgehen?",
    options: [
      { text: "Ignorieren und weitermachen", nextText: 142 },
      { text: "Rechtfertigung und Verteidigung", nextText: 143 },
    ],
  },
  {
    id: 77,
    text: "Du entscheidest dich für Verhandlungen, um die rebellierenden Gruppen zu besänftigen. Einige sind bereit zu kooperieren, andere bleiben unnachgiebig. Wie wirst du mit den Hartnäckigen umgehen?",
    options: [
      { text: "Durch Dialog zur Kooperation bewegen", nextText: 144 },
      { text: "Harte Maßnahmen gegen Unnachgiebige", nextText: 145 },
    ],
  },
  {
    id: 78,
    text: "Du führst interne Reformen durch, um die Spannungen in deiner Gemeinschaft zu mildern. Das schafft Veränderung, aber es gibt auch Widerstand. Wie wirst du mit den Widerständigen umgehen?",
    options: [
      { text: "Dialog und Kompromissbereitschaft", nextText: 146 },
      { text: "Harte Maßnahmen gegen die Widerständigen", nextText: 147 },
    ],
  },
  {
    id: 79,
    text: "Du verschärfst die Kontrolle, um interne Konflikte zu unterdrücken. Das festigt deine Position, aber es gibt Menschen, die sich gegen deine autoritären Methoden auflehnen. Wie wirst du mit den Aufständischen umgehen?",
    options: [
      { text: "Stärkere Repression und Überwachung", nextText: 148 },
      { text: "Durch Dialog zur Einigung bewegen", nextText: 149 },
    ],
  },
  {
    id: 80,
    text: "Du hältst die Täuschung aufrecht und bewahrst deine wahre Identität. Das schützt dich vor Neugierigen, aber es gibt Menschen, die deine wahre Natur entdecken wollen. Wie wirst du mit den Ermittlern umgehen?",
    options: [
      { text: "Intensive Desinformation gegen Ermittler", nextText: 150 },
      { text: "Teilweise Enthüllung gegenüber Ermittlern", nextText: 151 },
    ],
  },
  {
    id: 81,
    text: "Du entscheidest dich für teilweise Enthüllung und zeigst einen Teil deiner wahren Identität. Das weckt Interesse, aber es gibt auch Menschen, die mehr wissen wollen. Wie wirst du mit den Neugierigen umgehen?",
    options: [
      { text: "Weitere Informationen preisgeben", nextText: 152 },
      { text: "Mehrdeutigkeit bewahren", nextText: 153 },
    ],
  },
  {
    id: 82,
    text: "Du zeigst Stärke und Entschlossenheit gegenüber den skeptischen Individuen. Einige lassen sich überzeugen, andere bleiben misstrauisch. Wie wirst du mit den Misstrauischen umgehen?",
    options: [
      { text: "Durch Überzeugung zur Kooperation bewegen", nextText: 154 },
      { text: "Harte Maßnahmen gegen Skeptiker", nextText: 155 },
    ],
  },
  {
    id: 83,
    text: "Du versuchst, die skeptischen Individuen durch Überzeugung zu gewinnen. Einige sind offen für Veränderungen, andere bleiben unnachgiebig. Wie wirst du mit den Unnachgiebigen umgehen?",
    options: [
      { text: "Durch hartnäckige Überzeugung beeindrucken", nextText: 156 },
      { text: "Toleranz und Akzeptanz fördern", nextText: 157 },
    ],
  },
  {
    id: 84,
    text: "Du versuchst, durch Verhandlungen die Ambitionierten zu beruhigen. Einige sind bereit zu kooperieren, andere bleiben hartnäckig. Wie wirst du mit den Unnachgiebigen umgehen?",
    options: [
      { text: "Durch Dialog zur Kooperation bewegen", nextText: 158 },
      { text: "Harte Maßnahmen gegen die Hartnäckigen", nextText: 159 },
    ],
  },
  {
    id: 85,
    text: "Du verhängst harte Strafen gegen diejenigen, die sich gegen deine Konfrontation wehren. Das schüchtert einige ein, aber es gibt Menschen, die deine Methoden als zu drakonisch betrachten. Wie wirst du mit den Kritikern umgehen?",
    options: [
      { text: "Ignorieren und weitermachen", nextText: 160 },
      {
        text: "Transparente Erklärungen für deine Handlungen geben",
        nextText: 161,
      },
    ],
  },
  {
    id: 86,
    text: "Du verstärkst die geheime Überwachung, um gegen Untergrundaktivitäten vorzugehen. Das stärkt vorübergehend deine Position, aber es gibt Menschen, die sich gegen deine Überwachung wehren. Wie wirst du mit den Datenschützern umgehen?",
    options: [
      { text: "Härtere Überwachung trotz Widerstand", nextText: 162 },
      { text: "Teilweise Zugeständnisse an Datenschützer", nextText: 163 },
    ],
  },
  {
    id: 87,
    text: "Du entscheidest dich für Verhandlungen, um den Frieden mit den Untergrundaktivitäten zu sichern. Einige sind kooperativ, andere bleiben unnachgiebig. Wie wirst du mit den Unnachgiebigen umgehen?",
    options: [
      { text: "Durch Dialog zur Kooperation bewegen", nextText: 164 },
      { text: "Harte Maßnahmen gegen Unnachgiebige", nextText: 165 },
    ],
  },
  {
    id: 88,
    text: "Du versuchst, die Loyalität der Widerständigen zu gewinnen und sie auf deine Seite zu ziehen. Einige könnten sich ergeben, andere bleiben misstrauisch. Wie wirst du mit den Hartnäckigen umgehen?",
    options: [
      { text: "Mit großzügigen Angeboten überzeugen", nextText: 166 },
      { text: "Harte Maßnahmen gegen die Hartnäckigen", nextText: 167 },
    ],
  },
  {
    id: 89,
    text: "Du entscheidest dich für harte Maßnahmen gegen die Widerständigen, um sie zu unterdrücken. Das stärkt vorübergehend deine Position, aber es gibt Menschen, die deine Methoden als zu drakonisch betrachten. Wie wirst du mit den Kritikern umgehen?",
    options: [
      { text: "Ignorieren und weitermachen", nextText: 168 },
      {
        text: "Transparente Erklärungen für deine Handlungen geben",
        nextText: 169,
      },
    ],
  },
  {
    id: 90,
    text: "Du setzt auf transparente Kommunikation, um das Vertrauen der Menschen zu gewinnen. Einige sind überzeugt, andere zweifeln weiterhin an deinen Absichten. Wie wirst du mit den Zweiflern umgehen?",
    options: [
      { text: "Weitere Beweise und Erklärungen präsentieren", nextText: 170 },
      { text: "Ignorieren und weitermachen", nextText: 171 },
    ],
  },
  {
    id: 91,
    text: "Du ignorierst die Kritiker und fährst fort, deine Ziele zu verfolgen. Das stärkt vorübergehend deine Position, aber es gibt Menschen, die weiterhin Zweifel hegen. Wie wirst du mit den Zweiflern umgehen?",
    options: [
      { text: "Weitere Beweise und Erklärungen präsentieren", nextText: 172 },
      { text: "Ignorieren und weitermachen", nextText: 173 },
    ],
  },
  {
    id: 92,
    text: "Du entscheidest dich für harte Maßnahmen gegen die Protestierenden, um deine Autorität zu festigen. Das schafft vorübergehend Ruhe, aber es gibt Menschen, die deine repressiven Maßnahmen verurteilen. Wie wirst du mit den Kritikern umgehen?",
    options: [
      { text: "Ignorieren und weitermachen", nextText: 174 },
      { text: "Rechtfertigung und Verteidigung", nextText: 175 },
    ],
  },
  {
    id: 93,
    text: "Du suchst den Dialog mit den Protestierenden und versuchst, ihre Bedenken zu verstehen. Einige sind bereit zu verhandeln, andere bleiben hartnäckig. Wie wirst du mit den Unnachgiebigen umgehen?",
    options: [
      { text: "Durch Dialog zur Kooperation bewegen", nextText: 176 },
      { text: "Harte Maßnahmen gegen Unnachgiebige", nextText: 177 },
    ],
  },
  {
    id: 94,
    text: "Du verstärkst die Überwachung und Kontrolle, um potenzielle Aufstände zu verhindern. Das schafft vorübergehende Ruhe, aber es gibt Menschen, die sich gegen deine Überwachung wehren. Wie wirst du mit den Datenschützern umgehen?",
    options: [
      { text: "Härtere Überwachung trotz Widerstand", nextText: 178 },
      { text: "Teilweise Zugeständnisse an Datenschützer", nextText: 179 },
    ],
  },
  {
    id: 95,
    text: "Du bietest Amnesty und Verhandlungen an, um den Widerstand zu besänftigen. Einige sind bereit, zu kooperieren, andere bleiben unnachgiebig. Wie wirst du mit den Unnachgiebigen umgehen?",
    options: [
      { text: "Durch Dialog zur Kooperation bewegen", nextText: 180 },
      { text: "Harte Maßnahmen gegen Unnachgiebige", nextText: 181 },
    ],
  },
  {
    id: 96,
    text: "Du versuchst, die Unnachgiebigen durch Überzeugung zur Kooperation zu bewegen. Einige lassen sich überzeugen, andere bleiben hartnäckig. Wie wirst du mit den Hartnäckigen umgehen?",
    options: [
      { text: "Durch Dialog zur Kooperation bewegen", nextText: 182 },
      { text: "Harte Maßnahmen gegen Hartnäckige", nextText: 183 },
    ],
  },
  {
    id: 97,
    text: "Du isolierst und lässt die Unnachgiebigen in ihrer Position verharren. Das schafft vorübergehende Ruhe, aber es gibt Menschen, die gegen deine Entscheidungen protestieren. Wie wirst du mit den Protestierenden umgehen?",
    options: [
      { text: "Ignorieren und weitermachen", nextText: 184 },
      { text: "Rechtfertigung und Verteidigung", nextText: 185 },
    ],
  },
  {
    id: 98,
    text: "Du setzt auf harte Strafen für Verstöße gegen die Vereinbarungen. Das schafft vorübergehende Disziplin, aber es gibt Menschen, die gegen deine autoritären Methoden aufbegehren. Wie wirst du mit den Aufständischen umgehen?",
    options: [
      { text: "Ignorieren und weitermachen", nextText: 186 },
      {
        text: "Transparente Erklärungen für deine Handlungen geben",
        nextText: 187,
      },
    ],
  },
  {
    id: 99,
    text: "Du initiierst weitere Verhandlungen und Kompromisse, um den Frieden zu sichern. Einige sind bereit, zuzustimmen, andere bleiben unnachgiebig. Wie wirst du mit den Unnachgiebigen umgehen?",
    options: [
      { text: "Durch Dialog zur Kooperation bewegen", nextText: 188 },
      { text: "Harte Maßnahmen gegen Unnachgiebige", nextText: 189 },
    ],
  },
  {
    id: 100,
    text: "Du verstärkst die Repression und Kontrolle, um diejenigen zu unterdrücken, die gegen deine Autorität aufbegehren. Das schafft vorübergehende Ruhe, aber es gibt Menschen, die gegen deine repressiven Maßnahmen protestieren. Wie wirst du mit den Protestierenden umgehen?",
    options: [
      { text: "Ignorieren und weitermachen", nextText: 190 },
      { text: "Rechtfertigung und Verteidigung", nextText: 191 },
    ],
  },
  {
    id: 101,
    text: "Du versuchst, diejenigen zu verstehen, die sich gegen deine Autorität auflehnen. Einige haben legitime Anliegen, andere sind einfach gegen deine Führung. Wie wirst du mit den legitimen Anliegen umgehen?",
    options: [
      { text: "Maßnahmen für soziale Gerechtigkeit ergreifen", nextText: 192 },
      { text: "Harte Maßnahmen gegen Widerstand", nextText: 193 },
    ],
  },
  {
    id: 102,
    text: "Du ignorierst die Kritiker und fährst fort, deine Ziele zu verfolgen. Das stärkt vorübergehend deine Position, aber es gibt Menschen, die weiterhin gegen deine Entscheidungen protestieren. Wie wirst du mit den Protestierenden umgehen?",
    options: [
      { text: "Ignorieren und weitermachen", nextText: 194 },
      { text: "Rechtfertigung und Verteidigung", nextText: 195 },
    ],
  },
  {
    id: 103,
    text: "Du suchst den Dialog mit den Kritikern und versuchst, ihre Bedenken zu verstehen. Einige sind bereit zu verhandeln, andere bleiben hartnäckig. Wie wirst du mit den Hartnäckigen umgehen?",
    options: [
      { text: "Durch Dialog zur Kooperation bewegen", nextText: 196 },
      { text: "Harte Maßnahmen gegen Hartnäckige", nextText: 197 },
    ],
  },
  {
    id: 104,
    text: "Du entscheidest dich für eine harte Linie gegenüber den Unnachgiebigen, um deine Autorität zu festigen. Das schafft vorübergehend Ruhe, aber es gibt Menschen, die gegen deine autoritären Maßnahmen protestieren. Wie wirst du mit den Protestierenden umgehen?",
    options: [
      { text: "Ignorieren und weitermachen", nextText: 198 },
      { text: "Rechtfertigung und Verteidigung", nextText: 199 },
    ],
  },
  {
    id: 105,
    text: "Du suchst den Dialog mit den Protestierenden und versuchst, ihre Bedenken zu verstehen. Einige sind bereit zu verhandeln, andere bleiben unnachgiebig. Wie wirst du mit den Unnachgiebigen umgehen?",
    options: [
      { text: "Durch Dialog zur Kooperation bewegen", nextText: 200 },
      { text: "Harte Maßnahmen gegen Unnachgiebige", nextText: 201 },
    ],
  },
  {
    id: 106,
    text: "Du verschärfst die Überwachung und Kontrolle, um potenzielle Aufstände zu verhindern. Das schafft vorübergehende Ruhe, aber es gibt Menschen, die sich gegen deine Überwachung wehren. Wie wirst du mit den Datenschützern umgehen?",
    options: [
      { text: "Härtere Überwachung trotz Widerstand", nextText: 202 },
      { text: "Teilweise Zugeständnisse an Datenschützer", nextText: 203 },
    ],
  },
  {
    id: 107,
    text: "Du bietest Amnesty und Verhandlungen an, um den Widerstand zu besänftigen. Einige sind bereit, zu kooperieren, andere bleiben unnachgiebig. Wie wirst du mit den Unnachgiebigen umgehen?",
    options: [
      { text: "Durch Dialog zur Kooperation bewegen", nextText: 204 },
      { text: "Harte Maßnahmen gegen Unnachgiebige", nextText: 205 },
    ],
  },
  {
    id: 108,
    text: "Du versuchst, die Unnachgiebigen durch Überzeugung zur Kooperation zu bewegen. Einige lassen sich überzeugen, andere bleiben hartnäckig. Wie wirst du mit den Hartnäckigen umgehen?",
    options: [
      { text: "Durch Dialog zur Kooperation bewegen", nextText: 206 },
      { text: "Harte Maßnahmen gegen Hartnäckige", nextText: 207 },
    ],
  },
  {
    id: 109,
    text: "Du isolierst und lässt die Unnachgiebigen in ihrer Position verharren. Das schafft vorübergehende Ruhe, aber es gibt Menschen, die gegen deine Entscheidungen protestieren. Wie wirst du mit den Protestierenden umgehen?",
    options: [
      { text: "Ignorieren und weitermachen", nextText: 208 },
      { text: "Rechtfertigung und Verteidigung", nextText: 209 },
    ],
  },
  {
    id: 110,
    text: "Du setzt auf harte Strafen für Verstöße gegen die Vereinbarungen. Das schafft vorübergehende Disziplin, aber es gibt Menschen, die gegen deine autoritären Maßnahmen protestieren. Wie wirst du mit den Protestierenden umgehen?",
    options: [
      { text: "Ignorieren und weitermachen", nextText: 210 },
      {
        text: "Transparente Erklärungen für deine Handlungen geben",
        nextText: 211,
      },
    ],
  },
  {
    id: 111,
    text: "Du initiierst weitere Verhandlungen und Kompromisse, um den Frieden zu sichern. Einige sind bereit, zuzustimmen, andere bleiben unnachgiebig. Wie wirst du mit den Unnachgiebigen umgehen?",
    options: [
      { text: "Durch Dialog zur Kooperation bewegen", nextText: 212 },
      { text: "Harte Maßnahmen gegen Unnachgiebige", nextText: 213 },
    ],
  },
  {
    id: 112,
    text: "Du stößt auf hartnäckigen Widerstand bei den Unnachgiebigen. Einige sind offen für Veränderungen, andere bleiben hartnäckig. Wie wirst du mit den Unnachgiebigen umgehen?",
    options: [
      { text: "Durch hartnäckige Überzeugung beeindrucken", nextText: 214 },
      { text: "Toleranz und Akzeptanz fördern", nextText: 215 },
    ],
  },
  {
    id: 113,
    text: "Du stößt auf Misstrauen bei den Hartnäckigen. Einige sind bereit, sich dir anzuschließen, andere bleiben misstrauisch. Wie wirst du mit den Misstrauischen umgehen?",
    options: [
      { text: "Beweise deiner guten Absichten zeigen", nextText: 216 },
      { text: "Ignorieren und weitermachen", nextText: 217 },
    ],
  },
  {
    id: 114,
    text: "Die Widerständigen bleiben unnachgiebig. Du könntest versuchen, ihre Widerstandskraft zu brechen oder nach alternativen Lösungen suchen. Wie wirst du mit den Unnachgiebigen umgehen?",
    options: [
      { text: "Durch harte Maßnahmen Widerstand brechen", nextText: 218 },
      { text: "Nach diplomatischen Lösungen suchen", nextText: 219 },
    ],
  },
  {
    id: 115,
    text: "Die Skeptiker bleiben hartnäckig. Du könntest versuchen, sie zu überzeugen oder alternative Wege einschlagen. Wie wirst du mit den Hartnäckigen umgehen?",
    options: [
      { text: "Durch Überzeugung zur Kooperation bewegen", nextText: 220 },
      { text: "Alternative Lösungen suchen", nextText: 221 },
    ],
  },
  {
    id: 116,
    text: "Diejenigen, die gegen deine Pläne sind, formieren sich zu einer starken Opposition. Du könntest versuchen, ihre Unterstützung zu gewinnen oder härtere Maßnahmen ergreifen. Wie wirst du mit den Widerständigen umgehen?",
    options: [
      {
        text: "Durch politische Manöver Unterstützung gewinnen",
        nextText: 222,
      },
      { text: "Härtere Maßnahmen gegen die Opposition", nextText: 223 },
    ],
  },
  {
    id: 117,
    text: "Diejenigen, die gegen deine Pläne sind, gründen eine alternative Gruppierung. Du könntest versuchen, sie zu integrieren oder Maßnahmen ergreifen, um ihre Macht zu brechen. Wie wirst du mit den Alternativen umgehen?",
    options: [
      { text: "Durch Verhandlungen zur Integration bewegen", nextText: 224 },
      { text: "Härtere Maßnahmen gegen die Alternativen", nextText: 225 },
    ],
  },
  {
    id: 118,
    text: "Diejenigen, die gegen deine Pläne sind, verbreiten aktiv Misstrauen. Du könntest versuchen, ihre Glaubwürdigkeit zu untergraben oder Gegenmaßnahmen ergreifen. Wie wirst du mit den Misstrauischen umgehen?",
    options: [
      { text: "Durch gezielte Maßnahmen Misstrauen entkräften", nextText: 226 },
      { text: "Härtere Maßnahmen gegen die Misstrauischen", nextText: 227 },
    ],
  },
  {
    id: 119,
    text: "Diejenigen, die gegen deine Pläne sind, organisieren aktiven Widerstand. Du könntest versuchen, ihre Unterstützung zu gewinnen oder mit harter Hand gegen sie vorgehen. Wie wirst du mit den Widerständigen umgehen?",
    options: [
      {
        text: "Durch politische Manöver Unterstützung gewinnen",
        nextText: 228,
      },
      { text: "Härtere Maßnahmen gegen den Widerstand", nextText: 229 },
    ],
  },
  {
    id: 120,
    text: "Diejenigen, die gegen deine Pläne sind, gründen eine alternative Fraktion. Du könntest versuchen, ihre Loyalität zu gewinnen oder ihre Macht zu brechen. Wie wirst du mit den Alternativen umgehen?",
    options: [
      { text: "Durch Verhandlungen zur Integration bewegen", nextText: 230 },
      { text: "Härtere Maßnahmen gegen die Alternativen", nextText: 231 },
    ],
  },
  // Endknoten
  {
    id: 121,
    text: "Deine Geschichte endet hier. Du hast viele Herausforderungen gemeistert und Entscheidungen getroffen, die die Welt nach der mysteriösen Katastrophe geprägt haben. Dein Vermächtnis wird in den Annalen dieser neuen Ära festgehalten.",
    options: [],
  },
  {
    id: 122,
    text: "Deine Geschichte endet hier. Trotz deiner Bemühungen konntest du die verschiedenen Fraktionen und Gruppen nicht vereinen. Die Welt bleibt in einem angespannten Gleichgewicht zwischen Kooperation und Konflikten.",
    options: [],
  },
  {
    id: 123,
    text: "Deine Geschichte endet hier. Deine Entscheidungen haben zu internen Konflikten und Aufruhr geführt. Die Welt nach der mysteriösen Katastrophe bleibt uneinig und fragmentiert.",
    options: [],
  },
];

startGame();
