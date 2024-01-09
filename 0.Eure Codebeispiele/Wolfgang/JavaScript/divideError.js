// Schreibe eine Funktion die 2 Zahlen als Parameter übergibt und beide Zahlen miteinander dividiert (erste / zweite)
// Füge eine Fehlerbehandlung ein für den Fall dass:
// Anstelle von Zahlen, Strings übergeben wurden
// Die 2. Zahl die übergeben wurde = 0 (Division durch 0)

// Beispielaufrufe

function divideNumbers(number1, number2) {
  try {


    let result;
    result = number1 / number2;



    if (typeof(number2) !== "number") {
        throw new Error("It must be a number");
    }else if(typeof(number1) !== "number"){
        throw new Error("It must be a number");
    }else if (number1 === 0){
        throw new Error("Die zahl darf nicht null sein bitte geben sie eine andere Zahl ein");
    }else if (number2 === 0){
        throw new Error("Die zahl darf nicht null sein bitte geben sie eine andere Zahl ein");
    }
  } catch (e) {
    console.log(e.message);
  }
}

divideNumbers(10, 2);
divideNumbers(5, 0); // Ungültige Division, sollte einen Fehler auslösen
divideNumbers(8, "l");
