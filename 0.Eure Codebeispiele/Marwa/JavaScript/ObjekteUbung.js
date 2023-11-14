//1. Definiere die Wochentage in einem Array, lese vom Nutzer eine Zahl von 1-7 ein und gib den entsprechenden Wochentag 
// aus dem Array aus.

const wochentage = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];

let num = prompt("Enter a Number: ");
if(num >= 1 && num <= 7){
    const wochentag = wochentage[num];
    console.log(`Der Wochentag ist ${wochentag}`);
}else {
    console.log("Keine Wochentage");
}

//2. Definiere ein Objekt mit diversen Daten eures lieblings Fahrzeugs (Auto, Motorrad, Fahrrad, ...), 
//dabei sollten verschiedene Datentypen verwendet werden. Gebt die Daten mit einem Template Literal schön formatiert aus.

const car = {
    brand: "Tesla",
    modell: "Model 3",
    baujahr: 2022,
    farben : ["red, white, black"],
}
console.log(`Mein Lieblingsauto ist ein ${car.brand}, ${car.modell}, das im Jahr ${car.baujahr} hergestellt wurde.`);
console.log(`Erhältlich in den Farben: ${car.farben.join(", ")}.`);

//3. Definiere die abgebildete Tabelle als zweidimensionales Array und lass den Benutzer eine Zeilen und Spaltennummer angeben,
// gib den gewünschten Wert aus.

const field = [
    ["Hans", "Müller", "22"],
    ["Georg", "Huber", "37"],
    ["Fritz", "Mayr", "19"],
];

let zeilenNummer = prompt("Bitte geben eine Zeilennummer ein: ");
let spaltenNummer = prompt("Bitte geben ein Spaltennummer ein: ");

alert(`${field[zeilenNummer][spaltenNummer]}`);

//4. Lege die selbe Tabelle als Array von Objekten an, wobei die Spaltennamen die Schlüssel in den Objekten darstellen. 
//Lass den Nutzer eine Zeilennummer und den Namen einer Spalte angeben, gib den gewünschten Wert aus.

const array = [
    {
        firstName : "Hans",
        lastName : "Müller",
        age : 22
    },
    {
        firstName : "Georg",
        lastName : "Huber",
        age : 37
    },
    {
        firstName : "Fritz",
        lastName : "Mayr",
        age : 19
    },

];

let zeilen = prompt("Bitte geben eine Zeilennummer ein: ");
let spalten= prompt("Bitte geben ein SpaltenName ein: ");

alert(`${array[zeilen][spalten]}`);
