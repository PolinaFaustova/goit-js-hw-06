// Счетчик состоит из спана и кнопок, которые,
// при клике, должны увеличивать и уменьшать
//  его значение на единицу.

// Создай переменную counterValue в которой будет
// храниться текущее значение счетчика и инициализируй
// её значением 0.
// Добавь слушатели кликов на кнопки,
// внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decrementButton = document.querySelector(
  '#counter [data-action="decrement"]'
);
const incrementButton = document.querySelector(
  '#counter [data-action="increment"]'
);
const counterValue = document.querySelector("#value");

let counter = 0;

decrementButton.addEventListener("click", () => {
  counter -= 1;
  counterValue.textContent = counter;
});
incrementButton.addEventListener("click", () => {
  counter += 1;
  counterValue.textContent = counter;
});
