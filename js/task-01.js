const categoriesAll = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesAll.length}`);

const categoryItem = [...categoriesAll]
  .map(
    (categories) => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}
`
  )
  .join("\n");
console.log(categoryItem);
