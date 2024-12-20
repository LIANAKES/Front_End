//выбираем необходимые элементы
const loanForm = document.getElementById("loanForm");
const resultDiv = document.getElementById("result");

//создание функции для расчёта оплаты
const getAmount = (event) => {
  //превентируем поведение формы по умолчанию при событии submit
  //используем метод preventDefault()
  event.preventDefault();

  //получаем данные из полей формы (через элемент формы и атрибут name для поля)
  const loanAmount = Number(loanForm.loanAmount.value);
  const interestRate = Number(loanForm.interestRate.value) / 100 / 12; //преобразование процентов в десятичный формат и годовой ставки в месячную
  const loanTerm = Number(loanForm.loanTerm.value) * 12; //12-количество месяце в году

  const monthlyPayment =
    (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

  //метод toFixed - округления числа до фиксированного количества знаков после запятой
    resultDiv.innerHTML = `<p>Your montly payment: ${monthlyPayment.toFixed(2)}$</p>`;
};

//привязываем функцию к обработчику события submit
//Основные правила для работы с событием submit:
//1-вызов метода addEventListener делаем для элемента формы(loanForm)
//2-внутри формы должна быть кнопка с типом submit
loanForm.addEventListener("submit", getAmount);