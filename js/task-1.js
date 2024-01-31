const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);


categoryItems.forEach(category => {
  const titleElem = category.querySelector('h2');
  const categoryItemsCount = category.querySelectorAll('ul > li').length;

  
  console.log(`Category: ${titleElem.textContent}`);
  console.log(`Number of items: ${categoryItemsCount}`);
  
});












