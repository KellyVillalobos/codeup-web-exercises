'use strict';


function wait(aNumber) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();

        }, aNumber);
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));




fetch('https://api.github.com/users/KellyVillalobos/events/public'    , {headers: {'Authorization': 'My Token'}})
    .then(response => response.json())
    .then((users) => console.log(users[0].created_at));

