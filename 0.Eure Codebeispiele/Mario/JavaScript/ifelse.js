//Lies vom Nutzer eine Temperatur ein, nutze ein if/else-if/else um auszugeben, ob es kalt, angenehm oder heiß ist.
let temperatur = prompt("Gib die Temperatur ein!");


if (temperatur > 20) {
    alert("es ist warm")
} else if (temperatur > 40) {
    alert("es ist viel zu heiß")
} else{
    alert("es ist kalt")
}




//Lies einen einzelnen Buchstaben ein und gib aus, ob es ein Vokal oder Konsonant ist. Nutze dafür ein switch-case mit default case und fall-through.
let letter = prompt("Gib einen Buchstaben ein");


switch (letter.toLowerCase()){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Vokal");
        break;
    default:
        console.log("Konsonant: " + letter);   
}




//Lese 3 Zahlen vom Benutzer ein, und gib die größte davon zurück. Nutze dabei Ternäre Ausdrücke. 
let value1 = prompt("erste Zahl");
let value2 = prompt("zweite Zahl");
let value3 = prompt("dritte Zahl");


const highestNumber12 = value1 > value2 ? value1 : value2;
const highestNumber23 = value2 > value3 ? value2 : value3;

const highNumber = highestNumber12 > highestNumber23 ? highestNumber12 : highestNumber23;
alert("Highest number: " + highNumber);




  
//Lies eine Zahl vom Benutzer ein, und gebe aus, ob diese gerade, ungerade oder eine Kommazahl ist.

const value = prompt("Gib eine Zahl ein!");

if (value.indexOf('.') >= 0 && value % 2 === 0) {
    console.log("es ist eine gerade Kommazahl enthalten");
} else if (value.indexOf('.') >= 0 && value % 2 !== 0) {
    console.log("es ist eine ungerade Kommazahl enthalten");
} else if (value % 2 == 0) {
    console.log("gerade Ganzzahl")
} else if (value % 2 !== 0) {
    console.log("ungerade Ganzzahl")
}




