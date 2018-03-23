"use strict"





var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesBought = Math.floor(Math.random() * 5) + 1;

    if(conesBought <= allCones){
        console.log(allCones + ' cones sold');
        allCones -= conesBought
    }else{
        console.log('Cannont sell you ' + conesBought + " cones I only have" + allCones + '....')
    }
} while (allCones > 0);

console.log("Yay I sold all my cones!!");





// This is how you get a random number between 50 and 100

// This expression will generate a random number between 1 and 5
