// Calculadora

function sumar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 + num2;
    mostrarResultado(resultado);
}

function restar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 - num2;
    mostrarResultado(resultado);
}

function multiplicar() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 * num2;
    mostrarResultado(resultado);
}

function dividir() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
        let resultado = num1 / num2;
        mostrarResultado(resultado);
    } else {
        alert("No se puede dividir por cero.");
    }
}

function esParImpar() {
    let num = parseFloat(document.getElementById("num1").value);
    let esPar = num % 2 === 0;
    mostrarResultado(esPar ? "Es par" : "Es impar");
}

function mostrarResultado(resultado) {
    document.getElementById("resultado").textContent = resultado;
}

function limpiar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultado").textContent = "";
}
