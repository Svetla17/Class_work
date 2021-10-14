

let message = 'message';
let func = function () {
    let value = 0;
    function showDate() {
        console.log(value, message);
    }
    showDate();
};
func();

//_____________________________


let counter = function () {
    let value = 0;

    return function () {
        value += 1;
        console.log(value);
    };
};
let makecounter = counter();
makecounter();
makecounter();


console.log("_____________");
let makecounter2 = counter();
makecounter2();
makecounter2();
makecounter2();
makecounter2();
makecounter2();


//____________________________


let adder = (a) => (b) => console.log(a + b);

let add5 = adder(5);
adder(6);
adder(3);

let add10 = adder(10);
add10(5);
add10(10);

//_______________________________________________


//    DOM


console.log(document.title);

document.title = "Welcome, I'm document";

console.log(document.title);

console.log(document.URL);
console.log(document.domain);
console.log(document.referrer);


let divId = document.getElementById("div");
// let divClass = document.getElementByClassName("class");
// let imput = document.getElementByTagName("imput");

let element = document.querySelector("div");
let elements = document.querySelectorAll(".class > div");

// console.log(divId, divClass);

console.log(element);
console.log(elements);

console.log(divId);
// console.log(divClass);
// console.log(imput);


