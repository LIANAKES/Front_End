//map - выполняет функцию для каждого элемента массива (немутирующий метод)
const animals = ["cat", "dog", "hourse"];

//метод map принимает в качестве аргумента функцию callback
//Функция callback имеет 3 параметра
//1-й параметр - элемент массива
//2-й параметр - индекс элемента массива
//3-й параметр - исходный массив

animals.map((item, index, array) => {
  console.log(
    `Элемент массива ${item}, с индексом ${index}, из массива ${array}`
  );
});

//метод map возвращает новый массив, в соответсвий с тем, что будет возвращено в функции callback
const animalsNameLength = animals.map((animal) => {
  return animal.length;
});

console.log(animalsNameLength);
console.log(animals);

//forEach - выполняет функцию для каждого элемента массива (немутирующий метод), но в отличии от map, вызов метода forEach ничего не возвращает
//метод forEach принимает в качестве аргумента функцию callback
//Функция callback имеет 3 параметра
//1-й параметр - элемент массива
//2-й параметр - индекс элемента массива
//3-й параметр - исходный массив

const list = document.querySelector("#list");
const addStyleButton = document.querySelector("button");

const cars = ["BMW", "Tesla", "Toyota", "Aston Martin"];

cars.forEach((car) => {
  const listItem = document.createElement("li");
  listItem.textContent = car;
  list.append(listItem);
});

//добавление стилей для списка
const addStyles = () => {
  list.setAttribute("class", "style-list");
};

addStyleButton.addEventListener("click", addStyles);

//filter - метод для фильтрации исходного массива.
//Этот метод возвращает новый массив, но только с элементами которые прошли проверку (заданное условие вернуло true)
// принимает функцию callback со всеми тремя базовыми параметрами
// немутирующий метод
const products = [
  { productName: "Milk", price: 7 },
  { productName: "Bread", price: 5 },
  { productName: "Eggs", price: 8 },
  { productName: "Grape", price: 10 },
];

//Задача: сформировать новый массив в котором будут только те продукты, стоимость которых не превышает 8
// const filteredProducts = products.filter((product) =>{
//   return product.price <= 8
// });

const filteredProducts = products.filter((product) => product.price <= 8);
console.log(filteredProducts);
console.log(products);

//reduce - возвращает определенное значение, нас основе заданного массива
const numbersArray = [10, 5, 9, 3];

const sum = numbersArray.reduce((accumulator, number) => {
  console.log(accumulator);
  console.log(number);

  return accumulator + number;
}, 0);

console.log(sum);


