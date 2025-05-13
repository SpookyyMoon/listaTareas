$(document).ready(function () {
    var contadorTareas = 0;
    
    function crearTarea() {
        const nuevaTarea = $(`
            <div class="tarea" id="tarea-${contadorTareas}">
                <div class="contenedorTarea">
                    <p class="tituloTarea">
                        Título de la tarea:
                        <input>
                    </p>
                    <p class="descripcionTarea">
                        Descripción de la tarea:
                        <textarea></textarea>
                    </p>
                </div>
                <div class="botonesTarea">
                    <button class="marcarCompletada">
                        <img src="./public/icons/completada.svg">
                    </button>
                    <button class="marcarPendiente">
                        <img src="./public/icons/eliminar.svg">
                    </button>
                </div>
            </div>
        `);
        contadorTareas++;
        return nuevaTarea;
    }

    $("#btnAddTarea").click(function (){
        const tareaNueva = crearTarea();
        $("#contenedorTareas").prepend(tareaNueva);
        console.log("Tarea creada con ID:", tareaNueva.attr('id'));
    });
});