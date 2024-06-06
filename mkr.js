//Task 1
let input = prompt('Enter a word:', '');

if (input !== null) {
    if (!input.trim()) {
        alert('Invalid value');
    } else {
        if (input.length % 2 === 0) {
            alert(input[(input.length / 2) - 1] 
            + input[input.length / 2]);
        } else {
            alert(input[Math.floor(input.length / 2)]);
        }
    }
} else {
    alert('Canceled');
}
//Task 2
const users = [
    {
        id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        skills: ["ipsum", "lorem"],
        gender: "male",
        age: 37,
      },
      {
        id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
        gender: "female",
        age: 34,
      },
      {
        id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        skills: ["nulla", "anim", "proident", "ipsum", "elit"],
        gender: "male",
        age: 24,
      },
      {
        id: "249b6175-5c30-44c6-b154-f120923736f5",
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        skills: ["adipisicing", "irure", "velit"],
        gender: "female",
        age: 21,
      },
      {
        id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        skills: ["ex", "culpa", "nostrud"],
        gender: "male",
        age: 27,
      }
];


function getUniqueSkills(users) {
    const skills = new Set();

    users.map((item) => {
        for (let i of item.skills) {
            skills.add(i);
        }
    });

    return skills;
}

function getTotalBalance(users) {
    let balans = 0;

    users.map((item) => {
        if (item.friends.length === 2 && item.age < 30) {
            balans += item.balance;
        }
    });

    return balans;
}


console.log(getUniqueSkills(users));
console.log(getTotalBalance(users));

//Task 3
//The spread and rest operators are both represented by three dots (...) in JavaScript, but they serve different purposes.
//Spread Operator:
//Expands an iterable (like an array) into individual elements.
//Example:
//const numbers = [1, 2, 3];
//const newNumbers = [...numbers, 4, 5];
//console.log(newNumbers);
//Rest Operator:
//Collects multiple elements into a single array or object.
//Example:
//function sum(...args) {
//    return args.reduce((acc, curr) => acc + curr, 0);
//}
//console.log(sum(1, 2, 3)); 
