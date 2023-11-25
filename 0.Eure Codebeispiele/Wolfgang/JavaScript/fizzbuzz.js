// Gib alle Zahlen von 1 – 100 aus, jedoch werden 

// Zahlen die durch 3 teilbar sind durch das Wort „Fizz“ ersetzt, 

let fizzBuzz = 0;

while (fizzBuzz <=100){
    if (fizzBuzz % 3 === 0 && fizzBuzz % 5 === 0){
        console.log ("FizzBuzz");
    }else if 
        (fizzBuzz % 5 === 0){
            console.log ("Buzz");
    }else if (fizzBuzz % 3 === 0){
        console.log("Fizz");
    }else{
        console.log(fizzBuzz);
    }

    fizzBuzz ++;
}

// Zahlen die durch 5 teilbar sind werden durch „Buzz“ ersetzt und 
// Zahlen die durch 3 und 5 teilbar sind werden durch „FizzBuzz“ ersetzt.
// Nutze dafür eine while loop!
// Beispiel Output: 1,2,Fizz, 4,Buzz,Fizz,7,8,….
