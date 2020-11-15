const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const elementUl = document.getElementById('ingredients');

// const listIngredients = ingredients.forEach(product => {
//   const list = document.createElement('li');
//   list.textContent = product;

//   elementUl.appendChild(list);
// });

// больше подходит метод map, чтобы ДОМ много раз не перерендерился
const elementUl = document.getElementById('ingredients');

const listIngredients = ingredients.map(product => {
  const list = document.createElement('li');
  list.textContent = product;

  elementUl.appendChild(list);
});
