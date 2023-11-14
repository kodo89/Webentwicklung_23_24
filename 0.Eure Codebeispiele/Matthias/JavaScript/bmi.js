let weight = prompt("Weight (kg): ");
let size = prompt("Size (cm):");

let bmi = calculateBMI(weight, size);

alert("BMI: " + bmi);
printBMICategory(bmi);

function calculateBMI(weight, size) {
    return Math.floor(weight/((size/100)**2)*100)/100;
}

function printBMICategory(bmi) {
    if(bmi < 18.5) {
        alert("Underweight");
    } else if(bmi <= 24.9) {
        alert("Normal");
    } else if(bmi <= 29.9) {
        alert("Overweight");
    } else if(bmi <= 34.9) {
        alert("Obese");
    } else {
        alert("Extremly obese");
    }   
}