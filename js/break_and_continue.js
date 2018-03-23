'use strict';

    function isOdd(pickNum) {
        return pickNum % 2 !== 0;
    }
    function isNumeric(num) {
        return !isNaN(parseFloat(num));
    }




var pickNum
do {
    pickNum = parseFloat(prompt('Pick an odd number between 1 & 50'));
    if(isOdd(pickNum)) {
        break;
        }
    } while(true);
console.log("I am skipping this " + pickNum)


for (var i = 1; i < 50; i++) {

    if (i == pickNum) {
        console.log( 'I just skipped ' + i);
        continue;
    }
    if (isOdd(i)) {
        console.log('Here is an odd :  ' + i);
    }
}
