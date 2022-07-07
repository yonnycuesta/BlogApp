// Función sticky para el menú de navegación
(function () {

    /*Esta es la declaración de la variable. */
    let pinged = false;
    let nav = document.querySelector(".navbar");
    let stickyScrollPoint = document.querySelector(".navbar-top").offsetHeight;

    /**
     *Si se hace ping a la barra de navegación, regrese; de ​​lo contrario, 
     agregue la clase anclada a la barra de navegación y establezca ping
     *a verdadero.
     *@devuelve el valor de la variable a la que se hizo ping.
     */
    function pingToTop() {
        if (pinged) {
            return;
        } else {
            nav.classList.add("pined");
            pinged = true;
        }
    }

    /**
     *Si se hace ping a la barra de navegación, elimine la clase anclada 
     de la barra de navegación y establezca ping en falso.
     *@devuelve el valor de la variable a la que se hizo ping.
     */
    function unPingFromTop() {
        if (!pinged) return;
        nav.classList.remove("pined");
        pinged = false;
    }

    /*Este es el detector de eventos que escucha el evento de desplazamiento. 
    Cuando el evento de desplazamiento es
    activado, se llama a la función. La función obtiene las coordenadas de la barra de navegación
     y verifica si el
    la ventana se ha desplazado más allá del stickyScrollPoint. Si es así, llama al pingToTop
    función. Si no es así, llama a la función unPingFromTop. */
    window.addEventListener('scroll', function (ev) {
        let coords = nav.getBoundingClientRect();
        if (window.scrollY < stickyScrollPoint) return unPingFromTop();
        if (coords.top <= 0) {
            pingToTop();
        }
    });
})();
