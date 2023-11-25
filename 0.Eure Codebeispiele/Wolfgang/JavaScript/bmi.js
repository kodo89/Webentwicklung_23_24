

let weight = prompt("Bitte geben sie ihr gewicht in kg ein ");
let hight =  prompt("Bitte geben sie ihre größe ein");

function bmi (weight,hight){


let sum = weight / hight**2
return sum;
}


let calculatetBmi = bmi(weight,hight);
console.log(calculatetBmi);

function bmiAusgabe (bmi){

    if (bmi <18.5){
        return "sie sind untergewichtig";
    } else if (bmi >=18.5 && bmi<25){
        return "Dein Gweicht ist Normal";
    }else if (bmi >25 &&  bmi < 29.9){
        return "Dein gewicht ist zu viel";
    }else if (bmi > 30 && bmi < 34.9){
        return "Ihr Gewicht ist viel zu viel!"
    }else if (bmi > 35 ){
        return "DU BSIT ZU FETT";
    }

}

let bmiResult = bmiAusgabe(calculatetBmi);
console.log(bmiResult);