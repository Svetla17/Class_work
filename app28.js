// let message = {
//     text: " ",
//     getMessage(string) {
//         this.text = string;
//     },

//     showMessage() {
//         alert(this.text);

//     },
// }
// message.getMessage("Hello");
// message.showMessage();



// let rectange = {
//     width: 10,
//     height: 15,
//     getArea() {
//         return this.width * this.height;
//     },

//     selWidth(newWidth) {
//         this.width = newWidth;

//     },
//     selHeight(newHeight) {
//         this.height = newHeight;

//     },
//     selSize(newWidth, newHeight) {
//         this.width = newWidth;
//         this.height = newHeight;

//     }
// }



// let iterable = [10, 20, 30];
// for (let value of iterable) {
//     value += 1;
//     console.log(value);
// }

// let car = {
//     name: "mazda",
//     age: 30,
//     modal: "modal",
// };
// console.log(Object.entries(car));

// for (const item of Object.entries(car)) {
//     let key = item[0];
//     let value = item[1];
// }

// let arr = ["Ivan", "Ivanov"];

// let [name, surname] = arr;
// let { name: nameCar, age } = car;


// [arr[0], arr[1]] = [arr[1], arr[0]];

// let { modal, ...restCar } = car;
// console.log(modal, restCar);

// let product = {
//     name: "John",
//     price: 30,
//     sold: false
// };



// let { name, price, sold } = product;
// console.log(name);
// console.log(price);
// console.log(sold);

// function User(name, age) {
//     this.name = name;
//     this.age = age;

// }



// let user1 = new User("name", 25);
// let user2 = new User("name 1", 35);
// let user3 = new User("name 2", 45);
// console.log(user1, user2, user3);

// let user4 = User("name 4", 15); // неправильно
// //console.log(user4);


// function factorial(num) {
//     if (num <= 1) {
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }
// }
// factorial(7);



// let func = (a, b) => {
//     return a + b;
// };
// func(a, b);



// function sayHi(phrase, who) {
//     alert(phrase + ', ' + who);
// }
// setTimeout(sayHi, 1000, "Привет", "Джон");

// 2) setTimeout(() => alert('Привет'), 1000);




// let id = setTimeout(() => {
//     console.log("hello");
// }, 3000);

// setTimeout(() => {
//     console.log("clear");
//     clearTimeout(id);
//     setTimeout(() => {
//         console.log("next");
//     }, 1000);
// }, 1000);

// clearTimeout(id);




// let idInterval = setInterval(() => {
//     console.log("interval");
// }, 1000);
// setTimeout(() => {
//     clearInterval(idInterval)

// }, 5000);      

