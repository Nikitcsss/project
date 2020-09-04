"use strict";


let numberOfFilms;    

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i =  0; i < 3; i++) {
        const a = prompt('Один из последних просмотрених фильмов?', ''),
              b = prompt('На сколько оценице его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
            i++;
        } else {
            console.log('error');
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if(personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

rememberMyFilms();

function writeYourGenres() {
    for (let i = 0; i <= 2; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    }
}

writeYourGenres();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);    
    }
}

showMyDB(personalMovieDB.privat);




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