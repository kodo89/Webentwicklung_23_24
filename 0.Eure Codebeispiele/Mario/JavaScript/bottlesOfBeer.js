// Schreibe ein Programm bei dem der Benutzer eine Zahl über einen Prompt eingibt. 
// Als Ergebnis wird in einem Alert der Songtext “99 bottles of beer” ausgegeben. 
// Die Anzahl der Flaschen zu Beginn des Songtexts wird über die eingegebene Zahl bestimm
// Nutze dafür eine for loop!
// Beispiel Output: 21 bottles of beer on the wall, 21 bottles …..

let x = 99;



// 99 bottles of beer on the wall, 99 bottles of beer.
//Take one down and pass it aroung, 98 bottles of beer on the wall.



for (let index = x; index > 0; index--) {
    console.log(index+" bottles of beer on the wall, "+index+" bottles of beer.");
    console.log("Take one down and pass it around, "+(index-1)+" bottles of beer on the wall.");
    console.log(" ");
};




