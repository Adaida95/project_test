'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' ||numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
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


 function detectPersonalLevel() {
    (personalMovieDB.count <10) ? alert("Просмотрено довольно мало фильмов") : 
    (personalMovieDB.count >=10 && personalMovieDB.count <=30) ? alert("Вы классический зритель") :
    (personalMovieDB.count >=31) ? alert("Вы киноман"): alert("Произошла ошибка" ) ;
 }

 detectPersonalLevel();

 
function rememberMyFilms(){

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
       
}

rememberMyFilms();


function writeYourGenres () {
    for(let q=1; q<4; q++){          
        const z = prompt(`Ваш любимый жанр под номером ${q}`, '');
        personalMovieDB.genres[q-1] = z;           
    }
}

writeYourGenres();


function showMyDB() {
    if(personalMovieDB.privat==false){
        console.log(personalMovieDB);
    }
}

showMyDB();


