const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('li.item'); 

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.firstElementChild;
  const categoryElements = categoryItem.lastElementChild.children;
  
  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryElements.length}`);
});
