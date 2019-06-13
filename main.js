(function(){
    //Variables
    var lista = document.getElementById("lista");
    var tareaInput = document.getElementById("tareaInput");
    var btnNuevaTarea = document.getElementById("btn-agregar");

    //Funciones
    //Agregar tarea nueva:
    var agregarTarea = function() {
        var tarea = tareaInput.value;
        var nuevaTarea = document.createElement("li");
        var enlace = document.createElement("a");
        var contenido = document.createTextNode(tarea);

        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea válida");
            tareaInput.className = "error";
            return false;
        }

        enlace.appendChild(contenido);
        enlace.setAttribute("href", "#"); //agregar atributo href para que sea cliqueable el elemento
        nuevaTarea.appendChild(enlace);
        lista.appendChild(nuevaTarea);

        tareaInput.value = ""; //Limpia el input una vez añadida la tarea deseada.

        for (var i = 0; i < lista.children.length; i++) {
            lista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });
        }
    };

    //Eliminar clase error del input cuando el usuario vuelve a clickear en el mismo:
    var comprobarInput = function() {
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agrega una tarea");
    };

    //Eliminar tarea
    var eliminarTarea = function() {
        this.parentNode.removeChild(this);
    };

    //Eventos

    //Agregar Tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);

    //Controlar cambios en el input
    tareaInput.addEventListener("click", comprobarInput);

    //Eliminar tareas
    for (var i = 0; i < lista.children.length; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);
    }


}());