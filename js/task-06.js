const inputRef = document.getElementById('validation-input');

inputRef.addEventListener('change', event => {
  if (event.target.value.length === +inputRef.dataset.length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else if (event.target.value.length === 0) {
    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
});
