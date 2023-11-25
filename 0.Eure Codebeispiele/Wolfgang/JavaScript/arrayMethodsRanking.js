const participants = [
    { name: 'Alice', points: 120 },
    { name: 'Bob', points: 80 },
    { name: 'Charlie', points: 95 },
    { name: 'David', points: 110 },
    { name: 'Eva', points: 60 }
  ];

//   Aufgaben:
// Verwende die forEach-Methode, um jeden Teilnehmer und seine Punktzahl auszugeben.
participants.forEach((element) => console.log(element.name , element.points));
// Verwende die map-Methode, um ein neues Array zu erstellen, das nur die Namen der Teilnehmer enthält.

const newparticipants = participants.map(element => element.name);
console.log(newparticipants.toString());
// Verwende die filter-Methode, um ein neues Array zu erstellen, das nur die Teilnehmer enthält, die mehr als 100 Punkte haben.
const filterparticipants = participants.filter(element => element.points > 100);
filterparticipants.forEach((element) => console.log(element.name , element.points));
// Verwende die sort-Methode, um die Liste der Teilnehmer nach ihren Punktzahlen zu sortieren (aufsteigend).
const sortparticipants = participants.sort((a, b) => a.points-b.points);

sortparticipants.forEach((element) => console.log(element.points, "Name: " + element.name));
// Verwende die reverse-Methode, um die Liste in absteigender Reihenfolge zu sortieren.

// Gib die sortierte Rangliste aus, die sowohl den Namen als auch die Punktzahl jedes Teilnehmers enthält.
const sortedOut = sortparticipants.forEach((element) => console.log("Name: " +element.name, "Points "+element.points));