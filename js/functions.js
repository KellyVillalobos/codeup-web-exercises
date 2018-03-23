"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return ('hello ' + name);
}

// var name = "kelly";
console.log(sayHello("name"));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */



var helloMessage = sayHello("kelly");
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "kelly";

console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(x){
    return (x === 2);
}

console.log(isTwo(random));


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */


function calculateTip(percentage, total) {
    var tipAmount = percentage * total;
    return tipAmount;
}



console.log('calculateTip(0.20, 20): ' + calculateTip(.20, 20));
console.log('calculateTip(0.25, 25.50): ' + calculateTip(.25, 25.50));
console.log('calculateTip(0.15, 33.42): ' + calculateTip(.20, 33.42));


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

var userInputTip = parseInt(prompt("what percent would you like to tip?"));
userInputTip = (userInputTip / 100);
console.log(calculateTip(userInputTip, 20));


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(originalPrice, discountPercent){
    var result = originalPrice * discountPercent;
    return result;

}



console.log(applyDiscount(100, .5));
console.log(applyDiscount(100, .10));

/**Write a function named identity that defines one parameter and returns the argument it was called with.*/

function identity(x){
    return (x >= 10);

}

console.log(identity(5));
console.log(identity(24));

/**Write a function named isOdd that accepts a number and returns true if the passed number is odd, otherwise false*/

function isOdd(x){

    return (x % 2 !== 0);
}

console.log(isOdd(2));

/**Write a function named isEven that accepts a number and returns true if the passed number is even, false otherwise*/

function isEven(x){
    return (x % 2 === 0);

}

console.log(isEven(2));

/**Write a function named isPositive that returns true if the passed number is greater than 0*/

function isPositive(x){
    return (x > 0);
}

console.log(isPositive(3));

/**Write a function named decrement that accepts a number and returns the number minus 1*/

function decrement(x){
    return (x - 1);
}
console.log(decrement(5));

/**Write a function named hasSpaces that accepts a string and returns true if the string contains any space characters*/

function hasSpaces(string){
    return (string.indexOf(' ') >= 0);
}

console.log(hasSpaces("this has spaces."));



/**Write a function named isFive that accepts a number and returns true if the number is equal to 5*/

function isFive(x){
    return (x === 5);
}

console.log(isFive(5));

/**Write a function named square that accepts a number and returns the number times itself*/

function square(x){
    return (x * x);
}

console.log(square(3));

/**Write a function named cube that accepts a number and returns the number times itself times itself*/

function cube(x){
    return (x * x * x);
}

console.log(cube(10));
/**Write a function named half that accepts a number and returns the number halved*/

function half(x){
    return (x / 2);
}

console.log(half(4));

/**Write a function named double that accepts a number and returns the number doubled*/

function double(x){
    return (x * 2);
}

console.log(double(10));

/**Write a function named isValidPassword that accepts a string and returns a boolean value based on the rules from the working with data types exercise*/

function isValidPassword(string){
    return (string.trim().length === string.length);
}

console.log(isValidPassword('notastrongpassword'));


/**A triangle with sides a, b, and c is a right triangle iff a squared plus b squared is equal to c squared. Write a function named isRightTriangle with parameters a, b, and c that will be numbers, and that tells if the passed sides can make a right triangle (returns a boolean).*/

function isRightTriangle(a, b, c){
    return (square(a) + square(b) === square(c));
}

console.log(isRightTriangle(3, 4, 5));

