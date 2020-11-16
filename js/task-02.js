const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// // больше подходит метод map, чтобы ДОМ много раз не перерендерился
// const elementUl = document.getElementById('ingredients');

// const listIngredients = ingredients.map(product => {
//   const list = document.createElement('li');
//   list.textContent = product;

//   elementUl.appendChild(list);
// });

const elementUl = document.getElementById('ingredients');

function listIngredients(array) {
  const arr = array.map(product => {
    const list = document.createElement('li');
    list.textContent = product;
    return list;
  });
  elementUl.append(...arr);
}

listIngredients(ingredients);
