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
                        <img class="imagen" src="./public/icons/completada.svg">
                    </button>
                    <button class="marcarPendiente">
                        <img src="./public/icons/eliminar.svg">
                    </button>
                    <p class="fecha">${fechaTarea()}</p>
                </div>
            </div>
        `);
        contadorTareas++;
        return nuevaTarea;
    }

    function fechaTarea(){
        const date = new Date();
        const fecha = `${date.getUTCDate()}/${date.getUTCMonth()+1}/${date.getUTCFullYear()} - ${date.getHours()}:${date.getMinutes()}`;
        return fecha;
    }

    $("#btnAddTarea").click(function (){
        const tareaNueva = crearTarea();
        $("#contenedorTareas").prepend(tareaNueva);
    });

    $("#contenedorTareas").on("click", "button.marcarPendiente", function (){
        $(this).closest(".tarea").remove();
    });

    $('#contenedorTareas').on("click", "button.marcarCompletada", function (){
        const tarea = $(this).closest(".tarea");
        $(this).closest(".tarea").toggleClass("completada");
        $(this).closest(".descripcionTarea").toggleClass("completada");
        $(this).closest(".tituloTarea").toggleClass("completada");
        if(tarea.hasClass("completada")){
            $(this.children, ".imagen").attr("src", "./public/icons/desmarcar.svg");
        }
        else{
            $(this.children, ".imagen").attr("src", "./public/icons/completada.svg");
        }
    });
});