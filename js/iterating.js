(function(){
"use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var names = ['Kelly', 'Ali', 'Ruben', 'Mellonee'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log('The number of elements in my array is ' + names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for(var i = 0; i < names.length; i++){
        console.log(names[i], i, names);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name, index, array) {
        console.log('here is the name ' + name + '.');
        console.log('here is the index' + index + '.');
        console.log('here is the array' + array + '.');
    });

    //or

    names.forEach(showName);

    function showName(name, i){
        console.log(name);
        console.log(i);
    }
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
function first(someArray){
        return names[0];
    }
console.log(first(names));

function second(someArray){
    return names[1];
}
console.log(second(names));
function last(someArray){
    return names[names.length - 1];
}
console.log(last(names));


})();