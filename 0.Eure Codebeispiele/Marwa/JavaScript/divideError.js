// Schreibe eine Funktion die 2 Zahlen als Parameter übergibt und beide Zahlen miteinander dividiert (erste / zweite)
// Füge eine Fehlerbehandlung ein für den Fall dass:
// Anstelle von Zahlen, Strings übergeben wurden
// Die 2. Zahl die übergeben wurde = 0 (Division durch 0)


// Beispielaufrufe
divideNumbers(10, 2);   // Gültige Division
divideNumbers(5, 0);    // Ungültige Division, sollte einen Fehler auslösen
divideNumbers(8, 4);    // Gültige Division


let a = 4;
let b = 6;
// String let b = 'dsdSD'

function divideNumbers(a, b){
    try{
        if(b === 0){
            throw new Error("cannot divide by zero");
        }
         if(typeof a === 'string' || typeof b === 'string'){
            throw new Error('Both number need to be String')
        }
        return a / b;
    } catch (error) {
    console.log(error.message);
    }
}

divideNumbers(a, b);