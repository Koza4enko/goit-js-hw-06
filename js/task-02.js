const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let ingredientsArr = document.getElementById("ingredients");

const ingredientsList = ingredients.forEach((ingredient) => {
  let items = document.createElement("li");
  items.innerHTML = ingredient;
  ingredientsArr.append(items);
});

//console.log(ingredientsArr);
