// Erstelle eine Funktion die die Fibonacci-Folge bis zu einem bestimmten Wert generiert
// Beispiel: generateFibonacci(10)
// Output: 0,1,1,2,3,5,8,13,21,34

console.log(generateFibonacci(20));

function generateFibonacci(count) {
  let num1 = 0;
  let num2 = 1;
  let fibonacci = [];

  if (count == 1) {
    fibonacci.push(num1);
  } else if (count >= 2) {
    fibonacci.push(num1, num2);
  }

  for (let i = 2; i < count; i++) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
  }

  return fibonacci;
}
