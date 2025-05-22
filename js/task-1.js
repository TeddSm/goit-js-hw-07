const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  console.log(`Category : ${categoryName}`);
  const categoryElem = item.querySelectorAll("ul li");
  console.log(`Elements : ${categoryElem.length}`);
});
