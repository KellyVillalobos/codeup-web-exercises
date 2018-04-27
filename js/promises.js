'use strict';

//const wait = aNumber => {}
function wait(aNumber) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();

        }, aNumber);
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



//const request = fetch
fetch('https://api.github.com/users/KellyVillalobos/events/public'    , {headers: {'Authorization': 'My Token'}})

    //request
    .then(response => response.json())
    //.then(events => console.log(events))
    //events[0].created_at
    .then(users => console.log(users[0].created_at));

