//----Выбор элементов
//по ID
let cardContainer = document.getElementById("card-container");
console.log(cardContainer);

//селектор - querySelector
let listElement = document.querySelector("#last-element");
console.log(listElement);

let listEl = document.querySelector("li");
console.log(listEl);

//селектор - querySelectorAll
let listItems = document.querySelectorAll("li");
console.log(listItems);

//Добавление элементов на страницу
//Шаг 1 - Создание элемента(метод createElement)
let newListItem = document.createElement("li");
//Шаг2 - Заполнение контентом (textContent)
newListItem.textContent = "Surname: Smith";
//Шаг3 - Выбираем элемент на странице, к которому мы привязываемся для расположения нового элемента на странице
let list = document.querySelector("ul");
//Шаг4 - Добавлем элемент на странице с помощью различных методов
// list.before(newListItem);
// list.after(newListItem);
// list.prepend(newListItem);
list.append(newListItem);




