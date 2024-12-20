//-----OBJECTS
//объекты - коллекция данных, неупорядоченная. Объект содержит пары ключ - значение (разделение через :)
//создание пустого объекта
let emptyUserData = {};
// console.log(emptyUserData);

//создание объекта с данными (свойствами)
let person = {
  userName: "Bob",
  age: 23,
  isAdmin: false,
};

// console.log(person);

//добавление нового свойства
emptyUserData.name = "Tom";
// console.log(emptyUserData);

//изменение свойства объекта
person.isAdmin = true;
// console.log(person);

//получение значения свойства из объекта
// console.log(person.userName);
let userName = person.userName;
// console.log(userName);
// console.log(person);
userName = "Mary;";
// console.log(userName);
console.log(person);

//удаление свойства из объекта
delete person.age;
console.log(person);

//брекет синтаксис
let user = {
  ["likes bird"]: true,
};

console.log(user["likes bird"]);

//с помощью брекет синтаксиса можно подставлять переменные вместо ключей
let key = "userName";
console.log(person[key]);

//оператор in - позволяет проверить, есть ли свойство в объекте
let animalData = {
  animalName: "Monkey",
  age: 4,
  city: "Berlin",
};

//возвращает undefined, если свойство отсутствует
// console.log(animalData.city);

let checkKey = "city";
if (checkKey in animalData) {
  console.log(`Искомое значение свойства: ${animalData[checkKey]}`);
} else {
  console.log(`Свойство с ключем ${checkKey} не найдено`);
}

//перебор ключей объекта с помощью оператора for in
for (let key in animalData) {
  console.log(typeof key);
  console.log(key);
  console.log(animalData[key]);
}
// animalData['city']

//сложная структура объекта
let bookStore = {
  shopName: "Books",
  booksList: [
    { price: 20, bookName: "Book1" },
    { price: 22, bookName: "Book2" },
  ],
  showSlogan: () => {
    console.log("Book world");
  },
};

console.log(bookStore);
console.log(bookStore.booksList[1].bookName);
bookStore.showSlogan();

//Reference type (ссылочный тип данных: объекты, массивы и функции)
// const userAge = 40;
// const age = userAge;
// console.log(userAge);
// console.log(age);
// age = 41;
// console.log(userAge);
// console.log(age);

const customer = {
  customerName: "Nokia",
};
const seller = customer;
console.log(customer);
console.log(seller);

seller.customerName = "Tesla";
console.log(customer);
console.log(seller);

//удаление объекта 
//(все ссылки на удаляемый объект должны быть перезаписаны на null или undefined)
//в таком случае при создании seller и customer, создаём их с помощью let, во всех остальных можно использовать const
// seller = null;
// customer = null;



