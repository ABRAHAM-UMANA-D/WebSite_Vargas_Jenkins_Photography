const buttons = document.querySelectorAll('.btn-hidden');
const textElements = document.querySelectorAll('.hidden-text');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('show-text');
    if (textElement.classList.contains('show-text')) {
      button.innerHTML = 'Leer menos';
    } else {
      button.innerHTML = 'Leer más';
    }
  });
});

