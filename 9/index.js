const dogs = [{name: 'Snikers', age: 2}, 
            {name: 'hugo', age: 8}];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

//regular
console.log('hello');


//interpolated
console.log('Helo i am a %s string!', '+pp');


//styled
console.log('%c i am so great text', 'font-size:50px');


//warning
console.warn('OH NOOOOO');


//error
console.error('OH NOOOOO');


//info
console.info('Crocodiles eat 3-4 people per year');

//testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'that is wrong');

//clearing
console.clear();

//viewing DOM Elements
console.log(p);
console.dir(p);
console.clear();

//Grouping together
dogs.forEach(dog=> {
    console.group(`${dog.name}`);
    console.log(`this is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);    
});

//counting
console.count('wes');
console.count('steve');
console.count('wes');
console.count('steve');
console.count('steve');
console.count('steve');
console.count('wes');
console.count('wes');
console.count('steve');


//timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos').then(data => data.json()).then(data => {
    console.timeEnd('fetching data');
    console.log(data);
})

console.table(dogs)