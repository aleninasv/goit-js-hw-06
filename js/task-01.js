const listOfCategories = document.querySelectorAll(".item");
console.log("Number of categories:", listOfCategories.length);
console.log("");
for (let i = 0; i < listOfCategories.length; i++) {
  const namesOfCategories = listOfCategories.item(i);
  const titleOfCategory = namesOfCategories.firstElementChild;
  console.log("Category:", titleOfCategory.textContent);
  const listOfCategorieElements = namesOfCategories.lastElementChild;
  console.log("Elements:", listOfCategorieElements.childElementCount);
  console.log("");
}
