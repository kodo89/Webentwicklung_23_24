//Lies vom Nutzer eine Temperatur ein, nutze ein if/else-if/else um auszugeben, ob es kalt, angenehm oder heiß ist.
let temperatur = prompt('Enter a Temperatur: ');

if(temperatur >= 30){
    alert('Heiß');
} else if(temperatur > 18 && temperatur < 30){
    alert('angenehm');
}else{
    alert('kalt')
}

//Lies einen einzelnen Buchstaben ein und gib aus, ob es ein Vokal oder Konsonant ist. Nutze dafür ein switch-case mit default case und fall-through.
let oneCharInput = prompt^('Enter a Character: ');

switch (oneCharInput){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":{
        alert("vocal");
        break;
    }
    default:{
        alert("consonant");
        break;
    }
}

//Lese 3 Zahlen vom Benutzer ein, und gib die größte davon zurück. Nutze dabei Ternäre Ausdrücke. 
let number1 = prompt("first Number out of 3: ");
let number2 = prompt("second Number out of 3: ");
let number3 = prompt("Third Number out of 3: ");

number1 > number2 && number1 > number3
? alert("biggest number enter you entered is: " + number1)
:number2 > number3
? alert("biggest number enter you entered is: " + number2)
: alert("biggest number enter you entered is: " + number3);

//Lies eine Zahl vom Benutzer ein, und gebe aus, ob diese gerade, ungerade oder eine Kommazahl ist.
let numberInput = prompt('Enter a number: ');

if(numberInput % 2 == 0){
    alert("Even number");
} else if(numberInput % 3 == 0){
    alert("Odd number");
} else{
    alert("decimal number");
}

