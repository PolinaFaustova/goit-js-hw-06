const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт,
// который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>.
// Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li>
// за одну операцию в список ul#ingredients.

const ingredientsAll = document.querySelector("#ingredients");

const ingredientsEls = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.classList.add("item");
  ingredientEl.textContent = ingredient;
  return ingredientEl;
});

ingredientsAll.append(...ingredientsEls);

console.log(ingredientsAll);
