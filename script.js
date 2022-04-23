/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '');
        const b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != '' && b != '' && b.length <= 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

// const obj = new Object();
const obj = {
    name: 'Nick',
};

delete obj.name;
console.log(obj.name);

// Closure
function fn1() {
    let counter = 0;

    function fn2() {
        return ++counter;
    }
    return fn2;
}

const counterFn = fn1();
console.log(counterFn());
console.log(counterFn());
console.log(counterFn());

// Closure - 2
// «immediately-invoked function expressions» (аббревиатура IIFE), что означает функцию, запускаемую сразу после объявления
const counterFn2 = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    };
})();

console.log(counterFn2());
console.log(counterFn2());
console.log(counterFn2());

// 

function sum(a) {

    return function (b) {
        return a + b; // берёт "a" из внешнего лексического окружения
    };

}

// 

console.log(sum(1)(3)); // 4
console.log(sum(5)(-1)); // 4

// 

let arr = [3, 5, 1];
console.log(...arr);
console.log(Math.max(...arr)); // 5 (оператор "раскрывает" массив в список аргументов)


//
const counterFn2 = (function () {
    let counter = 0;
    return () => ++counter;
})();

console.log(counterFn2());
console.log(counterFn2());
console.log(counterFn2());

// Closure with arrow functions
const counterMy = (() => {
    let counter = 0;
    return () => ++counter;
})();

console.log(counterMy());
console.log(counterMy());
console.log(counterMy());