/*Schaltjahr ja oder nein??
*/




const year = 2400;
const printLeapYear = leapYear(year);
console.log(printLeapYear);



function leapYear(y){
    if(y % 100 == 0 && y % 400 == 0){
        return true;
    } else if(y % 100 == 0){
        return false;
    } else if(y % 4 == 0){
        return true;
    } else{
        return false;
    }
}









