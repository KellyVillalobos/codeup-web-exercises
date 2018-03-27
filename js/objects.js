(function() {
    "use strict";



    var name = {
        "firstName": "kelly",
        "lastName": "villalobos"
    };
    console.log(name);


    var person = name;
    console.log(person.firstName);
    console.log(person.lastName);

    var sayHello = function(){
        return ("Hello from " + person.firstName + " " + person.lastName)
    };

    console.log(sayHello());

    //or

    // var name = {};
    // name['firstName'] = 'kelly';
    // name['lastName'] = 'villalobos';
    //
    // console.log(name.firstName);
    // console.log(name.lastName);

    // name.sayHello = function(){
    //     return "hello from " + this.firstName + " " + this.lastName;
    // };
    //
    // console.log(name.sayHello());

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */










    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper){

        if(shopper.amount > 200){
            var discount = shopper.amount * .12;
            var shopperTotal = shopper.amount - discount;
            console.log(shopper.name + " owes: "  + "$" + shopper.amount.toFixed(2));
            console.log(shopper.name + "'s discount is " + "$" + discount.toFixed(2));
            console.log(shopper.name + "'s total is = " + "$" + shopperTotal.toFixed(2));


        }else{
            console.log(shopper.name + " owes: " + "$" + shopper.amount.toFixed(2));
            console.log(shopper.name + " did not spend enough, he doesn't get a discount.");
            console.log(shopper.name + "'s total is " + shopper.amount.toFixed(2))
        }


    });






    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "The Rising Sea",
            author: {
                firstName: "Clive",
                lastName: "Cussler"
            }

        },

        {
            title: "Camino Island",
            author: {
                firstName: "John",
                lastName: "Ghrisham"
            }
        },
        {
            title: "Ready Player One",
            author: {
                firstName: "Earnst",
                lastName: "Cline"
            }
        },
        {
            title: "The Great Alone",
            author:{
                firstName: "Krisntin",
                lastName: "Hannah"
            }
        },
        {
            title: "Dearest Ivy",
            author:{
                firstName: "J.R.",
                lastName: "Ward"
            }
        }
    ];

    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);

    console.log(books[1].title);
    console.log(books[1].author.firstName);
    console.log(books[1].author.lastName);

    console.log(books[2].title);
    console.log(books[2].author.firstName);
    console.log(books[2].author.lastName);

    console.log(books[3].title);
    console.log(books[3].author.firstName);
    console.log(books[3].author.lastName);

    console.log(books[4].title);
    console.log(books[4].author.firstName);
    console.log(books[4].author.lastName);



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */



        for(var i = 0; i < books.length; i++){
            console.log("Book # " + (i + 1));
            console.log("Title: " + books[i].title);
            console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
        }
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    var newBooks = [];

    function createBook(title, author){
        return {
            title: title,
            author: author
        }
    }
    function showBookInfo(title, author){
        var b = createBook(title, author);
        newBooks.push(b);
    }

    showBookInfo("The Rising Sea", {firstName: "Clive", lastName: "Cussler"});
    showBookInfo("Camino Island", {firstName: "John", lastName: "Grisham"});
    showBookInfo("Ready Player One", {firstName: "Earnst", lastName: "Cline"});
    showBookInfo("Dearest Ivy", {firstName: "J.R.", lastName: "Ward"});

    for(var i = 0; i < newBooks.length; i++){
        console.log("Book # " + (i + 1));
        console.log("Title: " + newBooks[i].title);
        console.log("Author: " + newBooks[i].author.firstName + " " + newBooks[i].author.lastName);
    }

    //or

    //var books = []

    // for(var i = 0; i < newBooks.length; i++){
    //     showBookInfo(books[i], i);
    // }

    //or

    // add a book:  books.push(createBook("title", "author"));
    // replace a book: books[4] = createBook("title", "author);

    // books.forEach(showBookInfo);



    // function crateBook(title, author){
    //
    // }

    // function showBookInfo(book, index){
    //     console.log("Book # " + (index + 1));
    //     console.log("title: " + book.title);
    //     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    // }


})();