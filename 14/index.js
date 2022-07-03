//start with strings numbers and booleans
// var age1 = 100;
// var age2 = age1;
// console.log(age1, age2);

// age1 = 200;
// console.log(age1, age2);

// let name1 = 'wes';
// let name2 = name1;
// console.log(name1, name2);
// name1 = 'wesley';
// console.log(name1, name2);


//let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']

//and we want to make a copy of it
const team = players;

console.log(players, team);
//you might think we can just do something like this
// team[3] = 'Lux'

//however what happenes when we update that array?



//now here is the problem!


//oh no - we hawe edited the original aeeray too


//why? it's because that is an array reference, not an array copy
//they both point to the same array


//so, how do we fix this? we take a copy instead
const team2 = players.slice() 


//one day


//or create a new array and concat the old one in
const team3 = [].concat(players)

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'heeee hawwwww';
console.log(team4);


const team5 = Array.from(players)

// now when we update it, the original one isn't changed

//the same thing goes for objects, let's say we hawe a person object

//with Object
const person = {
    name: 'Wes Bos',
    age: 80,
}

// and think we make a copy
const captain = person;
captain.number = 99;


//how do we take a copy instead?
const cap2 = Object.assign({}, person, {number: 99, age: 12});
console.log(cap2);

//we will hopefully soon see the object... spred
const cap3 = {...person};

const wes = {
    name: 'wes',
    age: 100,
    social: {
        twitter: '@ wesbos',
        facebook: 'wesbos.developer'
    },
};

console.clear();
console.log(wes);

const dev = Object.assign({}, wes);

const dev2 = JSON.parse(JSON.stringify(wes))