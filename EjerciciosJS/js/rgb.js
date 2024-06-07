
const cuadros = document.querySelectorAll(".cuadro"); // declara una variable llamada cuadro y nos devuelve una serie de elementos
const controles = document.querySelectorAll("input"); // coge los input de html y lo almacena en la variable controles
const codigoColor = document.querySelector("p"); // coge los p de html y lo almacena en la variable codigoColor


function hexadecimal(r,g,b){ // define la función hexadecimal con tres argumentos, r, g y b
    let codigo = []; // declara una variable : código, que está vacía porque dará como resultado la combinación hexadecimal de los argumentos r, g y b
    for(let i = 0; i < arguments.length; i++){ // inicia un bucle. i es el índice y empieza en 0. Si i es menor que el largo de arguments, aumenta i +1
        codigo.push((Number(arguments[i]) < 16 ? "0" : "") + Number(arguments[i]).toString(16));
    } // convierte arguments a número, si es menor que 16 añade un 0 delante / convierte el número a hexadecimal
    return `#${codigo.join("")}`; // cierra el bucle y te devuelve un código hexadecimal que empieza por una almohadilla #. Join une el código con la #
}


controles.forEach(function(control,indice){ // método forEach que ejecuta una función por cada elemento del array.
    control.addEventListener("input",function(){ // cada vez que input cambia se ejecuta la función
        cuadros[0].style.backgroundColor = hexadecimal(controles[0].value,controles[1].value,controles[2].value); // cambia el color de fondo del primer cuadrado con los valores que vayan teniendo r- control 0, g- control 1 y b - control 2
        codigoColor.innerHTML = hexadecimal(controles[0].value,controles[1].value,controles[2].value); // actualiza en html el código hexadecimal de cuadro / p
        cuadros[indice + 1].style.backgroundColor = hexadecimal(indice == 0 ? control.value : 0,indice == 1 ? control.value : 0,indice == 2 ? control.value : 0); // define los colores de cada cuadrado de control. Si el índice es 0, usa el valor del primer control.value
    });
});



