//Exercises solved by GitHub Copilot!

// 1. Let the user enter a number between 1 and 7 and print the corresponding day of the week.

let weekDayInput = prompt("Please enter a number between 1 and 7");

console.log(getDayOfWeek(weekDayInput));

function getDayOfWeek(num) {
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return weekDays[num - 1];
}


// 2. Define an object with some properties of a car and a method that prints out the properties as a template string.

let car = {
    brand: "Mercedes",
    model: "E-Class",
    year: 2019,
    color: "black",
    printCar: function() {
        console.log(`This is a ${this.color} ${this.brand} ${this.model} from ${this.year}.`);
    }
}

// 3. Let the user defina a row and column and print out the corresponding value from the following array: [["Hans", "Müller", 22], ["Georg", "Huber", 37], ["Fritz", "Mayr", 19]]

let row = prompt("Please enter a row number between 1 and 3");
let column = prompt("Please enter a column number between 1 and 3");

let arr = [["Hans", "Müller", 22], ["Georg", "Huber", 37], ["Fritz", "Mayr", 19]];

console.log(arr[row - 1][column - 1]);

// 4. Create an array of objects from the array of exercise 3. Each object should have the properties firstName, lastName and age. Print out the array of objects.

let arrOfObj = [];

for (let i = 0; i < arr.length; i++) {
    arrOfObj.push({
        firstName: arr[i][0],
        lastName: arr[i][1],
        age: arr[i][2]
    });
}

console.log(arrOfObj);