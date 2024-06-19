# Actividades de Manipulación de DOM y Procesamiento de JSON

Para los siguientes ejercicios:

1. Analizar bien los elementos del siguiente string JSON con información proveniente de una base de datos.
2. Convertir los datos JSON en objetos JavaScript.
3. Hacer lo que se les pide


## Actividad 1: Crear Tarjetas de Usuario

1. Crear tarjetas HTML para cada usuario con su información.
2. Mostrar las tarjetas en la página web.

```js
const dataUsuarios= `[{
    "nombre": "Juan Pérez",
    "edad": 28,
    "correo": "juan.perez@example.com"
  },
  {
    "nombre": "Ana Gómez",
    "edad": 34,
    "correo": "ana.gomez@example.com"
  },
  {
    "nombre": "Luis Torres",
    "edad": 23,
    "correo": "luis.torres@example.com"
  }]`;
```

## Actividad 2: Generar un Menú de Restaurante

1. Crear un menú HTML con secciones anidadas (bebidas, plato principal, postres).
2. Mostrar el menú en la página web.

```js
const dataMenu= `{
  "menu": [{
      "nombre": "Bebidas",
      "items": [
            {
            "nombre": "Coca-Cola",
            "precio": 2.5
            },
            {
            "nombre": "Jugo de Naranja",
            "precio": 3.0
            },
            {
            "nombre": "Agua Mineral",
            "precio": 1.5
            }
        ],
    },
    {
      "nombre": "Platos Principales",
      "items": [
            {
            "nombre": "Hamburguesa",
            "precio": 8.0
            },
            {
            "nombre": "Pizza",
            "precio": 10.0
            },
            {
            "nombre": "Ensalada César",
            "precio": 6.5
            }
        ],
    },
    {
      "nombre": "Postres",
      "items": [
            {
            "nombre": "Tiramisú",
            "precio": 4.5
            },
            {
            "nombre": "Cheesecake",
            "precio": 5.0
            },
            {
            "nombre": "Helado",
            "precio": 3.0
            }
        ]
    }]
}`;
```

## Actividad 3: Galería de Películas

1. Mostrar los títulos de las películas y su imagen en una lista.
2. Al hacer clic en un título, mostrar todos los detalles de la película en otro div (título, género, puntaje, descripción, imagen).

```js
const dataPeliculas = `[
  {
    "titulo": "Inception",
    "genero": "Ciencia Ficción",
    "puntaje": 8.8,
    "descripcion": "Un ladrón que roba secretos corporativos a través del uso de tecnología de sueños es dado la tarea inversa de plantar una idea en la mente de un CEO.",
    "imagen": "https://via.placeholder.com/150"
  },
  {
    "titulo": "The Dark Knight",
    "genero": "Acción",
    "puntaje": 9.0,
    "descripcion": "Cuando el Joker emerge como el nuevo villano del caos, Batman debe aceptar uno de los mayores desafíos psicológicos y físicos para combatir la injusticia.",
    "imagen": "https://via.placeholder.com/150"
  },
  {
    "titulo": "Interstellar",
    "genero": "Aventura",
    "puntaje": 8.6,
    "descripcion": "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.",
    "imagen": "https://via.placeholder.com/150"
  }
]`
```

## Actividad 4: Lista de Tareas

1. Mostrar la lista de tareas en la página web.
2. Permitir a los usuarios agregar nuevas tareas y eliminar tareas existentes.
3. Convertir el objeto JavaScript actualizado nuevamente a JSON y mostrarlo en pantalla.

```js
cosnt dataTareas = `[
  {
    "tarea": "Comprar leche",
    "completado": false
  },
  {
    "tarea": "Llamar al doctor",
    "completado": false
  },
  {
    "tarea": "Estudiar para el examen",
    "completado": true
  }
]`;
```