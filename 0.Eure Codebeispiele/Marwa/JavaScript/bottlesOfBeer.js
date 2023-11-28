// Schreibe ein Programm bei dem der Benutzer eine Zahl über einen Prompt eingibt. 
// Als Ergebnis wird in einem Alert der Songtext “99 bottles of beer” ausgegeben. 
// Die Anzahl der Flaschen zu Beginn des Songtexts wird über die eingegebene Zahl bestimm
// Nutze dafür eine for loop!
// Beispiel Output: 21 bottles of beer on the wall, 21 bottles …..

let bottles = prompt('Enter a number: ');
let lyrics = " ";

for (let i = bottles; i >= 0; i--) {
    if(i === 1){
        lyrics += i + " bottle of beer on the wall, " + i + " bottle of beer. Take it down and pass it around, no more bottles of beer on the wall.\n";
    } else if(i == 0){
        lyrics += "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.\n";
    } else {
        lyrics += i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i - 1) + " bottle of beer on the wall.\n";
    }
}

alert(lyrics);