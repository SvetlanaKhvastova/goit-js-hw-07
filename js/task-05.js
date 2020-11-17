const inputRef = document.querySelector('[type="text"]');
const titleName = document.getElementById('name-output');

inputRef.addEventListener('input', hundleInputName);

// function hundleInputName(event) {
//   if (inputRef.value === '') {
//     titleName.textContent = 'незнакомец';
//   } else titleName.textContent = event.target.value;
// }

function hundleInputName(event) {
  inputRef.value = event.target.value.split(' ').join('');

  titleName.textContent =
    inputRef.value === '' ? 'незнакомец' : event.target.value;
}
