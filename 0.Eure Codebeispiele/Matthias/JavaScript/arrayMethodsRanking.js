const participants = [
    { name: 'Alice', points: 120 },
    { name: 'Bob', points: 80 },
    { name: 'Charlie', points: 95 },
    { name: 'David', points: 110 },
    { name: 'Eva', points: 60 }
  ];

//   Aufgaben:
// Verwende die forEach-Methode, um jeden Teilnehmer und seine Punktzahl auszugeben.
participants.forEach(element => console.log(element.points));
console.log("-------------------------------------");
// Verwende die map-Methode, um ein neues Array zu erstellen, das nur die Namen der Teilnehmer enthält.
const mappedArray = participants.map(element => element.name);
console.log(mappedArray.toString());
console.log("-------------------------------------");
// Verwende die filter-Methode, um ein neues Array zu erstellen, das nur die Teilnehmer enthält, die mehr als 100 Punkte haben.
const moreThan100Points = participants.filter(element => element.points > 100);
moreThan100Points.forEach(element => console.log(element.name));
console.log("-------------------------------------");
// Verwende die sort-Methode, um die Liste der Teilnehmer nach ihren Punktzahlen zu sortieren (aufsteigend).
const sortedArray = participants.sort((a, b) => a.points - b.points);
sortedArray.forEach(element => console.log(element.name + ": " + element.points));
console.log("-------------------------------------");
// Verwende die reverse-Methode, um die Liste in absteigender Reihenfolge zu sortieren.
participants.reverse();
participants.forEach(element => console.log(element.name + ": " + element.points));
// Gib die sortierte Rangliste aus, die sowohl den Namen als auch die Punktzahl jedes Teilnehmers enthält.