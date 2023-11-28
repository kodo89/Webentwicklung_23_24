// Schreibe eine Funktion die 2 Zahlen als Parameter übergibt und beide Zahlen miteinander dividiert (erste / zweite)
// Füge eine Fehlerbehandlung ein für den Fall dass:
// Anstelle von Zahlen, Strings übergeben wurden
// Die 2. Zahl die übergeben wurde = 0 (Division durch 0)


// Beispielaufrufe
divideNumbers(10, 2);   // Gültige Division
divideNumbers(5, 0);    // Ungültige Division, sollte einen Fehler auslösen
divideNumbers(8, 4);    // Gültige Division


let x = 10;
let y = 0;


try{
    if(y === 0){
        throw new Error("Number to divide can´t be zero!");
    } else if(typeof(y) === "string" || typeof(x) === "string"){
        throw new Error("Divide by String is not possible!")}
} catch (error){
    console.log(error.message);
}

function divideNumbers(x,y){
    return x/y;

}

console.log(divideNumbers(x,y));




