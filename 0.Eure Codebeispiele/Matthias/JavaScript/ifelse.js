//Lies vom Nutzer eine Temperatur ein, nutze ein if/else-if/else um auszugeben, ob es kalt, angenehm oder heiß ist.
let temperature = prompt("Temperature (°C): ");

if(temperature < -273) {
    alert("I don't think that's possible.");
} else if(temperature < 15) {
    alert("Brrr, it's cold!");
} else if(temperature < 28) {
    alert("Nice temperature.");
} else {
    alert("Quite hot in here!")
}

//Lies einen einzelnen Buchstaben ein und gib aus, ob es ein Vokal oder Konsonant ist. Nutze dafür ein switch-case mit default case und fall-through.
let letter = prompt("Letter: ");

switch(letter.toLocaleLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        alert("Vowel");
        break;
    default:
        alert("Consonant");
        break;
}

//Lese 3 Zahlen vom Benutzer ein, und gib die größte davon zurück. Nutze dabei Ternäre Ausdrücke. 
let num1 = prompt("Number 1:");
let num2 = prompt("Number 2:");
let num3 = prompt("Number 3:");

alert("Maximum: " + num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3));

//Lies eine Zahl vom Benutzer ein, und gebe aus, ob diese gerade, ungerade oder eine Kommazahl ist.
let number = prompt("Number: ");

if(number.indexOf('.') >= 0) {
    alert("Comma number");
}

if(number % 2 == 0) {
    alert("Even number");
} else {
    alert("Odd number");
}