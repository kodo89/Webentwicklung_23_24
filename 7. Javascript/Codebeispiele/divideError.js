
function divideNumbers(a, b) {
    try {
        // Versuche die Division
        if (b === 0) {
            throw new Error('Division durch Null ist nicht erlaubt.');
        }
        var result = a / b;
        console.log('Ergebnis der Division:', result);
    } catch (error) {
        // Behandlung von Fehlern
        console.error('Fehler aufgetreten:', error.message);
    }
}

// Beispielaufrufe
divideNumbers(10, 2);   // Gültige Division
divideNumbers(5, 0);    // Ungültige Division, sollte einen Fehler auslösen
divideNumbers(8, 4);    // Gültige Division
