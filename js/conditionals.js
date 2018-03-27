"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
var pickNumber = confirm("Would you like to pick a number?");
if (pickNumber) {
    var userNum;
    userNum = prompt("Please pick a number");

    if (!isNaN(userNum)) {

        if (isEven(userNum)) {
            alert("Your number is even");
        } else {
            alert("Your number is odd");
        }

        if (isPositive(userNum)) {
            alert("Your number is positive");
        } else {
            alert("Your number is negative")
        }

        alert("Your number is " + plusHundred(userNum));
    }
}

function isEven(number) {
    return (number % 2 === 0);
}

function plusHundred(number) {
    return (parseInt(number) + 100);
}

function isPositive(number) {
    return (number > 0);
}


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color) {
//     if (color === "blue") {
//         return 'blue is the color of the sky';
//     } else if (color === "red") {
//         return 'Strawberries are red';
//     } else if (color === "yellow") {
//         return 'Yellow is okay I guess';
//     } else if (color === "orange") {
//         return 'Orange is just orange';
//     } else if (color === "green") {
//         return 'Green is the color of grass';
//     } else if (color === "indigo") {
//         return 'Indigo is a shade of blue';
//     } else if (color === "violet") {
//         return 'Violet is a flower and shade of purple';
//     } else {
//         return 'I do not know' + color;
//     }
// }


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message everytime you refresh the page
     */
    function pickColor() {
        console.log(analyzeColor(randomColor));
        alert(analyzeColor(randomColor));
        document.write(analyzeColor(randomColor));


        /**
         * TODO:
         * Refactor your above function to use a switch-case statement
         */
        switch (color) {
            case 'blue':
                return 'Blue is the color of the sky';
            case 'red':
                return 'Strawberries are red';
            case 'yellow':
                return 'Yellow is okay I guess';
            case 'orange':
                return 'Orange is just orange';
            case 'green':
                return 'Green is the color of grass';
            case 'indigo':
                return "Indigo is a shade of the color blue";
            case 'violet':
                return 'Violet is a flower and shade of purple';
            default:
                return 'I do not know this' + color;

        }
    }


    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

    var color = inputNumber('Enter a number between 0 and 6');
    var message = analyzeColor(colors[color]);
    alert(message);


    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
    function calculateTotal(luckyNumber, originalAmount) {
        switch (luckyNumber) {
            case 0:
                return originalAmount;
            case 1:
                return originalAmount - (originalAmount * .1);
            case 2:
                return originalAmount * .75;
            case 3:
                return originalAmount * .65;
            case 4:
                return originalAmount * .5;
            case 5:
                return 0;
        }
    }

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
    function generateRandom() {
        var luckyNumber = Math.floor(Math.random() * 6);
        alert('Your lucky number is ' + luckyNumber);
        var originalAmount = inputNumber('How much did you bought?');
        var total = calculateTotal(luckyNumber, originalAmount);
        alert('Your total before discount is ' + originalAmount);
        alert('Your total after discount is $' + total.toFixed(2));

    }

    generateRandom();
}
