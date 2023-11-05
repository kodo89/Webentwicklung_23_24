/*Erstelle eine Funktion „pow“ die 2 Zahlenwerte als Parameter übergibt
Die Funktion soll den ersten Wert mit dem zweiten Wert potenzieren
Wurde kein zweiter Wert mitgegeben, dann wird automatisch die erste Zahl zum Quadrat genommen
*/

/*function pow (a, b = a){

    let potenz = a**b;

    return potenz;
}

console.log (pow (2,3));*/

let jahreszahl = prompt("Bitte geben sie eine Jahreszahl ein");

function leapYear() {
  if (jahreszahl % 4 == 0) {
    if (jahreszahl % 100 == 0) {
      if (jahreszahl % 400 == 0) {
        return "Wir haben ein schaltjahr";
      }
      return "Wir haben kein Schaltjahr";
    }
    return "Wir haben ein Schaltjahr";
  } else {
     return "Wir haben kein Schaltjahr";
  }
}
const output = leapYear(jahreszahl);
console.log(output);
