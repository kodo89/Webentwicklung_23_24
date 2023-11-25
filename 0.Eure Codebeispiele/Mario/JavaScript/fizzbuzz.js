// Gib alle Zahlen von 1 – 100 aus, jedoch werden 
// Zahlen die durch 3 teilbar sind durch das Wort „Fizz“ ersetzt, 
// Zahlen die durch 5 teilbar sind werden durch „Buzz“ ersetzt und 
// Zahlen die durch 3 und 5 teilbar sind werden durch „FizzBuzz“ ersetzt.
// Nutze dafür eine while loop!
// Beispiel Output: 1,2,Fizz, 4,Buzz,Fizz,7,8,….


let i = 0;
let s = " ";

while(i<101){

    if(i == 0){
        s = s + i;
    } else if(i % 3 == 0 && i % 5 == 0){
        s = s + ", FizzBuzz";
    } else if(i % 3 == 0){
        s = s + ", Fizz";
    } else if (i % 5 == 0){
        s = s + ", Buzz";
    } else{
        s = s + ", " + i;
    }
    i++;
};

console.log(s);



