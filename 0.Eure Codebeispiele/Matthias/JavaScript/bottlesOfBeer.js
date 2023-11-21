// Schreibe ein Programm bei dem der Benutzer eine Zahl über einen Prompt eingibt. 
// Als Ergebnis wird in einem Alert der Songtext “99 bottles of beer” ausgegeben. 
// Die Anzahl der Flaschen zu Beginn des Songtexts wird über die eingegebene Zahl bestimmt
// Nutze dafür eine for loop!
// Beispiel Output: 21 bottles of beer on the wall, 21 bottles …..

let numOfBeers = 99;

for(let i = numOfBeers; i > 0; i--) {
    console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
    console.log("Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.");
    console.log();
}