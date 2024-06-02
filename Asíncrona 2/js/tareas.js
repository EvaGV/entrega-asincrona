
const taskForm = document.getElementById("task-form");
const newTaskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");
const clearTasksBtn = document.getElementById("clear-tasks");

// Inicializar lista de tareas
let listaTareas = ["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4", "Tarea 5"];
mostrarTareas();

// Agregar evento para enviar formulario de tarea
taskForm.addEventListener("submit", agregarTarea);

// Agregar evento para borrar todas las tareas
clearTasksBtn.addEventListener("click", borrarTodasLasTareas);

// Función para mostrar todas las tareas
function mostrarTareas() {
    taskList.innerHTML = "";
    listaTareas.forEach((tarea, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${tarea}`;
        taskList.appendChild(li);
    });
}

// Función para agregar una nueva tarea
function agregarTarea(e) {
    e.preventDefault();
    const nuevaTarea = newTaskInput.value.trim();
    if (nuevaTarea !== "") {
        listaTareas.push(nuevaTarea);
        mostrarTareas();
        newTaskInput.value = "";
    } else {
        alert("Por favor, ingrese una tarea válida.");
    }
}

// Función para borrar todas las tareas
function borrarTodasLasTareas() {
    listaTareas = [];
    mostrarTareas();
}

