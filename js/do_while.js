var allCones = Math.floor(Math.random() * 50) + 50;

var conesBought = Math.floor(Math.random() * 5) + 1;

console.log("i have " + allCones + " this morning.");

do {

    if (allCones < conesBought) {
        console.log("sorry I can't sell you " + conesBought + " I only have " + allCones);
    } else {
        allCones = allCones - conesBought;
        console.log("i have " + allCones + " left.");
    }
} while (allCones = 0);

console.log("Yay I sold all my cones!!");





// This is how you get a random number between 50 and 100

// This expression will generate a random number between 1 and 5
