"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if(personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if(personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    writeYourGenres() {
        for (let i = 1; i <= 2; i++) {
            let genres = prompt(`Введите ваши любимые жанры через кому`).toLowerCase();

            if (genres == null, genres === '') {
                console.log('Вы ввели некоректные данные или ничего не ввели');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
            }
        }    
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Любимый жанр ${index + 1} - это ${item}`);
        });
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);    
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
