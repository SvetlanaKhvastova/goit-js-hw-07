const collectionInput = document.querySelector('[type="number"]');
const render = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById('boxes');
// console.log(collectionInput, render, destroy);

render.addEventListener('click', renderBoxes);
destroy.addEventListener('click', destroyBoxes);

function renderBoxes() {
  createBoxes(collectionInput.value);
}

function createBoxes(amount) {
  let x = 0;
  let count = 20;

  for (let i = 1; i <= amount; i++) {
    x += 1;
    count += 10;
    const div = document.createElement('div');
    div.textContent = x;
    div.style.width = count + 'px';
    div.style.height = count + 'px';
    div.style.backgroundColor = `rgba( ${random()} , ${random()} , ${random()} )`;
    boxes.append(div);
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function random() {
  return Math.random() * 256;
}
