const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listOfIngredients = document.querySelector("#ingredients");
const ingredientListItem = ingredients.forEach((ingredient) => {
  const ingredientContent = document.createElement("li");
  ingredientContent.textContent = ingredient;
  ingredientContent.classList.add("item");
  listOfIngredients.appendChild(ingredientContent);
});
console.log(listOfIngredients);
console.log(listOfIngredients.textContent);
