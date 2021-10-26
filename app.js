// const div = document.getElementById('div');
// console.log(div);

// div.addEventListener('click', function (event) {
//     console.log(event.clientX, event.clientY);
//     console.log(window.pageXOffset, window.pageYOffset);
//     console.log(this.offsetHeight, this.offsetWidth);
//     console.log(this.clientHeight, this.clientWidth);
//     console.log("Scroll height", this.scrollHeight, "Scroll width", this.scrollWidth);
//     console.log("Scroll left", this.scrollLeft, "Scroll top", this.scrollTop);
// });




// window.addEventListener('scroll', function () {
//     console.log(window.scrollY);

// });

// const div = document.getElementById('div');
// div.addEventListener('scroll', function () {
//     window.scrollBy(0, 200);
// });

// //3
// const button1 = document.getElementById("button1");
// const button2 = document.getElementById("button2");

// button1.addEventListener('click', function () {

//     window.scrollTo(0, 0);
// })

// button2.addEventListener('click', function () {

//     button2.scrollIntoView()
// })


// let person = {
//     name: 'Maks',
//     surname: 'Ivanov',
//     hello() {
//         console.log(this.name, this.surname);
//     },
//     helloArrow: () => {
//         console.log(this.name, this.surname);

//     },
// };
// person.hello();
// person.helloArrow();


let person1 = {
    name: 'John',
    age: 13,
    phone: '123'

    // sayIntro() {
    //     // alert(`${this.name}  ${this.age}`);
    // }

}
// person1.sayIntro();

console.log("name" in person1);
console.log("age" in person1);

for (let key in person1) {
    console.log(key, person1[key]);
    // console.log(Object.key.person1);

}

let car = {
    model: 'tesla',
    number: '6123'
};

let person1AndCar = Object.assign({}, person1, car)
console.log(person1AndCar);
