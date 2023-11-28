
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error('Division durch Null ist nicht erlaubt.');
        }
        if(typeof(a)!=="number"||typeof(b)!=="number")
        {
            throw new Error("Mindestens einer der beiden Parameter ist keine Zahl")
        }
        var result = a / b;
        console.log('Ergebnis der Division:', result);
    } catch (error) {
        console.error('Fehler aufgetreten:', error.message);
    }
    console.log("Hallo")
}

// Beispielaufrufe
  // Ungültige Division, sollte einen Fehler auslösen
divideNumbers([1,2], 2);    // Gültige Division
