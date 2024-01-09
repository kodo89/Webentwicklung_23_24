// Mach dich mit der Node Doku vertraut 
// Erweitere die Datei um folgenden Text: „Hallo von [Dein Name]“

const fs = require('fs');
const data = "\nHallo von Marwa";

fs.appendFile('./message.txt', data, 'UTF-8',  function(err, data){
    if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });

