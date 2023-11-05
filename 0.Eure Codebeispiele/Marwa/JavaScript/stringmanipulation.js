/*Schreibe Code um den User über einen Prompt seinen Namen eingeben zu lassen Vor und Nachname Bsp: „max mustermann“
Manipuliere den String, dass unabhängig von der Art der Eingabe, der Name in einem Alert zurückgegeben wird, wobei die 
Anfangsbuchstaben von Vor und Nachname groß und der Rest klein geschrieben wird
Bsp: mAx mUSterMann wird zu Max Mustermann*/

/*let name = prompt("Bitte Namen eingeben:")

let positionOfLeerzeichen = name.indexOf(" ");
let vorname = name.slice(0, positionOfLeerzeichen);
let nachname = name.slice(positionOfLeerzeichen+1);

vorname = vorname[0].toUpperCase()+vorname.slice(1, positionOfLeerzeichen);
nachname = nachname[0].toUpperCase()+nachname.slice(1);

alert("Dein Name lautet: "+vorname+" "+nachname)
//Führe den Code im Browser Snippet Tool aus 
