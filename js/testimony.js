(function () {

    const elements = [...document.querySelectorAll('.testimony-body')];
    const next = document.querySelector('#next');
    const preview = document.querySelector('#before');
    let value;

    next.addEventListener('click', () => {
        cambio_de_posicion(1);
    });

    preview.addEventListener('click', () => {
        cambio_de_posicion(-1);
    });

    const cambio_de_posicion = (add) => {
        const testimonioActual = document.querySelector('.testimony-body--show').dataset.id;
        value = Number(testimonioActual);
        value += add;
        elements[Number(testimonioActual) - 1].classList.remove('testimony-body--show');
        if (value === elements.length + 1 || value === 0) {
            value = value === 0 ? elements.length : 1;
        }
        elements[value - 1].classList.add('testimony-body--show');
    }

})();