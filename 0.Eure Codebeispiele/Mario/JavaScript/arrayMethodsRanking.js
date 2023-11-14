const participants = [
    { name: 'Alice', points: 120 },
    { name: 'Bob', points: 80 },
    { name: 'Charlie', points: 95 },
    { name: 'David', points: 110 },
    { name: 'Eva', points: 60 }
  ];



//   Aufgaben:
// Verwende die forEach-Methode, um jeden Teilnehmer und seine Punktzahl auszugeben.

participants.forEach((element, index) => console.log(index, element.name + " hat " + element.points + " Punkte!"));
console.log(" ");

// Verwende die map-Methode, um ein neues Array zu erstellen, das nur die Namen der Teilnehmer enthält.
const newArrayMap = participants.map(element => element.name);
console.log(newArrayMap);
console.log(" ");

// Verwende die filter-Methode, um ein neues Array zu erstellen, das nur die Teilnehmer enthält, die mehr als 100 Punkte haben.
const filteredArray = participants.filter(element => element.points > 100);
filteredArray.forEach((element, index) => console.log(index, element.name + " hat " + element.points + " Punkte!"));
console.log(" ");

// Verwende die sort-Methode, um die Liste der Teilnehmer nach ihren Punktzahlen zu sortieren (aufsteigend).
participants.sort((a, b) => a.points - b.points);
participants.forEach((element, index) => console.log(index, element.name + " hat " + element.points + " Punkte!"));
console.log(" ");

// Verwende die reverse-Methode, um die Liste in absteigender Reihenfolge zu sortieren.
participants.reverse();
participants.forEach((element, index) => console.log(index, element.name + " hat " + element.points + " Punkte!"));
console.log(" ");

// Gib die sortierte Rangliste aus, die sowohl den Namen als auch die Punktzahl jedes Teilnehmers enthält.
console.log("Fertige Rangliste:")
participants.forEach((element, index) => console.log(index, element.name + " hat " + element.points + " Punkte!"));

