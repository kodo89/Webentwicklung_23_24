// Mach dich mit der Node Doku vertraut 
// Erweitere die Datei um folgenden Text: „Hallo von [Dein Name]“

var fs = require('fs');var data = "\nHallo von ajsdlkasjd!";
// append data to file
fs.appendFile('message.txt',data, 'utf8',
// callback function
function(err) {
    if (err) throw err;
// if no error
console.log("Data is appended to file successfully!")
});