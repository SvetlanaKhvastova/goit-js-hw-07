const totalCategory = document.querySelectorAll('.item');
console.log(`В списке ${totalCategory.length} категории.`);

const listArray = [...totalCategory]
  .map(
    elem =>
      `Категория: ${elem.firstElementChild.textContent} 
Количество элементов: ${elem.children[1].children.length}`,
  )
  .join('\n');

console.log(listArray);
