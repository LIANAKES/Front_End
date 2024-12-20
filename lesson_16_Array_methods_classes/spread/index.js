//Получение массивов ключей и объектов
const color = {
    nameColor: "white",
    code: "#fff",
    priceInfo: {
      price: 10,
      sale: true,
    },
  };
  
  const colorKeysArray = Object.keys(color);
  console.log(colorKeysArray);
  
  const colorValuesArray = Object.values(color);
  console.log(colorValuesArray);
  
  //Деструктуризация (spread оператор - ...)
  //--Массивы
  const fruits = ["apple", "grape", "cherry"];
  const copyFruits = [...fruits];
  // console.log(fruits);
  // console.log(copyFruits);
  copyFruits.push("banana");
  // console.log(fruits);
  // console.log(copyFruits);
  
  const shopFruits = [...fruits, "kiwi", "lemon"];
  // console.log(shopFruits);
  
  //соеденить массивы shopFruits и copyFruits c помощью spread оператора
  const fruitsBigArray = [...shopFruits, ...copyFruits];
  console.log(fruitsBigArray);
  
  //--Объекты
  const bookObj = {
    bookName: "Great Gatsby",
    price: 20,
  };
  
  const newBookObj = { ...bookObj, author: "Fitzgerald" };
  console.log(newBookObj);
  
  //Деструктурирующее присваивание
  // --массивы
  const colorsAr = ["Red", "Blue"];
  //базовый вариант копирования значений из массива и сохранения в отдельные переменные
  // let red = colorsAr[0];
  // let blue = colorsAr[1];
  // console.log(red, blue);
  
  //копирования значений из массива и сохранения в отдельные переменные с помощью деструктурирующего присваивания
  let [red, blue] = colorsAr;
  console.log(red);
  console.log(blue);
  
  //--объекты
  const fruitObj = {
    fruitName: "Kiwi",
    price: 2,
  };
  
  //базовый вариант копирования значений из объекта и сохранения в отдельные переменные
  // let fruitTitle = fruitObj.fruitName;
  // let fruitPrice = fruitObj.price;
  // console.log(fruitTitle);
  // console.log(fruitPrice);
  
  //копирование значений из объекта и сохранение в отдельные переменные с помощью деструктурирующего присваивания
  
  //в объектах название переменной, в которой будет сохраняться значение должно быть таким же, как ключ у этого значения
  let { fruitName, price } = fruitObj;
  
  //но есть возможность использовать псевдоним через двоеточие
  //если есть вероятность, что искомого свойства не будет, то можно задать значение по умолчанию через знак равно
  let { fruitName: fruitTitle, price: fruitPrice, shop = "FruitShop" } = fruitObj;
  console.log(fruitTitle);
  console.log(fruitPrice);
  console.log(shop);