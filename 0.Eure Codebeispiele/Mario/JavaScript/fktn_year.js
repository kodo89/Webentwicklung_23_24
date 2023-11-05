/*Schaltjahr ja oder nein??
*/




const year = 2104;
const printLeapYear = leapYear(year);
console.log(printLeapYear);


const printLeapYear2 = leapYearV2(year);
console.log(printLeapYear2);




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

function leapYearV2(y){
    if(y % 4 == 0){
        if(y % 100 == 0 && y % 400 == 0){
            return true;
        } else if (y % 100 == 0){
            return false;
        } else{
            return true;
        }
    } else{
        return false;
    }
}









