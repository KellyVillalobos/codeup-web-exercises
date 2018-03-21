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

function isNumeric(value) {
    return !isNaN(parseFloat(value));
}
function isNegative(number) {
    return number < 0;
}
function isPositive(number) {
    return number > 0;
}

function chooseNumber(number) {
    if (isNumeric(number)) {
        console.log('if statement ran.');
        alert((number % 2 === 0) ? "your number is even." : "your number is odd.");
        alert((number) + " + 100 = " + (number + 100));
        alert(isPositive(number) ? "your number is positive." : "your number is negative.");
}
else{

        alert("this is not a number.");
}



}


var answer = confirm("would you like to enter a number?");
var userInput = parseInt(prompt('enter your desired number.'));
if (answer === true){

}
console.log(chooseNumber(userInput));

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

function analyzeColor(colorName){
    if ('red' === colorName){
        return "red is the color of roses."
    }else if ('orange' === colorName){
        return "orange is the color of the sun."
    }else if ('yellow' === colorName){
        return "yellow is the color of bananas."
    }else if ('green' === colorName){
        return "green is the color of grass."
    }else if ('blue' === colorName){
        return "blue is the color of the sky."
    }else if ('indigo' === colorName){
        return "indigo is the color of the ocean."
    }else if ('violet' === colorName){
        return "violet is the color of violets."
    }else {
        return "this is not a color in the rainbow."
    }
}



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var userInputColor = prompt("enter a color into the color analyzer.");
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log(analyzeColor('red'));
console.log(analyzeColor(userInputColor));
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// switch does a === comparison between the value in the paryns and each case


switch (randomColor) {
    case "red":
        console.log("red is the color of roses.");
        break;
    case "orange":
        console.log("orange is the color of the sun.");
        break;
    case "yellow":
        console.log("yellow is the color of bananas.");
        break;
    case "green":
        console.log("green is the color of grass.");
        break;
    case "blue":
        console.log("blue is the color of the sky.");
        break;
    case "indigo":
        console.log("indigo is the color of the ocean");
        break;
    case "violet":
        console.log("violet are the color of violets.");
        break;
    default:
        console.log("this is not a color in the rainbow.");
        break;
}



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */



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


function calculateTotal(luckyNumber, totalAmount){
    if (luckyNumber === 1){
        alert("you lucky number is " + luckyNumber);
        alert("your price before lucky discount was " + totalAmount);
        alert("your total after discount is " + (totalAmount - (totalAmount * .10)));
    }else if (luckyNumber === 2){
        alert("you lucky number is " + luckyNumber);
        alert("your price before lucky discount was " + totalAmount);
        alert("your total after discount is " + (totalAmount - (totalAmount * .25)));
    }else if (luckyNumber === 3){
        alert("you lucky number is " + luckyNumber);
        alert("your price before lucky discount was " + totalAmount);
        alert("your total after discount is " + (totalAmount - (totalAmount * .35)));
    }else if (luckyNumber === 4){
        alert("you lucky number is " + luckyNumber);
        alert("your price before lucky discount was " + totalAmount);
        alert("your total after discount is " + (totalAmount - (totalAmount * .50)));
    }else if (luckyNumber === 5){
        alert("you lucky number is " + luckyNumber);
        alert("your price before lucky discount was " + totalAmount);
        alert("your total after discount is " + (totalAmount - (totalAmount * 1.0)));
    }
}

var luckyNumber = Math.floor(Math.random() * 5);
console.log(luckyNumber);

var totalAmount = prompt("enter your bill total");
console.log(calculateTotal(luckyNumber, totalAmount)).toFixed(2);




/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
