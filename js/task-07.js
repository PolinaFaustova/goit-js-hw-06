// Напиши скрипт, который реагирует на изменение
// значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text
// обновляя свойство font-size. В результате при
// перетаскивании
// ползунка будет меняться размер текста.

const inputFontEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputFontEl.addEventListener("input", (event) => {
  let changeSizeEl = event.target.value;
  textEl.style.fontSize = `${changeSizeEl}px`;
});
