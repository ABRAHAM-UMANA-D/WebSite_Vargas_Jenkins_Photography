const btn_benefits = document.querySelectorAll('.btn-hide-benefits');
const hidden_benefits = document.querySelectorAll('.hidden-benefits');

btn_benefits.forEach((button, index) => {
    button.addEventListener('click', () => {
      const textElement = hidden_benefits[index];
      textElement.classList.toggle('show-benefits');
      if (textElement.classList.contains('show-benefits')) {
        button.innerHTML = 'Ver menos';
      } else {
        button.innerHTML = 'Ver más detalles';
      }
    });
  });