//---PROMISES
const myPromise = new Promise((resolve, reject) => {
    //пример ожидаемых данных
    // const result = {
    //   status: "200",
    //   data: {
    //     name: "Bob",
    //     age: 43,
    //   },
    // };
  
    //пример ошибки
    const result = {
      status: "500",
      message: "Server error",
    };
  
    setTimeout(() => {
      if (result.status === "200") {
        resolve(result.data);
      } else {
        reject(result.message);
      }
    }, 3000);
  });
  
  // console.log(myPromise);
  
  //обработка результата Promise, с помощью встроенных обработчиков then, catch, finally
  //обработчик then выполняет callback функцию при успешном завершении промиса
  //обработчик catch выполняет callback функцию при неуспешном завершении промиса
  //обработчик finally выполнится в любом случае после завершения промиса (подходит, например, для удаления спиннера со страницы)
  
  myPromise
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("end");
    });
  
  // Симуляция отправки запроса на сервер и обработки результата
  const dataContainer = document.querySelector(".data-container");
  const loading = document.querySelector("#load-ind");
  const getDataButton = document.querySelector("#request-button");
  
  //создаём функцию, которая симулирует отправку запроса на сервер и возвращает промис
  const customFetch = () => {
    const promise = new Promise((resolve, reject) => {
      //пример ожидаемых данных
      // const result = {
      //   status: "200",
      //   data: {
      //     firstName: "John",
      //     lastName: 'Johnson',
      //     age: 34
      //   },
      // };
  
      //пример ошибки
      const result = {
        status: "500",
        message: "Server error",
      };
  
      setTimeout(() => {
        if (result.status === "200") {
          resolve(result.data);
        } else {
          reject(result.message);
        }
      }, 3000);
    });
  
    return promise;
  };
  
  //функция для отправки запроса и обработки результата
  const getData = () => {
    dataContainer.innerHTML = "";
    dataContainer.style.color = "black";
    loading.removeAttribute("class");
  
    customFetch()
      .then((data) => {
        dataContainer.innerHTML = `
         <h2>User Data</h2>
         <div>Name: ${data.firstName}</div>
         <div>Surname: ${data.lastName}</div>
         <div>Age: ${data.age}</div>
        `;
      })
      .catch((error) => {
        dataContainer.style.color = "red";
        dataContainer.textContent = error;
      })
      .finally(() => {
        loading.setAttribute("class", "hidden");
      });
  };
  
  getDataButton.addEventListener("click", getData);
  Copy
  *2024
  
  