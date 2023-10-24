/*Schreibe Code um den User über einen Prompt seinen Namen eingeben zu lassen Vor und Nachname Bsp: „max mustermann“
Manipuliere den String, dass unabhängig von der Art der Eingabe, der Name in einem Alert zurückgegeben wird, wobei die 
Anfangsbuchstaben von Vor und Nachname groß und der Rest klein geschrieben wird
Bsp: mAx mUSterMann wird zu Max Mustermann*/

let name = prompt("Enter your name:");

let newName = name.slice(0,1).toUpperCase();

let posOfSpace = name.indexOf(' ');

newName += name.slice(1, posOfSpace).toLowerCase() + ' ';
newName += name.slice(posOfSpace + 1, posOfSpace + 2).toUpperCase();
newName += name.slice(posOfSpace + 2).toLowerCase();

alert(newName);

//Führe den Code im Browser Snippet Tool aus 
