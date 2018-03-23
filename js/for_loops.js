



// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for
// that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output




function showMultiplicationTable(number){
    for (var i = 1; i < 11; i++){
         console.log(number + " x " + i + " = " + number*i);
    }
}

showMultiplicationTable(5);

// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70



// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output
// to the console whether each number is odd or even. For example:


function isOdd(x){

    return (x % 2 !== 0);
}
function isEven(x) {
    return (x % 2 === 0);
}



    for (var i = 1; i < 11; i++) {
        var number = Math.floor(Math.random() * 200) + 20;
        if (isOdd(number)){
            console.log(number + " is odd.");
        }else {
            (isEven(number));

            console.log(number + " is even.");

        }

    }



// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
//     ...

// Create a for loop that uses console.log to create the output shown below.

for (var i = 1; i < 10; i++){
    var a = "";
    for(var b = 1; b <= i; b++){
         var a = a + i;

    }console.log(a)

}




// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// Create a for loop that uses console.log to create the output shown below.

for(var i =1; i < 20; i++){
    var number= 100;
    for(var c = 1; c <= i; c++){
        var number = number - 5;
    }console.log(number)

}

// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5




