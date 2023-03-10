// Напиши скрипт создания и очистки коллекции элементов.
//  Пользователь вводит количество элементов в input
//  и нажимает кнопку Создать, после чего рендерится коллекция.
//  При нажатии
// на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount),
//  которая принимает один параметр - число.
//  Функция создает столько <div>,
//  сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше
//  предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона
// в формате HEX.
// Используй готовую функцию getRandomHexColor
// для получения цвета.

// Создай функцию destroyBoxes(),
// которая очищает содержимое div#boxes,
//  тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputCollection: document.querySelector("input[type=number]"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesCollection: document.querySelector("#boxes"),
};

refs.boxesCollection.setAttribute(
  "style",
  "display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 10px;"
);

refs.createBtn.addEventListener("click", () =>
  createBoxes(refs.inputCollection.value)
);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.fontSize = `${size / 4}px`;
    boxes.push(box);
  }
  refs.boxesCollection.append(...boxes);
}

function destroyBoxes() {
  refs.boxesCollection.innerHTML = "";
}
