//методы строк
let stringExample = "PlEase select  age";
console.log(stringExample.length);
console.log(stringExample.toUpperCase());
console.log(stringExample);
console.log(stringExample.toLowerCase());
// первый параметр метода - index первого символа подстроки(включительно),
//второй - index последнего символа подстроки(невключительно)
// console.log(stringExample.substring(1,6));
let subString = stringExample.substring(1, 26);
console.log(subString.length);

//если искомой подстроки нет, тогда возвращается -1
console.log(stringExample.indexOf("ape"));

//split - разделяет строку на массив, по выбранному разделителю
let str = "Hello, JS";
// let strArr = str.split(' ');
let strArr = str.split("");
console.log(strArr);

//функции

//Function declaration
console.log(getSum(3, 5));

function getSum(x, y) {
  let result = x + y;
  return result;
}

// let sum = getSum(3, 4);
// console.log(sum);

// Function expression
// showMessage("Bob");

let message = "Hello";

let showMessage = function (name = "user") {
  let message = `Hello, ${name}`;
  console.log(message);
};

// showMessage('Tom');
// showMessage('Mary');
showMessage();
console.log(message);

//стрелочная функция
//только для однострочных функций
// let getDivide = n => n / 2;
let getDivide = (n) => {
  return n / 2;
};
let resultDivide = getDivide(6);
console.log(resultDivide);

//передача функции в качестве аргумента для другой функции(callback function - функция обратного вызова)

// let showOperationResult = (x, y, operationFunc) => console.log(`Результат вашей операции: ${operationFunc(x, y)}`);

let showOperationResult = (x, y, operationFunc) => {
  let result = operationFunc(x, y);
  console.log(`Результат вашей операции: ${result}`);
};

let add = (a, b) => a + b;
let divide = (c, d) => c / d;

showOperationResult(4, 8, add);
showOperationResult(6, 3, divide);

// hoisting (поднятие переменных), var - устаревший способ для создания переменных (изменяемых)
console.log(z);

let x = 2;
const y = 3;
var z = 4;

//циклы с var
for (var i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i);
