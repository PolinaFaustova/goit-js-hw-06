// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в
//  ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка
// элемента (тега <h2>) и количество элементов
// в категории (всех вложенных в него <li>).

const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesEl.length);

categoriesEl.forEach((el) => {
  const titleEl = el.firstElementChild.textContent;
  const elementsLi = el.lastElementChild.children.length;
  console.log("Category:", titleEl);
  console.log("Elements:", elementsLi);
});
