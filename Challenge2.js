const users = [
    { num: 1, name: 'Maddocks', surname: 'Stevens' },
    { num: 2, name: 'Sarah', surname: 'Smith' },
    { num: 3, name: 'Kevin', surname: 'Carter' }
];

const names = users.map(({ name }) => name);

console.log(names);