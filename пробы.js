"use strict";

 let num = 5;
// const leftBorder= 15;

num = 5+10;
console.log(num);
alert(num);

let con = confirm('Ты здесь?');
console.log(con);
alert(con);

let pro = prompt('Вам есть 18?');
console.log(pro);

//фукнции

//1
let a = 5;
 function addTwo(z) {
   let ret = z + 2;
   return ret;
 }
 let b = addTwo(a);
 console.log(b);


//2
let val1 = 2;
function multiplyThis(n) {
let ret = n * val1;
return ret;
}
let multiplied = multiplyThis(6);
console.log('example of scope:', multiplied);

//3
let val = 7;
function createAdder() {
    function addNumbers(a, b) {
    let ret = a + b;
    return ret;
    }
 return addNumbers;
}
let adder = createAdder();
let sum = adder(val, 8);
console.log('example of function returning a function: ', sum);


//4
function createCounter() {
    let counter = 0;
    const myFunction = function() {
        counter = counter + 1;
        return counter;
        };
    return myFunction;
 }
 const increment = createCounter();
 const c1 = increment();
 const c2 = increment();
 const c3 = increment();
 console.log('example increment', c1, c2, c3);
