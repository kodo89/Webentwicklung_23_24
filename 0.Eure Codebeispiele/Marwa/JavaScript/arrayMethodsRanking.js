const participants = [
    { name: 'Alice', points: 120 },
    { name: 'Bob', points: 80 },
    { name: 'Charlie', points: 95 },
    { name: 'David', points: 110 },
    { name: 'Eva', points: 60 }
  ];

//   Aufgaben:
// Verwende die forEach-Methode, um jeden Teilnehmer und seine Punktzahl auszugeben.
participants.forEach(myFunction)
function myFunction(element, index, array){
  console.log(element.name)
};

// Verwende die map-Methode, um ein neues Array zu erstellen, das nur die Namen der Teilnehmer enthält.
 const namenArray = participants.map(element => element.name)
 console.log(namenArray);

// Verwende die filter-Methode, um ein neues Array zu erstellen, das nur die Teilnehmer enthält, die mehr als 100 Punkte haben.
const filteredPunkte = participants.filter(element => element.points > 100);
filteredPunkte.forEach(element => console.log(element.points));

// Verwende die sort-Methode, um die Liste der Teilnehmer nach ihren Punktzahlen zu sortieren (aufsteigend).
const sortedArray = participants.sort((a, b)  => a.points - b.points);
sortedArray.forEach(element => console.log(element.points));

// Verwende die reverse-Methode, um die Liste in absteigender Reihenfolge zu sortieren.
const sorted = participants.reverse((a, b) => a.points - b.points);
sorted.forEach(element => console.log(element.points));

// Gib die sortierte Rangliste aus, die sowohl den Namen als auch die Punktzahl jedes Teilnehmers enthält.
const rangList = participants.sort((a, b) => b.points - a.points);
participants.forEach(function(element, index) {
  console.log(`Rang ${index + 1}: ${element.name} - ${element.points} Points`);
});