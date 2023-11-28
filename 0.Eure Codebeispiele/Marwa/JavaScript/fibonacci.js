// Erstelle eine Funktion die die Fibonacci-Folge bis zu einem bestimmten Wert generiert
// Beispiel: generateFibonacci(10)
// Output: 0,1,1,2,3,5,8,13,21,34


function generateFibonacci(a){
    let fib = [0, 1];
    for(let i = 2; i < a; i++){
        fib[i] = fib[i -1] + fib [i - 2];
    }
    return fib.join(",");
}
let result = generateFibonacci(10);
console.log(result);