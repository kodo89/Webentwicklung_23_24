// Mach dich mit der Node Doku vertraut 
// Erweitere die Datei um folgenden Text: „Hallo von [Dein Name]“
// Schreibe ein Node Programm um eine Text Datei auszulesen und in der Konsole auszugeben
const fs = require('fs');

fs.appendFile('message.txt'," Wolfgang", "utf-8",(err, data) => {
  if (err) throw err ; 
  console.log('The "data to append" was appended to file!');
});