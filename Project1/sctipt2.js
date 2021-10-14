// 'use strict';
// let age = 29;
// console.log(typeof String(age));

// 'use strict';
// let age = 29;
// let agePhrase = 'My age' + age;



let num = '29'
console.log(typeof Number(num));

console.log(typeof +num);
console.log(num / 5);

let buul = 1;
console.log(Boolean(buul))
console.log(!!buul);

// alert('Hello');

// 'use strict';
// const name = prompt('What is your name?', 'Ivan');

// 'use strict';
// const isApprove = confirm('Open this site?');

'use strict';
let res = 1;
res = -res;
console.log(res - 5)

let res1 = 12;
let value = res1 ** 5;

let value1 = res1 % 5;
console.log(value1);
let result1 = 5;
let result2 = result1++;
let result3 = ++result1;
console.log(result1, result2, result3)
console.log(result1)


// console.log({} + [] + function {});

const age = 16;
if (age > 18) {

} else {

}

age > 18 ? console.log('ok') : console.log('no');

let st = 10;

if (st >= 6 && st < 11) {
    console.log(' > 6');

} else if (st === 10) {
    console.log('=== 10');
}
else {
    console.log('undefined');
}

// st === 6 && st === 9 ? console.log(' > 6')


let count = 11

if (count >= 10 && count <= 25) {
    console.log(true);
}
else {
    console.log(false);
}




// 'use strict';
// const name = prompt('password ?', "");

// let passwordCurrent = 123;

// if (password === passwordCurrent) {
//     alert('Пароль верный');

// } else if (password === passwordCurrent)
// else {
//     alert('Пароль не верный');
// }

// 'use strict';
// let i = 1;
// debugger;
// while (i < 5) {
//     i++;
//     if (i === 3) {
//         break;
//     }

//     alert(i);
//     i++;
// }
// 'use strict';

// for (let i = 0; i < 3; i++) {
//     alert(i)
// }

// let arr = [1, 2, 3, 4]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// let i = 0;

// while (i < 5) {    
//     alert(`number ${i}`);
//     i++;
// }

// for (let i = 0; i < 5; i++) {
//     alert(`number ${i}`);
// }

// let i = 0;
// while (i % 5 === 0 ) {
//     console.log(`number ${i}`);


// }


//Massive

let arr = [1, 2, 3];
let arr1 = new Array(1, 2, 3, 5, 6);
console.log(arr);

arr[2] = 'string';

for (let i = 0; i < 100; i++) {
    arr[1] = i;

}
console.log(arr);

// console.log(arr, arr(arr.length - 1));
// let arr2 = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 9, 4, 5],
//     [6, 7, 9, 4, 5],
// ];

// for (let x = 0; x < arr2.length; x++) {
//     for (let y = 0; y < arr2[x].length; y++) {

//     }
// }
// console.log(arr2[x][y]);

let arr3 = [1, 2, 3, 4, false];
console.log(arr3.toString(), arr3.valueOf());

console.log(arr3.join("|"));

arr3.push(1, 3, 5, 6);
console.log(arr3);

let remouve = arr3.pop(1, 3, 5, 6);
console.log('avter remouve', arr3, remouve);

let remouveFirst = arr3.shift(1, 15, 5, 6);
console.log('avter remouve', arr3, remouveFirst);

let remouveFirst1 = arr3.unshift(1, 33, 5, 96);
console.log('avter remouve', arr3, remouveFirst1);

let arr4 = [1, 12, 31, 42, 5, 5, 7];
console.log('reverse', arr4.reverse());
console.log('sort', arr4.sort());

arr4.concat
console.log('concat', arr4.concat([2, 4]));

console.log('copy from 0 to 4', arr4.slice());

console.log('delete elem 0.1', arr4, arr4.slice(0, 2));

// console.log('insert into array', arr4.slice(0, 2 'inserted), arr4);

// console.log('insert into array', arr4.slice(2, 0 'insert'()));

let arr6 = [0, 0, 0, 0, 0, 0];
for (let i = 0; i < arr6.length; i++) {
    arr6[i] = 5 * i;

}
let sum = 0;
for (let i = 0; i < arr6.length; i++) {
    sum += arr6[i];
}
console.log(sum / arr6.length);

console.log(arr[arr.length - 1]);

let arr7 = [1, 2, 0, 5, 6, 7]

console.log('предп. эл.', arr7[arr7.length - 2]);

arr7[arr7.length - 2] = 'предп. эл.'

console.log(arr7)


let styles = ['Джаз', 'Блюз'];
console.log(styles);
styles.push('Рок-н-Рол');
console.log(styles);
styles[styles.length - 2] = 'Классика'
console.log(styles);
styles.shift();
// alert(styles);
styles.unshift('Рэп', 'Рэгги');
console.log(styles);

let arr8 = [1, 2, 3, 4, 5, 6];
let result = arr8.find(function (value, index) {
    if (value === 3) {
        return value;
    }
});
console.log(result);

let filteredArray = arr8.filter((value) => value > 3)
arr.forEach(function (value) {
    console.log(value);
})
console.log(filteredArray);

const changeArr = arr8.map(function (value) {
    return value % 2 ? value + 10 : value - 10;
    console.log(value);
});
console.log(changeArr);


const resultSumm = arr8.reduce(function (accum, value) {
    return accum + value;
}, 0);
console.log(resultSumm);


// function myMessage() {
//     alert('Привет')
// }
// myMessage()
// myMessage()

// const display = function(){
//     document.write("function in js");
// };
// display()

// const func = function( a = 'default', b = {satus: 'loading'}){
//     console.log(a, b);
//     return {
//         a,
//         b
//     };
// };
// let obj = func(undefined, {status: 'completed'});

// const func = function( a = 'default', b = {satus: 'loading'}){
//     console.log(a, b);
//     return function (c){
//        console.log('Hello');
//     };
// };
// let InnerFunc = func(undefined, {status: 'completed'});

// let calculateSum = function(arr){
//     let sum = 0;
//     arr.forEach((item) => {
//         sum += item;
//     });
//     return sum;
//     };
// console.log(calculateSum[1,2,3,4]);

// const arrFun = (a,b) => {}

// function googMorning(a,b){
//    console.log('googMorning')

// }

// function googNight(a){
//     console.log('googNight')

//  }
//  let message = googMorning;
//  message();
//  message = googNight;
//  message ();

//  let test = (func) => {
//      func();

//  }; 
// let paramFunc = () => {
//     console.log('paramFunc');
// };
// test(paramFunc);

// const mapFunc = (item) => {
//     return item + 1;
// }
// [1,2,3,4].map(mapFunc);


//  function display(x) {
//      const z = x
//  }

// const x = 5;
// function square(){
//     const z = x * x;
//     console.log(z);
// }
// console.log(square());

// const x = 5;
// function square(){
//     let y = 5;
//     return x * x;
// }
// console.log(square());

// const a = 5;
// function square1(){
//     let a = 15;
//     function inner(){
//         console.log(a * a);
//     }
//     inner();
// }
// square1();

// // console.log(window);

// let color = 'blue';
// function changeColor(){
//     let anotherColor = 'red';
//     function swapColor(){
//         const tempColor = anotherColor;
//         anotherColor = color;
//         color = tempColor;
//     } 
//     swapColor();
// }
// changeColor();


// const summ = (arg1, arg2) => arg1 + arg2


// let a = 2+2;
// switch (a){
//     case 3:{
//         console.log('im 1');
//         break;

//     }
//     case 2:{
//         console.log('im 2');
//         break;
//     }
//     case 5:{
//         console.log('im 5');
//         break;
//     }
//     case 4:{
//         console.log('im 4);
//         break;
//     }
//     default:{
//         console.log('im 0');
//         break;
//     }
// }

// const sayHallo = (name) => {
//     if (name === 'Mark'){
//     console.log("Hi " + name)
// } else {
//     console.log("Hi " + name)
// }
// }

// sayHallo('Alex');
// sayHallo('Mark');
// sayHallo('Andry');




function min(a, b) {
    if (a < b) {
        return a;

    } else {
        return b;
    }

}
min(2, 5);
min(3, -1);
min(1, 1);

console.log(min(2, 5));



function pow(x, n) {
    let result = (x ** n);
    return result
}
console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));



function isEven(d) {
    if (d % 2 == 0) {
        return true;
    } else {
        return false;
    }

}

console.log(isEven(4));
console.log(isEven(5));