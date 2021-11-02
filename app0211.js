// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };
// rabbit.__proto__ = animal;
// console.log(rabbit);

// for (let key in rabbit) {
//     console.log(key);
// };

// console.log('jumps inside rabbit', rabbit.hasOwnProperty('jumps'));
// console.log('eats inside rabbit', rabbit.hasOwnProperty('eats'));

// function Animal() {
//     this.eats = true;
// }

// function Rabbit() {
//     this.jumps = true;
// }

// let animal = new Animal();
// animal.run = true;
// // Rabbit1.prototype = animal;
// let rabbit1 = new Rabbit();
// // console.log(rabbit1_proto_ = animal);
// // console.log(rabbit1);

// Object.setPrototypeOf(rabbit1, {
//     model: 0
// })

// console.log(Object.getPrototypeOf(rabbit1));


// let animal = {
//     eat() {
//         console.log('eating');
//     },
// };

// function Dog() {

// }
// Dog.prototype = animal;
// let dog1 = new Dog();
// dog1.eat();


// function Figure() {
//     this.draw = function () {
//         console.log('drawing');
//     }
//     this.setValues = (color, top, left, size) => {
//         this.color = color;
//         this.size = top;
//         this.top = left;
//         this.left = size;
//     };
//     this.color = null;
//     this.size = null;
//     this.top = null;
//     this.left = null;
// }
// // let figure = new Figure();

// function Square(color, top, left, size) {
//     this.square = function () {
//         console.log(size * size);
//     }
// }
// Square.prototype = new Figure;
// function Circle(color, top, left, size) {
//     this.square = function () {
//         console.log(2 * Math.PI * size ** 2)
//     }
// }
// Circle.prototype = new Figure;
// function Rectangle(color, top, left, size) {
//     this.square = function () {
//         console.log(size * size * 2);
//     }
// }
// Rectangle.prototype = new Figure;


// let square = new Square('red', 10, 30, 20);
// square.square()
// let circle = new Circle('green', 10, 30, 20);
// circle.square()
// let rectangle = new Rectangle('blue', 10, 30, 20);
// rectangle.square()

// function getPerson(sex, surname) {
//     console.log(this.name, this.age, sex, surname);
// }
// console.log(getPerson.length);


// getPerson.call({ name: "Maks", age: 25 }, 'man', 'Ivanov');
// getPerson.apply({ name: "Maksim", age: 23 }, ['man', 'Petrov'])
// let blindedFunc = getPerson.bind({ name: "Marta", age: 23 }, 'women', 'Astra')
// blindedFunc();

// class Car {

//     constructor(name, model) {
//         this.name = name;
//         this.model = model;
//     }
//     showInfo() {
//         console.log(this.name, this.model);
//     }
// }
// let car1 = new Car('tesla', 'model3')
// car1.showInfo();
// console.log(car1);


// class Car {
//     canDrive = true;
//     constructor(name, year, color) {
//         this.name = name;
//         this.year = year;
//         this.color = color;
//     }
//     get year() {
//         console.log('getting year');
//         return this._year;
//     }
//     set year(newValue) {

//         console.log('setting year');
//         this._year = newValue;
//     }
//     changeColor(newColor) {
//         this.color = newColor;

//     }
// }
// let car1 = new Car('BMW', 2012, 'red');
// car1.changeColor('black');
// console.log(car1);


// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }
// class Employee extends Person {
//     constructor(name, position) {
//         super(name);
//         this.position = position;
//     }
//     showInfo() {
//         console.log(this.name, this.position);
//     }
// }

// let max = new Employee('maks', 'front-end developer');
// max.showInfo()

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         alert(this.name + ' says hi');
//     }
// }

// class Cat extends Animal {
//     constructor(name) {
//         super(name);

//     }
//     speak() {
//         alert(this.name + ' may');
//     }
// }

