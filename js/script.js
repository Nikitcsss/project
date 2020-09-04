const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '0');
      

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотрених фильмов?'),
      b = prompt('На сколько оценице его?'),
      c = prompt('Один из последних просмотрених фильмов?'),
      d = prompt('На сколько оценице его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);