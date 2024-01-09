// Mach dich mit der Node Doku vertraut 
// Schreibe ein Node Programm um eine Text Datei auszulesen und in der Konsole auszugeben

const fs = require('fs');

fs.readFile('./message.txt', 'UTF-8',  (err, data)  =>{
    if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });