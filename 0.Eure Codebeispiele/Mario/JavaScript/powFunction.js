/*Erstelle eine Funktion „pow“ die 2 Zahlenwerte als Parameter übergibt
Die Funktion soll den ersten Wert mit dem zweiten Wert potenzieren
Wurde kein zweiter Wert mitgegeben, dann wird automatisch die erste Zahl zum Quadrat genommen
*/




let value1 = 2;
let value2 = 3;


let valueResult = pow(value1, value2)
console.log(valueResult);

let valueResult2 = pow(value1)
console.log(valueResult2);



function pow(v1, v2 = 2){
    let value3;
    value3 = v1**v2;
    return value3;
}






