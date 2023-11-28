// Schreibe eine Funktion die 2 Zahlen als Parameter übergibt und beide Zahlen miteinander dividiert (erste / zweite)
// Füge eine Fehlerbehandlung ein für den Fall dass:
// Anstelle von Zahlen, Strings übergeben wurden
// Die 2. Zahl die übergeben wurde = 0 (Division durch 0)

function divideNumbers(firstNumber, secondNumber) {
  try {
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      throw new Error("One of the parameters is not a number.");
    } else if (secondNumber === 0) {
      throw new Error("Division by 0 is not possible.");
    } else {
      console.log(firstNumber / secondNumber);
    }
  } catch (error) {
    console.error(error);
  }
}

// Beispielaufrufe
divideNumbers(10, 2); // Gültige Division
divideNumbers(5, 0); // Ungültige Division, sollte einen Fehler auslösen
divideNumbers(8, 4); // Gültige Division
