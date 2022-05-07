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
console.log(counterFn2());

// 

function sum(a) {

    return function (b) {
        return a + b; // берёт "a" из внешнего лексического окружения
    };

}

// 

console.log(sum(1)(3)); // 4
console.log(sum(801)(-1)); // 800

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

console.log(typeof NaN);
console.log("a" > "b");

function foo(a, b) {
    const [first, second] = a;
    const {
        ru,
        eng
    } = b;

    return `${first} ${eng}`;
}

const result = foo(['Hello', 'Привет'], {
    ru: 'Мир',
    eng: 'World',
});

console.log(result);

// Упражнение 29 (задания)
// а)
// Место для первой задачи

function calculateVolumeAndArea(cubeEdge) {
    if (typeof (cubeEdge) === 'number' && cubeEdge > 0 && cubeEdge % 1 === 0) {
        return `Объем куба: ${cubeEdge * cubeEdge * cubeEdge}, площадь всей поверхности: ${cubeEdge * cubeEdge * 6}`;
    } else {
        return 'При вычислении произошла ошибка';
    }
}

console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea('15'));
console.log(calculateVolumeAndArea(-15));
console.log(typeof ('-15') === 'number');

// Место для второй задачи
function getCoupeNumber(place) {
    if (typeof (place) !== 'number' || place < 0 || place % 1 !== 0) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else if (place === 0 || place > 36) {
        return 'Таких мест в вагоне не существует';
    } else {
        return Math.ceil(place / 4);
    }
}

console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber('Hello'));

// // Упражнение 29 (задания)
// б)

function getTimeFromMinutes(minutesTotal) {
    if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
        case 21:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
        case 24:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

console.log(getTimeFromMinutes(180));
console.log(getTimeFromMinutes(1260));

function findMaxNumber(a, b, c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof (a) !== 'number' ||
        typeof (b) !== 'number' ||
        typeof (c) !== 'number' ||
        typeof (d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}

console.log(findMaxNumber(1, 5, 6.6, 10.5));
console.log(findMaxNumber(1, 5, '6', '10'));


// // Упражнение 29 (задания)
// в)
function fib(num) {
    if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }
    let str = '0',
        num1 = 0,
        num2 = 1,
        temp1;
    for (let i = 2; i <= num; i++) {
        str += ' ' + num2;
        temp1 = num1;
        num1 = num2;
        num2 += temp1;
    }
    return str;
}

console.log(fib(4));
console.log(fib(7));
console.log(fib('7'));
console.log(fib(0));
console.log(fib(''));
console.log(fib(-7));
console.log(fib(3.3));
console.log(fib(30));

// Упражнение 41. Задачи с собеседований на понимание основ

//Какое будет выведено значение: 5
let x1 = 5;
// alert(x1++);
console.log(x1++);

//Чему равно такое выражение: NaN
// [] + false - null + true;
console.log([] + false - null + true);

//Что выведет этот код: 2
let y = 1;
let x = y = 2;
// alert(x);
console.log(x);

//Чему равна сумма: "12"
// [] + 1 + 2;
console.log([] + 1 + 2);
console.log(typeof ([] + 1 + 2));

//Что выведет этот код: "1"
// alert("1" [0]);
console.log("1" [0]);
console.log(typeof "1" [0]);

//Чему равно: null
// 2 && 1 && null && 0 && undefined;
console.log(2 && 1 && null && 0 && undefined);

//Есть ли разница между выражениями? ДА
// !!(a && b) и (a && b);
// let a = true,
//     b = false;
let a = 1,
    b = 2;
console.log(!!(a && b));
console.log((a && b));
console.log(!!(a && b) === (a && b));

//Что выведет этот код: 3
// alert(null || 2 && 3 || 4);
console.log(null || 2 && 3 || 4);

//Правда ли что a == b ? нет
const a1 = [1, 2, 3];
const b1 = [1, 2, 3];
console.log(a1 == b1);

//Что выведет этот код: infinity
// alert(+"Infinity");
console.log(+"Infinity");

//Верно ли сравнение: нет
// "Ёжик" > "яблоко";
console.log("Ёжик" > "яблоко");

//Чему равно: 2
// 0 || "" || 2 || undefined || true || falsе;
console.log(0 || "" || 2 || undefined || true || falsе);

// Упражнение 41.а

const restorantData = {
    menu: [{
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [{
        name: 'Alice',
        age: 22
    }, {
        name: 'John',
        age: 24
    }],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    // const dataStr = JSON.stringify(data);
    // const copy = JSON.parse(dataStr);
    const copy = Object.assign({}, data);

    copy.menu = copy.menu.slice();
    copy.waitors = copy.waitors.slice();

    // copy.menu.forEach(element => {
    //     element = Object.assign({}, element);
    // });

    // copy.waitors.forEach(element => {
    //     element = Object.assign({}, element);
    // });

    // Нам просто нужно менять весь массив данных,
    // а не лезть напрямую менять каждого из сотрудников
    // Так как это верхний уровень объекта, то значение 
    // будет меняться только у копии

    copy.waitors[0] = {
        name: 'Mike',
        age: 32
    };
    return copy;
}

transferWaitors(restorantData);

console.log(transferWaitors(restorantData));
console.log(restorantData);


// --------------------------------------------------------------------------------- мои пробы

let arr = [1, 2, 5];

// начиная с индекса -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4

arr.splice(-1, 0, 3, 4);
console.log(arr); // 1,2,3,4,5

arr.splice(-3, 2, 99, 100);
console.log(arr); // 1,2,3,4,5

arr.splice(-1, 1);
console.log(arr); // 1,2,3,4,5

arr.splice(-2, 2, 3, 4, 5);
console.log(arr); // 1,2,3,4,5

//[ 1, 2, 3, 4, 5 ]
console.log(arr.slice(1, 3)); // 2, 3 (копирует с 1 до 3)
console.log(arr.slice(-2)); // 4, 5 (копирует с -2 до конца)

console.log(arr.slice(0)); // (копирует с 0 до конца)
console.log(arr.slice(0, arr.length)); // (копирует с 0 до конца)
console.log(arr.slice()); // (копирует с 0 до конца)
console.log(arr.slice(-5, 5)); // (копирует с 0 до конца)
console.log(arr.slice(-5, 0)); // (копирует с 0 0 элементов)
console.log(arr.slice(-5, 5).reverse()); // (копирует с 0 до конца, затем реверс)