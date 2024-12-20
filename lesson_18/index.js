// "https://catfact.ninja/fact"
const getCatFactsButton = document.getElementById("get-cats-fact");
const dataContainer = document.querySelector(".data-container");
const loading = document.getElementById("load-ind");

//асинхронная функция, в которой будет прописана логика отправки запроса
//и обработки результата
const getCatFact = async () => {
  dataContainer.textContent = "";
  loading.removeAttribute("class");
  dataContainer.classList.remove("error");
  //создаём блоки try catch finally для отправки запроса и обработки результата
  try {
    //отправка запроса, ожидание завершения промиса(который возвращает fetch)
    // и сохранение результата в переменную respone. Метод GET(по умолчанию)
    const response = await fetch("https://catfact.ninja/fact");
    console.log(response);
    //используем метод json(асинхронный) объекта response для получения данных в необходимом формате
    const result = await response.json();
    console.log(result);

    //если в свойстве ok значение true, тогда обрабатываем данные успешного результата
    //если в свойстве ok значение false, тогда создаём исключения, для перехода в блок catch
    if (response.ok) {
      dataContainer.textContent = `Fact: ${result.fact}`;
    } else {
      //в объекте result будет храниться характеристики ошибки в следующем виде, например {message: 'Not found', code: '404'}
      //самостоятельно создаём исключение, так как промис который возвращает fetch не разрешается как rejected в случае ошибок 400-599
      throw new Error(result.message);
    }
  } catch (error) {
    console.log(error);
    dataContainer.classList.add("error");
    //в свойстве message ошибки будет храниться сообщение, которое мы передавали в конструктор
    dataContainer.textContent = `Error: ${error.message}`;
  } finally {
    loading.setAttribute("class", "hidden");
  }
};

// setInterval(getCatFact, 10);

getCatFactsButton.addEventListener("click", getCatFact);
