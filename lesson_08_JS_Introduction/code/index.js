//Метод console.log() выводит сообщение(или переданные данные) в консоль
// console.log("JS work");

// console.log("JS work 2");

//ПЕРЕМЕННЫЕ
// Изменяемые переменные (let)
//объявление переменной
let userName;
//присваивание значения
userName = "Tom";
// console.log(userName);

//изменение значения переменной
userName = "Bob";
// console.log(userName);

// Копирование значения переменной
let customerName = userName;
// console.log(customerName);
// console.log(userName);

// Неизменяемые переменные (const)
const message = "Hello";
// console.log(message);

//Переназначение значения константы (ошибка)
// message = "Hello, Tom";
// console.log(message);

const newName = customerName;
// console.log(newName);
// newName = "Mary";

//Имена для переменных
let test = "test";
// let test;
// let 1test;
let a_1;

// ТИПЫ ДАННЫХ
// 1. String
let name = "John";

// 2. Number
let year = 1998;
let price = 34.5;
let inf = Infinity;
let exampleEr = NaN;

// 3. BigInt
let big = 900719925474099111n;

// 4. Boolean
let isAdmin = true;

// 5. Null
let emptyValue = null;

// 6. undefined
let data = undefined;

// 7. Symbol
let sym = Symbol();
// console.log(sym);

// 8. Object (объекты, массивы, функции)
let userData = {
  userName: "Nick",
};

let testType = typeof userData;
console.log(testType);