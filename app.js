const inputTarea = document.querySelector(`#inputTarea`);
const btnAgregar = document.querySelector('#btnAgregar');
const listaTareas = document.querySelector('#listaTareas');

// escuchamos el click del botón con este bloque
btnAgregar.addEventListener(`click`, function() {
    // almacenamos lo que el usuario escribió dentro del input
    let textoDeLaTarea = inputTarea.value.trim();

    if(textoDeLaTarea === "") {
        alert("Por favor escribe una tarea válida");
    } else {
        // 1. Fabricamos el contenedor de la tarea (<li>)
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = textoDeLaTarea;

        // 2. Fabricamos el botón de eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = "×"; // Usamos un carácter de multiplicación "×" que se ve más limpio que la X normal
        
        // ASIGNAMOS UNA CLASE EN LUGAR DE ESTILOS EN LÍNEA (NUEVO)
        btnEliminar.classList.add('btn-eliminar'); 

        // 3. Escuchamos el clic de este botón
        btnEliminar.addEventListener('click', function() {
            nuevaTarea.remove(); 
        });

        // 4. Metemos el botón ADENTRO de la tarea <li>
        nuevaTarea.appendChild(btnEliminar);

        // 5. Empujamos la tarea completa al <ul>
        listaTareas.appendChild(nuevaTarea);

        // Limpiamos la caja de texto
        inputTarea.value = "";
    }
});