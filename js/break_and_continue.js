// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if
//     they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the
// user entered.
//     Your output should look like this:

// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49

function isOdd(x){

    return (x % 2 !== 0);
}
function isEven(x) {
    return (x % 2 === 0);
}
function isNumeric(input) {
    // need to check for numeric strings and return true for "123"
    return !isNaN(parseFloat(input));
}


var userInput = prompt("enter an odd number between 1 and 50.");
while(true) {
    if (isEven(userInput)){
        userInput = prompt("INVALID!! Please enter an odd number between 1 and 50");
        console.log(userInput);
    } else {
        break;
    }
}

for(var i = 1; i < 50; i++){
    if(i == userInput){
    console.log("Yikes! Skipping number: " + userInput);
    continue
}
    if(isOdd(i)){
        console.log('here is an odd number: ' + i);
    }

}