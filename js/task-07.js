const range = document.getElementById('font-size-control');
const spanText = document.getElementById('text');

range.addEventListener('input', handleTextSize);

function handleTextSize(event) {
  spanText.style.fontSize = event.target.value + 'px';
}
