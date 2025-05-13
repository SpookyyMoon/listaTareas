$(document).ready(function () {
    var contadorTareas = 0;
    const tarea = $(`<div class=tarea>
                          <div class="contenedorTarea">
                            <p class="tituloTarea" id="tarea${contadorTareas}">
                            Título de la tarea:
                                <input>
                                </input>
                            </p>
                            <p class="descripciónTarea">
                            Descripción de la tarea:
                                <textarea>
                                </textarea>
                            </p>
                        </div>
                        <div class="botonesTarea">
                            <button id="marcarCompletada">
                                <img src="./public/icons/completada.svg">
                            </button>
                            <button id="marcarPendiente">
                                <img src="./public/icons/eliminar.svg">
                            </button>
                        </div>
                    </div>`);

    $("#btnAddTarea").click(function (){
        contadorTareas++;
        console.log(contadorTareas);
        $("#contenedorTareas").prepend(tarea.clone());
    })
})