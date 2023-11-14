/*Erstelle eine Funktion „pow“ die 2 Zahlenwerte als Parameter übergibt
Die Funktion soll den ersten Wert mit dem zweiten Wert potenzieren
Wurde kein zweiter Wert mitgegeben, dann wird automatisch die erste Zahl zum Quadrat genommen
*/

let x = 2;
let y = 3;

function pow (x,y){
    const result = x**y;
    return result;
}
const myresult = pow(2,3);
console.log(myresult);