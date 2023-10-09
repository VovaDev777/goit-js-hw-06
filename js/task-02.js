const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const containerForElements = document.querySelector('#ingredients')

const elements = ingredients.map(element => {
  const listItem = document.createElement('li');
  listItem.textContent = element;
  listItem.classList.add('item');
  return listItem;
})
console.log(elements);
containerForElements.append(...elements);

