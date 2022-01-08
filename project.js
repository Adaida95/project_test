// "use strict";

// let numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?");

// const personalMovieDB = {
// count:numberOfFilms,
// movies: {},
// actors: {},
// genres: [],
// privat: false
// };

// let oldFilm = prompt("Один из последних просмотренных фильмов?");
// let rt = prompt("На сколько оцените его?");

// const movies = {
//     oldFilm: oldFilm,
//     rt: rt
// };
 
// console.log(personalMovieDB.count);
// console.log(movies.oldFilm);
// console.log(movies.rt);

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = +b;
personalMovieDB.movies[c] = +d;

console.log(personalMovieDB);
