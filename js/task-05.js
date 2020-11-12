const inputRef = document.querySelector('[type="text"]');
const titleName = document.getElementById('name-output');

inputRef.addEventListener('input', hundleInputName);

function hundleInputName(event) {
  titleName.textContent = event.target.value;
}
