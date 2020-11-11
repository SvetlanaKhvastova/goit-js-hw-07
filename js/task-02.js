const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const elementUl = document.getElementById('ingredients');

const listIngredients = ingredients.forEach(product => {
  const list = document.createElement('li');
  list.textContent = product;

  elementUl.appendChild(list);
});
