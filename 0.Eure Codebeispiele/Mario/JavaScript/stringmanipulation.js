/*Schreibe Code um den User über einen Prompt seinen Namen eingeben zu lassen Vor und Nachname Bsp: „max mustermann“
Manipuliere den String, dass unabhängig von der Art der Eingabe, der Name in einem Alert zurückgegeben wird, wobei die 
Anfangsbuchstaben von Vor und Nachname groß und der Rest klein geschrieben wird
Bsp: mAx mUSterMann wird zu Max Mustermann*/


//Führe den Code im Browser Snippet Tool aus 


let name = prompt("Bitte gib deinen gesamten Namen ein");
let stringLength = name.length;
console.log(stringLength);


let position = name.indexOf(" ");
console.log(position);

let firstLetter = name.slice(0, 1);
console.log(firstLetter);
let firstLetterBIG = firstLetter.toUpperCase();


let firstName = name.slice(1, position);
let firstNameSmall = firstName.toLowerCase();
console.log(firstLetterBIG+firstNameSmall);




let secondLetter = name.slice(position, position+2);
let secondLetterBIG = secondLetter.toUpperCase();



let secondName = name.slice(position+2, stringLength);
let secondNameSmall = secondName.toLowerCase();
console.log(secondLetterBIG+secondNameSmall);



console.log(firstLetterBIG+firstNameSmall+secondLetterBIG+secondNameSmall)


let yourName = "Dein Name ist: "
alert(yourName+firstLetterBIG+firstNameSmall+secondLetterBIG+secondNameSmall)



