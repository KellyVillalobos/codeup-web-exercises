const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];


// let result = {
//     "5": {
//         id: 5,
//         name: 'justin',
//         email: 'justin@codeup.com',
//         languages: ['html', 'css', 'javascript', 'php'],
//     }
// }



console.log(users);
const allLanguages = users




    .filter(user => user.languages.length > 2); // Knows more than 2 languages


console.log(allLanguages);

allLanguages

    .map(user => user.email); //user email


console.log(allLanguages)

const result = users.reduce((newObject, user) => {
     newObject[user.id] = user;
     return newObject;

}, {});
console.log(result);

