// - Вы получили массив с ценами на товар (создайте переменную, в которой будет храниться массив). Значения массива [100, 400, 900, 300, 500].
// - Необходимо отобразить каждый из элементов массива на странице в отдельном блоке
// - Стилизация на ваше усмотрение

// Дополнительная задача:
// Создайте кнопку "Filter", при нажатии на которую на странице будут отображаться только блоки с ценами > 450

const priceContainer = document.querySelector(".prices-container");
const filterButton = document.querySelector(".filter-button");

const prices = [100, 400, 900, 300, 500];

//создаём функцию, которая будет отображать элементы на страницы. В эту функцию мы будем передавать массив со значениями
const renderPrices = (inputArray) => {
  priceContainer.innerHTML = "";

  inputArray.forEach((item) => {
    const itemBlock = document.createElement("div");
    itemBlock.textContent = item;
    priceContainer.append(itemBlock);
  });
};

renderPrices(prices);

//создаём функцию, которая будет прорисовывать элементы отфильтрованного массива
const filterPrice = () => {
  
  const filterPrices = prices.filter((price) => price > 450);
  renderPrices(filterPrices);
};

filterButton.addEventListener("click", filterPrice);