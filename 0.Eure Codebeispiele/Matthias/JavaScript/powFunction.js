/*Erstelle eine Funktion „pow“ die 2 Zahlenwerte als Parameter übergibt
Die Funktion soll den ersten Wert mit dem zweiten Wert potenzieren
Wurde kein zweiter Wert mitgegeben, dann wird automatisch die erste Zahl zum Quadrat genommen
*/

console.log(pow(2, 10));

function pow(number, exponent = 2) {
  return number ** exponent;
}
