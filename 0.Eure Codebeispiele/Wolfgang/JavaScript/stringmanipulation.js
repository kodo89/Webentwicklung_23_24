/*Schreibe Code um den User über einen Prompt seinen Namen eingeben zu lassen Vor und Nachname Bsp: „max mustermann“
Manipuliere den String, dass unabhängig von der Art der Eingabe, der Name in einem Alert zurückgegeben wird, wobei die 
Anfangsbuchstaben von Vor und Nachname groß und der Rest klein geschrieben wird
Bsp: mAx mUSterMann wird zu Max Mustermann*/


//Führe den Code im Browser Snippet Tool aus 
let name = prompt(`bitte Namen eingeben`);

let leerzeichen = name.indexOf(" ");

let vorname = name[0].toUpperCase() +  name.slice(1,leerzeichen); 

let nachname = name[leerzeichen+1].toUpperCase()+name.slice(leerzeichen+2);  
             

alert(vorname+" "+nachname);
