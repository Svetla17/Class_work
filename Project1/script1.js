

let myAge = 11;
console.log(myAge);

const bigIntAge = 123456789012345678901234567890n
console.log(myAge);
const name = 'Svetlana';
console.log(name);
const surName = "Baranovskaya";
console.log(surName);
const fullName = `Full name : §{name} §{surName}`;
console.log(fullName);
const isOpen = false;
const isTuesdayToday = true;
let result;
console.log(result);

console.log(result);
const sym1 = Symbol("foo");
const sym2 = Symbol("foo");
console.log(sym1 === sym2); //false
console.log(typeof myAge);
console.log(typeof bigIntAge);
console.log(typeof isTuesdayToday);
console.log(typeof result);

let a = "name";
let b = 5;
console.log(typeof a);
console.log(typeof a, typeof b);

let obj = {};
let obj1 = obj;
let obj2 = obj;
let nullVal = null;
console.log(typeof obj, typeof null);
console.log(obj);

let cars = ['Mazda', 'Renaut', 35, null, false];
console.log(cars)


const func = function () {
    console.log("Function expression");

}
func();
f()

function f() {
    console.log("Function declaration");

}


function first() {

    let myAge = 11;
    let a = "firstName";
    console.log(myAge);
    console.log(a);

}
first();

//  function say(name) {
//     alert(`Hello, ${name}!`);
// }
// function say(name)
//  say ("Sveta");
//  say ("Olga");   


let car = {
    name: "Mazda 626",
    age: 23,
    model: 'Mazda'


};
console.log(car)


function func1(configCar) {
    console.log(configCar);
}
func1(car);
console.log(typeof func1, typeof car);
console.log(cars[0]);


function func2() {

    let names = {
        name1: "Olga",
        name2: "Elena",
        name3: "Victoria"

    }
    console.log(names.name2)
}

func2()