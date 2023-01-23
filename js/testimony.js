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

        /*Una constante que va a seleccionar especificamente al testimonio de la seccion 1 el cual es
        el testimony_body--show y va a obtener el dataset de ese testimonio de la seccion uno, que es el ID = 1*/

        value = Number(testimonioActual);
        //Aqui estamos posicionando a valor sobre el testimonio numero 1
        value += add;// A la variable que estaba en el testimonio actual le vamos a sumar los avances que hagamos sobre los elementos en el slider

        //elements.lengt = Maximo de elementos en el slider

        elements[Number(testimonioActual) - 1].classList.remove('testimony-body--show');
        if (value === elements.length + 1 || value === 0) {
            value = value === 0 ? elements.length : 1;
        }
        /* Si valor es igual al maximo de elementos del slider y yo intento sumar uno mas entonces que se me devuelva 
        a la posicion 1 del slider, o si valor es igual al primer elemento y yo resto 1, que se pase al ultimo elemento del slider */

        elements[value - 1].classList.add('testimony-body--show');

        //Accediendo al primer elemento del slider, -1 porque en programacion los algoritmos cuentan desde 0
        //La posicion 1 = 0, la 2 = 1, 3 = 2, por eso hay que hacer ese descuento

        //Testimony Body -show es la clase que hace que los elementos del slider se muestren
    }

})();