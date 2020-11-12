const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const count = document.getElementById('value');

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  count.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  count.textContent = counterValue;
};

decBtn.addEventListener('click', () => {
  decrement(count);
});
incBtn.addEventListener('click', () => {
  increment(count);
});
