


const car = {
    "marke" : "Scoda",
    "model" : "Octavia",
    "Ps"    : 110,
    "farbe" : "Silber"
}

console.log("Marke: "+car.marke);
console.log("Model: "+car.model);
console.log("PS: "+car.Ps);
console.log("Farbe: "+car.farbe);



let personData = [["Hans","Müller","22"],["Georg","huber", "37"],["Fritz","Mayr","19"]];

let userNumberRow = prompt("Bitte gebe sie eine Zahl zwischen 0 und 2 ein");

let userNumberColumn = prompt("Bitte geben sie eine Zahl zwischen 0 und 2 ein");

function ermittleDaten (x){

    return (x[userNumberRow][userNumberColumn]);

}

let anfrageErgebnis = ermittleDaten(personData);
console.log(anfrageErgebnis);





let userDataNumber = prompt ("Bitte geben sie eine Zahl zwischen 0 und 2 ein");
let userDataColumnName = prompt ("Bitte geben sie den Namen einer Spalte ein");


const dataFromPerson = {

firsname : [
    "Hans",
    "Georg",
    "Fritz"
],
lastname: [
    "Müller",
    "Huber",
    "Mayr"
],
age: [
    "22",
    "37",
    "19"
]

}


console.log(dataFromPerson[userDataColumnName][userDataNumber]);
