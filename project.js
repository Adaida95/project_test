'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//1 вариант
// if(personalMovieDB.count <10 ){
//     alert("Просмотрено довольно мало фильмов");  
// } 
//  else if (personalMovieDB.count >=10 && personalMovieDB.count <=30) {
//     alert("Вы классический зритель");
//  }
//  else if ( personalMovieDB.count >=31) {
//     alert("Вы киноман");
//  }
//     else {
//         alert("Произошла ошибка");
//         }

//2 вариант
 (personalMovieDB.count <10) ? alert("Просмотрено довольно мало фильмов") : 
 (personalMovieDB.count >=10 && personalMovieDB.count <=30) ? alert("Вы классический зритель") :
 (personalMovieDB.count >=31) ? alert("Вы киноман"): alert("Произошла ошибка" ) ;


 //1 вариант
for (let i=0; i<2; i++) {
 const  a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
  
    if(a != '' && b != '' && a != null && b != null && a.length < 50 ){ 
    personalMovieDB.movies[a] = b;
    }   
    else {
        i--;
    }     
}

//2 вариант
// let i = 0;
// while(i < 2) {
//     const  a = prompt('Один из последних просмотренных фильмов?', ''),
//            b = prompt('На сколько оцените его?', '');

//     if(a != '' && b != '' && a != null && b != null && a.length < 50 ){ 
//     personalMovieDB.movies[a] = b;
//     i++;
//     }   
//     else {
//         i--;
//     }   
// }

console.log(personalMovieDB);
