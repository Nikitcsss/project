"use strict";

const arr = [1, 2, 3, 4, 5];

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; ") + '.');

// const dict = {
//     name: 'Will',
//     age: 18,
//     genres: {
//         name: 'Comedy',
//         old: true
//     }
// }; 

// for (let key in dict) {
//     if (typeof(dict[key]) === 'object') {
//         for (let i in dict[key]) {
//             console.log(`${i} - ${dict[key][i]}`);
//         }
//     } else {
//         console.log(`${key} - ${dict[key]}`);
//     }
// }

// console.log(Object.keys(dict).length);



// for (let i in arr){
//     console.log(i);
// }
// for (let i of arr){
//     console.log(i);
// }
// arr.forEach(function (item, i , arr) {
//     console.log(`Индекс элемента '${item}' равен ${i} в массиве ${arr}`);
// });

// let numberOfFilms;    

// const mlist = [1, 3, 5, 6, 7, 9, 10, 6, 5, 7];

// function process(a) {
//     return (a <= 6);
// }

// function filter(func, arr) {
//     const len = arr.length - 1;

//     let y = 0;
//     let trueList = [];
    
//     for (let i = 0; i <= len; i++) {
//         let obj = arr[i];
//         if (func(obj) == true) {
//             trueList[y] = obj;
//             y++;
//         }
//     }
//     return trueList;
// }

// let result = filter(process, mlist);
// console.log(result);




// const increment = createCounter();//содержит определение функции myFuncion(только содержание функции, 
//                                   //но не место опредеоения)
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// function createCounter() {
//     let counter = 0;
//     function myFunction() {
//         counter = counter + 1;
//         return counter;
//     }
//     return myFunction;
// }

// console.log(c1, c2, c3);