//ОПЕРАТОРЫ СРАВНЕНИЯ
// значения приводятся к числам
console.log("12" < "13");
// в данном случае будет true, сравнение по первой букве. T в unicode - 84, B-66
console.log("Tom" >= "Bob");
console.log(123 < "124");
console.log(true > false);

//строгое(===) и нестрогое равенство(==)
// сначала происходит приведение типов, затем сравнение
console.log(12 == "12"); //true
// не происходит приведение типов и если типы разные, то сразу будет false
console.log(12 === "12"); //false

console.log(0 == false); //true
//c этим оператором null не приводится к 0
console.log(0 == null); //false
console.log(0 == undefined); //false

//нестрогое не равно (!=) и строгое не равно (!==)
console.log(0 != false); //false
console.log(0 !== false); //true

//УСЛОВНЫЕ ОПЕРАТОРЫ
// let age = prompt("Сколько вам лет?");

// if (age >= 18) {
//   alert("Вход разрешен");
//   console.log(typeof age);
// } else if (age === null) {
//   prompt("Вы отменили ввод, повторите ещё раз");
// } else if (age < 18) {
//   alert("Вход запрещен");
// } else {
//   alert("Неккоректный ввод");
//   prompt("Введите данные ещё раз");
// }

//тернарный оператор (условный оператор)

let isAdmin = false;

let message = isAdmin ? "Привет, админ" : "Привет";
console.log(message);

let year = 2025;
let userMessage =
  year <= 2024
    ? "Вы ввели правильный год"
    : "Год, который вы ввели, ещё не наступил";
console.log(userMessage);

//ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
let age = 18;
let hasDrivingLicense = true;
let isSick = true;

//оператор И (true - только если все условия истинны)
// if (age >= 18 && hasDrivingLicense) {
//   console.log("You can drive a car");
// } else {
//   console.log("You can`t drive a car");
// }

//оператор И (true - только если все условия истинны), оператор НЕ (!)
if (age >= 18 && hasDrivingLicense && !isSick) {
  console.log("You can drive a car");
} else {
  console.log("You can`t drive a car");
}

//оператор ИЛИ (true - если хотя бы одно из условий истинна)
let userAge = 16;
let isAuth = false;

if (userAge >= 18 || isAuth) {
  console.log("Сайт разблокирован");
} else {
  console.log("Сайт заблокирован");
}

//КОНСТРУКЦИЯ SWITCH CASE
let randomNumber = prompt(
  "Введите число от 1 до 7, которое будет соответствовать дню недели"
);
let dayOfWeek;

switch (randomNumber) {
  case "1":
    dayOfWeek = "Monday";
    break;
  case "2":
    dayOfWeek = "Tuesday";
    break;
  case "3":
    dayOfWeek = "Wednesday";
    break;
  case "4":
    dayOfWeek = "Thursday";
    break;
  case "5":
    dayOfWeek = "Friday";
    break;
  case "6":
    dayOfWeek = "Saturday";
    break;
  case "7":
    dayOfWeek = "Sunday";
    break;
  default:
    dayOfWeek = "Invalid day";
}

alert(dayOfWeek);