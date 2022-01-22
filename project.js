'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(personalMovieDB.count == '' ||personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
},
    rememberMyFilms: function() {

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
    },

    detectPersonalLevel: function () {
        (personalMovieDB.count <10) ? alert("Просмотрено довольно мало фильмов") : 
        (personalMovieDB.count >=10 && personalMovieDB.count <=30) ? alert("Вы классический зритель") :
        (personalMovieDB.count >=31) ? alert("Вы киноман"): alert("Произошла ошибка" ) ;
     },

     showMyDB: function() {
        if(personalMovieDB.privat==false){
            console.log(personalMovieDB);
        }
    },
    
    toggleVisibleMyDB: function () {
        if(personalMovieDB.privat==false)
        {
            personalMovieDB.privat = true; 
            console.log(personalMovieDB);     
    
        } else {
                personalMovieDB.privat = false;    
            }
    
        
    },
    writeYourGenres: function () {    
        for(let q=1; q<4; q++){          

           let z = prompt(`Ваш любимый жанр под номером ${q}`, '');   
    
            if(z == ' ' || z == null )  {
             q--;
            } else {
                personalMovieDB.genres[q-1] = z; 
            }   
                 
        }  
        personalMovieDB.genres.forEach( function (item, i){
            console.log (`Любимый жанр ${i+1} - это ${item}`);
        } );  
    }
    
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();


