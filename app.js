//ejemplo implementacion de una funcion-----------------------
//antes
/*
let nombreIngresado = prompt("Ingresar nombre")
alert("El nombre ingresado es " + nombreIngresado)

nombreIngresado = prompt("Ingresar nombre")
alert("El nombre ingresado es " + nombreIngresado)
nombreIngresado = prompt("Ingresar nombre")
alert("El nombre ingresado es " + nombreIngresado)
*/

//despues
/*
function solicitarNombre(){
    let nombreIngresado   = prompt("Ingresar nombre")
    alert("El nombre ingresado es " + nombreIngresado)
} 
solicitarNombre();
solicitarNombre();
solicitarNombre();
//-------------------------------------------------------------
*/

//Parametros
/*
function conParametros(parametro1, parametro2) { 
    console.log(parametro1 + " " + parametro2); 
} 
conParametros("Hola", "Coder"); // -> “Hola Coder”
conParametros("Cursando", "JS"); // -> “Cursando JS”
*/


//---------ejemplooooooo return----------------------------////
//Declaración de variable para guardar el resultado de una suma, 
//sumar dos valores por parametro y mostrar el resultado por consola
/*
let resultado = 0;
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}
function mostrar(mensaje) {
    console.log(mensaje)
}
sumar(6, 3);            
mostrar(resultado); 
//en este caso necesito crear una funcion que muestre el resultado
//ya que la funcion por si sola no retorna nada, devuelve undefined

//para resolver esto, debemos incluir la palabra return
let resultado2 = 0;
function sumar2(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero
}
sumar2(6, 9);
*/
//--------------------------------------------------------------//


//ejemplo Calculadora con switch
/*
function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-" :
            return primerNumero - segundoNumero;
            break;
        case "/" : 
            return primerNumero / segundoNumero;
            break;
        case "*" :
            return primerNumero * segundoNumero;
            break;
    }
}
calculadora(2,3,"*");
calculadora(2,3,"+");
calculadora(2,3,"-");
calculadora(2,3,"/");
*/
//------------------------------





//EJEMPLOS DADOS EN CLASE----------------------------------
/*
function double (){

    let resultado  = 2 * 4 ;
    alert("El resultado de multiplicar 2 x 4 = " + resultado);

}

function multiplicar (numero1, numero2){
let resultado = numero1 * numero2;
alert ("El resultado de multiplicar " + numero1 + "x" + numero2 + "=" + resultado );


}

function multiplicar_2 (numero1, numero2){

    return numero1 * numero2;
}

let resultado = multiplicar_2 (2,5);
alert ("El resultado de multiplicar es" + resultado);

multiplicar_2 (6,7);


// con inputs

let input1 = parseInt(prompt("Ingrese un numero"));
let input2 = parseInt(prompt("Ingrese otro numero"));

let resultado2 = multiplicar_2(input1, input2) ;

//pequeño atajo para el parse int:

// let input1 =parseInt(prompt()) 
// es lo mismo que:

// let input1 = +prompt()

*/