// function load(scriptUrl, callback) {
//     let script = document.createElement('script');
//     scriptUrl = scriptUrl;

//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error('Ошибка загрузки'));

//     document.head.append(script);
// }

// load("script1.js", (error, script) => {
//     if (error) {
//         console.log("error");
//     } else {
//         console.log("loaded script 1");
//         load("script2.js", (error2, script2) => {
//             if (error2) {
//                 console.log("error");
//             } else {
//                 console.log("loaded script 2");
//                 load('script3.js', (error3, script3) => {

//                 })
//             }
//         });
//     }
// });

// const newPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('test');
//     }, 300);
// });

// newPromise.then((value) => {
//     console.log(value);

// })
//     .catch((error) => console.log("error"))
//     .finally(() => console.log("finally"))

// newPromise
//     .then((value) => {
//         console.log(value);
//         return "next" + value;
//     })
//     .then((nextValue) => {
//         console.log(nextValue);
//         return "next" + nextValue;
//     })
//     .then(() => { })
//     .catch((error) => console.log(error))
//     .finally(() => console.log("finally"));

// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//     new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(alert)
//     .catch((error) => console.log(error));

// Promise.race([
//     new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve) => setTimeout(() => resolve(3), 900)),
//     ]).then(alert);



// const asyncFonc = async () => {
//     let promise = new Promise((resolve) => setTimeout(() => resolve(2), 2000),
//         console.log('wait promise');
//         let value = await promise;
//     console.log(value);
// }

// asyncFunc();

// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//     .then(response => response.json())
//     .then(commits => console.log(commits));

// const asyncFunc = async () => {
//     let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')

//     console.log(response);
//     let date = await response.json();
//     console.log(date);
// };
// asyncFunc('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')

// // Методы HTTP запроса

// // Статусы HTTP запроса


// let str = JSON.stringify({ name: 'Oleg', age: 23 })
// console.log(str)


//1
// let getData = () => {
//     fetch("https://test-todoist.herokuapp.com/api/tasks")
//         .then((response) => response.json())
//         .then((data) => {
//             let ul = document.createElement("ul");
//             data.forEach((element) => {
//                 let liElement = document.createElement("li");
//                 liElement.innerText = element.description;
//                 ul.append(liElement);
//             });
//             document.body.append(ul);
//         });
// };

// getData();

// localStorage.setItem("key", 25);
// localStorage.setItem("user", JSON.stringify({ name: "Maks", age: 25 }));
// let user = JSON.parse(localStorage.getItem("user"));
// localStorage.removeItem("name");
// console.log(user);
// sessionStorage.setItem("sessionName", "sessionName");

// window.onstorage = function (event) {
//     console.log(event);
// }

// let name = localStorage.getItem("name");
// let block = document.getElementById("block");

// if (name) {
//     message.style.display = "block";
//     message.textContent = "Welcome " + name;
//     block.style.display = "none";
// } else {
//     let btn = document.getElementById("btn");
//     let input = document.getElementById("input");
//     let message = document.getElementById("message");

//     btn.addEventListener("click", () => {
//         localStorage.setItem("name", input.value);
//         message.style.display = "block";
//         message.textContent = "Welcome " + input.value;
//         block.style.display = "none";
//     });
// }