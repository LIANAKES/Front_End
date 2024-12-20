//---ИЗМЕНЕНИЕ СОДЕРЖИМОГО ЭЛЕМЕНТОВ
//c помощью свойства textContent
const mainTitle = document.getElementById("main-title");
console.log(mainTitle.textContent);
mainTitle.textContent = "Main title";

//c помощью свойства innerHTML
const cardTitle = document.getElementById("card-title");

let avatarImg = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

cardTitle.innerHTML = `
  <a href='' target='_blank'>Profile link</a>
  <img src=${avatarImg}>
`;

//изменение стилей
const root = document.getElementById("root");

root.style.background = "bisque";

//удаление элемента
const lastElement = document.getElementById("last-element");
lastElement.remove();

//----ОБРАБОТКА СОБЫТИЙ
//--обработка события нажатия на кнопку
const addButton = document.querySelector(".add-button");
const hideButton = document.querySelector(".hide-button");
const card = document.getElementById("card-container");

//функции обработки событий
const hideCard = () => {
  card.style.opacity = "0";
  // card.style.display = "none";
};

const addCard = () => {
  card.style.opacity = "1";
  // card.style.display = "flex";
};

//привязка функций к обработчикам событий
hideButton.addEventListener("click", hideCard);
addButton.addEventListener("click", addCard);

//--обработка события изменения значения в поле
const searchField = document.getElementById("input-search");

//функция обработки события
const changeSearch = (event) => {
  console.log(event.target.value);
  console.log(event.type);
};

//привязка функции к обработчику события
searchField.addEventListener("change", changeSearch);