//Lies vom Nutzer eine Temperatur ein, nutze ein if/else-if/else um auszugeben, ob es kalt, angenehm oder heiß ist.
//let ceslsius = prompt("Wie heiss ist es hier drinnen?");

if (ceslsius >= 20){
    console.log("Es ist war hier drinnen")
} else if (ceslsius < 20 ){
    console.log("Es ist etwas kühl hier drinnen")

} else if (ceslsius == 21){
    console.log("Es ist sehr angenehm hier hier")
}

//Lies einen einzelnen Buchstaben ein und gib aus, ob es ein Vokal oder Konsonant ist. Nutze dafür ein switch-case mit default case und fall-through.

let insertLetter = prompt("Gib einen Großbuchstaben ein!") 



switch (insertLetter){
    case 'A':
        console.log('das ist ein Vokal');
        break;
        case 'E':
        console.log('das ist ein Vokal');
        break;
        case 'I':
        console.log('das ist ein Vokal');
        break;
        case 'O':
        console.log('das ist ein Vokal');
        break;
        case 'U':
        console.log('das ist ein Vokal');
        
        case 'G':
            console.log('Das ist ein fall-through');
            break;

            default:
                console.log('Es ist ein Konsonant')
}

//Lese 3 Zahlen vom Benutzer ein, und gib die größte davon zurück. Nutze dabei Ternäre Ausdrücke. 

let inserNumber = prompt("Gib eine Zahl ein!");
let inserNumber2 = prompt("Gib eine Zahl ein!"); 
let inserNumber3 = prompt("Gib eine Zahl ein!"); 

inserNumber > inserNumber2 && inserNumber > inserNumber3
  ? alert("biggest number you entered is:" + inserNumber)
  : inserNumber2 > inserNumber3
  ? alert("biggest number you entered is:" + inserNumber2)
  : alert("biggest number you entered is:" + inserNumber3);


  
//Lies eine Zahl vom Benutzer ein, und gebe aus, ob diese gerade, ungerade oder eine Kommazahl ist.

   