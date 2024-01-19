const categories = document.querySelector("#categories");
const allCategories = categories.querySelectorAll(".item");
const allCategoriesNumer = allCategories.length;
console.log(`Number of categories: ${allCategoriesNumer}`);



allCategories.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
  });
