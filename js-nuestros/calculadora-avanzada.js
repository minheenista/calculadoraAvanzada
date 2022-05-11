function agregarDigito(digito){
    let display=document.getElementById("display");
    display.value = display.value + digito;
}

function allClear(){
    document.getElementById("display").value ="";
}

function agregarOperador(operador){
    let display = document.getElementById("display");
    display.value = display.value + operador;
}

function calcularResultado(){
    display.value = eval(display.value)


}

function calcularPotencia(){
    let display = document.getElementById("display");
    let base = eval(display.value);
    let exponente = document.getElementById("elevarPotencia").value;
    let resultadoPotencia = Math.pow(base, exponente);
    display.value = resultadoPotencia;
}

function factorial(n){
    let display = document.getElementById("display");
    display.value =

    



}


function calcularRaiz(){
    let display = document.getElementById("display");
    let exponente = 1/document.getElementById("obtenerRaiz").value;
    let resultadoRaiz = Math.pow(display, exponente);
    display.value = resultadoRaiz;

}