"use strict";


//1. define the variable in this case would start with 1 to multiply by 2 in the body of the loop.
//2. i is multiplied by 2 to get first number and then incremented times 2 to get i.
//3. used the number after the last number to stop at the last number.

//while loop
var i = 1;
while (i <= 32768){
    console.log(2 * i);
    i = i * 2;
}
//for loop
for(i = 2; i <= 65536; i *= 2){
    console.log(i)
}

i = 2;
//do while loop
do{
    console.log(i);
    i *= 2;
}while (i < 65536);