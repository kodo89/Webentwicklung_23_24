//Array Übung

const names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

let newName = "Mario";

function whosPaying(names){
    let number = Math.random()*names.length-1;
    let numberRounded = Math.ceil(number);
    let payer = names[numberRounded];
    return payer;
}

let printPayer = whosPaying(names);
console.log(printPayer+" bezahlt heute das Mittagessen!");


let i = 0;
while (i < 5) {
    names[i] = newName;
    i++;
}

console.log("Ab jetzt bezahlt nur mehr " + newName);

