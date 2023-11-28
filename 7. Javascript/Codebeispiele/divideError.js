<<<<<<< HEAD

function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error('Division durch Null ist nicht erlaubt.');
        }
        var result = a / b;
        console.log('Ergebnis der Division:', result);
    } catch (error) {
        console.error('Fehler aufgetreten:', error.message);
    }
}

// Beispielaufrufe
divideNumbers(10, 2);   // Gültige Division
divideNumbers(5, 0);    // Ungültige Division, sollte einen Fehler auslösen
divideNumbers(8, 4);    // Gültige Division
=======

function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error('Division durch Null ist nicht erlaubt.');
        }
        var result = a / b;
        console.log('Ergebnis der Division:', result);
    } catch (error) {
        console.error('Fehler aufgetreten:', error.message);
    }
}

// Beispielaufrufe
divideNumbers(10, 2);   // Gültige Division
divideNumbers(5, 0);    // Ungültige Division, sollte einen Fehler auslösen
divideNumbers(8, 4);    // Gültige Division
>>>>>>> 5035c211a284295ab1ae80c6f48d55efd43f6298
