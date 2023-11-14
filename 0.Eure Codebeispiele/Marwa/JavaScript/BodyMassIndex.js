
//Wiederholung zu Funktionen & Verzweigungen JS Grundlagen 2

let heigth = prompt("Enter a heigth: ");
let weight = prompt("Enter a weight: ");

function bmi(heigth, weight){
   const result = weight /(heigth*heigth);
    return result;
    
}
let bmiresult = bmi(heigth, weight);

function body(heigth, weight) {
    if( bmiresult< 18.5){
        alert("underweigth");
    }else if(bmiresult < 24.9){
        alert("normal");
    }else if(bmiresult < 29.9){
        alert("overgewicht");
    }else if(bmiresult < 34.9){
        alert("obse");
    }else{
        alert("exterm obse");
    }
}

body(heigth, weight);