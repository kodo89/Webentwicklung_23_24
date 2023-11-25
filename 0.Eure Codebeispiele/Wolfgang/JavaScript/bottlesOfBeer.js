// Schreibe ein Programm bei dem der Benutzer eine Zahl über einen Prompt eingibt. 
// Als Ergebnis wird in einem Alert der Songtext “99 bottles of beer” ausgegeben. 
// Die Anzahl der Flaschen zu Beginn des Songtexts wird über die eingegebene Zahl bestimm
// Nutze dafür eine for loop!
// Beispiel Output: 21 bottles of beer on the wall, 21 bottles …..


let beer = prompt ("Please enter a Number between 1 -100");


for (i = beer; i>=0; i--){

console.log(i + " bottles of beer");
console.log(i-1 + "bottles of beer on the wall.")
}

