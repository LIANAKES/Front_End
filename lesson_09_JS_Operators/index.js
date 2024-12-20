// alert
// alert("Вы успешно вошли");

// promt
// let age = prompt('Введите свой возраст', 21);
// console.log (age);

// confirm
// let isAdmin = confirm ("Вы администратор!");
// console.log(isAdmin);

// Шаблонные строки
let age = 23;
let message = `Ваш возраст: ${age}`
console.log(message);

// математические операторы
let x = 13;
let y = 2;

// сложение
let result = x + y;
console.log(result);

// вычитание
console.log(x - y);

// умножение
console.log(x*y);
console.log(`результат умножения: ${x*y}`);

// деление
console.log(x/y);

// остаток от деления
console.log(x%y);

// проверка четности числа
console.log(x%2);
console.log(300 % 2);

// возведение в степень
console.log(x ** y);

// ПРЕОБРАЗОВАНИЕ ТИПОВ
let userName = "Bob";
console.log(userName + 3);
console.log(userName +2 +3);
console.log(userName + true);
console.log(userName + " " + null);

// работа с остальными операторами
console.log("12" - 3);
console.log(3 - 'Tom');
// true - 1, false - 0
console.log(true - 2);
console.log(false - 2);
console.log(true - false);
// операции с defined приводят к NaN
console.log(undefined - 3);
// null - преобразуется в 0
console.log(3 - null);

// Преобразование типов с помощью встроенных методов
// let newString = String(-23); // '-23'
let newString = String(undefined)
console.log(newString);
console.log(typeof newString);

// let newNumber = Number('Mary'); //NaN
// let newNumber = Number(undefined) //NaN
// let newNumber = Number(null) // 0
let newNumber = Number(true);
console.log(newNumber);
console.log(typeof newNumber);

// let newBoolean = Boolean('Hi'); // true
// let newBoolean = Boolean(''); // false
// let newBoolean = Boolean(' '); // true
// let newBoolean = Boolean(-123); // true
// let newBoolean = Boolean(0); // false
// let newBoolean = Boolean(NaN); // false
// let newBoolean = Boolean(null); // false
let newBoolean = Boolean(undefined); //false

console.log(newBoolean);
console.log(typeof newBoolean);






