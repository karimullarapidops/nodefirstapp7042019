// import { fstat } from "fs";

// let time = 0;

// let timer = setInterval(() => {
//     time += 4;
//     console.log(time +' seconds will be runining');
//     if ( time > 16) {
//         clearInterval(timer);
//     }
// }, 4000)

// setTimeout(() => {
//     console.log('the server will run just 2 seconds')
// }, 2000);

// console.log(__dirname);
// console.log(__filename);

//normal function


// function sayHi() {
//     console.log('Hii');
// }

// sayHi();

//function with expression

// let sayBye = () => {
//     console.log('Bye');
// }

// sayBye();
// var counter = require('./count');

// console.log(counter(['kareem', 'vamsi', 'narendra']));
// function sayHi(fun) {
//     fun();
// }

// let sayBye = () => {
//     console.log('bye')
// }

// sayHi(sayBye);

// let events = require('events');
// let util = require('util');

// let Person = (name) => {
//     this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// let kareem = new Person('kareem');
// let vamsi = new Person('vamsi');
// let cycle = new Person('cycle');
// let people = [kareem, vamsi, cycle];

// people.forEach(function (person)  {
//     person.on('speak', function (mssg)  {
//         console.log(person.name + ' said: ' + mssg)
//     });
// });

// kareem.emit('speak', 'hey dude');
// let myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', (mssg) => {
//     console.log(mssg);
// });

// myEmitter.emit('someEvent', 'the event is emitted properly');


// let read = fs.readFileSync('readMe.txt', 'utf8');
// fs.writeFileSync('write.txt', read);

// console.log(read);

//async

// const fs = require('fs');

// fs.unlink('./node/k.txt', (err) => {
//   if (err) throw err;
//   console.log('successfully deleted /tmp/hello');
// });
