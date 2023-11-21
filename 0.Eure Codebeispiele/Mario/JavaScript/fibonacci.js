// Erstelle eine Funktion die die Fibonacci-Folge bis zu einem bestimmten Wert generiert
// Beispiel: generateFibonacci(10)
// Output: 0,1,1,2,3,5,8,13,21,34




let x = 10;




let i = 0;

const arr = new Array(x);

let output = " ";

while(i < x){
    
    if(i < 2){
        arr[i] = i;

    } else{
        arr[i] = arr[i-1]+arr[i-2];
    }

    if(i>x-2){
        output = output + arr[i]
    } else{
        output = output + arr[i] + ", "
    }

    i++;
}
console.log(output);





















