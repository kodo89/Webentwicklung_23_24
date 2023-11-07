
// bmi = weight in kg / (height in m)**2


const weight = prompt("Gib dein Gewicht in kg ein!");
const height = prompt("Gib deine Größe in m ein!")

function bmi(weight, height) {
    const bmi = weight / height**2;
    return bmi;
}


const bmiOutput = bmi(weight, height);
console.log(bmiOutput);

if (bmiOutput < 18.5) {
    alert("underweight" + " and your bmi is: " + bmiOutput);
} else if (bmiOutput >= 18.5 && bmiOutput < 25) {
    alert("normal" + " and your bmi is: " + bmiOutput);
} else if (bmiOutput >= 25 && bmiOutput < 30) {
    alert("overweight" + " and your bmi is: " + bmiOutput);
} else if (bmiOutput >= 30 && bmiOutput < 35) {
    alert("obese" + " and your bmi is: " + bmiOutput);
} else{
    alert("extremly obese" + " and your bmi is: " + bmiOutput);
}



