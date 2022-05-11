//EJEMPLOS DADOS EN CLASE----------------------------------
function double (){

    let resultado  = 2 * 4 ;
    alert("El resultado de multiplicar 2 x 4 = " + resultado);
}

function multiplicar (numero1, numero2){
let resultado = numero1 * numero2;
alert ("El resultado de multiplicar " + numero1 + "x" + numero2 + "=" + resultado );
}

//usando return, sin usar y usando inputs
function multiplicar_2 (numero1, numero2){
    return numero1 * numero2;
}
let resultado = multiplicar_2 (2,5);                  //sin inputs, ingresando valores manualmente
alert ("El resultado de multiplicar es" + resultado);
multiplicar_2 (6,7);


let input1 = parseInt(prompt("Ingrese un numero"));    //con inputs, solicitando valores al usuario
let input2 = parseInt(prompt("Ingrese otro numero"));

let resultado2 = multiplicar_2 (input1, input2);


//variables locales y globales
let nombre = "John Doe" // variable global

function saludar() {
    let nombre = "Juan Coder" // variable local
    console.log(nombre)
}
//Accede a nombre global
console.log(nombre)   // → "John Doe"

//Accede a nombre local
saludar() // → "Juan Coder"

//scope local y global
let scope = "Soy Global";

function testScope(){
    let scope = "Soy Local";
    console.log(scope);
}
testScope();
console.log(scope);


//---------------------------------
//FUNCIONES ANONIMAS
//Una función anónima es una función que se define sin nombre, Y SE UTILIZA ASIGNADA A UNA VARIABLE
//Generalmente, las funciones anónimas se asignan a variables declaradas como constantes.
const suma  = function (a, b) { return a + b }
const resta = function (a, b) { return a - b }
console.log( suma(15,20) )
console.log( resta(15,5) )

//FUNCIONES FLECHA
//Identificamos a las funciones flechas como funciones anónimas de sintaxis simplificada.
const suma2  = (a, b) => { return a + b }
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta2 = (a, b) =>  a - b ;
console.log( suma2(15,20) )
console.log( resta2(20,5) )

//Ejemplos
//01 -Calcular el nuevo precio de un producto, sumando IVA y restando un descuento 


const suma3 = (a,b) => a + b      //definimos las funciones flecha
const resta3 = (a,b) => a - b
const conIva = x => x * 1.21

let precioProducto = parseInt(prompt("Ingrese precio de producto"));  //definimos los input, y el valor de descuento
let descuento = 50;

let nuevoPrecio = resta3 (conIva(precioProducto),descuento);  // calcular nuevo precio = (precio + iva) - descuento
alert("El nuevo precio es: " + nuevoPrecio);    


//02 - Mejorado
const suma4 = (a,b) => a + b
const resta4 = (a,b) => a - b
const descuentoContado = x => x * 0.85
const precioConIva = x => x * 1.21

let condicionPago = confirm("Bienvenido. El cliente paga al contado?");
let precioProducto4 = parseInt(prompt("Ingrese precio de referencia")); 
if (condicionPago) {
    //nuevo precio = (precio + iva) - descuento 15 porciento
   let nuevoPrecio = descuentoContado(precioConIva(precioProducto4));
   alert("Total a facturar es: " + nuevoPrecio);
    
} else {
    let cuotas = parseInt(prompt("Ingrese cantidad de cuotas entre 3 y 12"));
    if ((cuotas >= 3) && (cuotas <=12)) {
        let valorCuota = precioProducto4 / cuotas;
        alert("El total a facturar es: " + precioProducto4 + ". En " + cuotas + " cuotas de " + valorCuota);
    }else {
        alert("Usted a ingresado un numero de cuotas erroneo.")
    }
}

//03- ejemplo adivinador. funciones con un condicional, y con un ciclo



function adivinar (numero_usuario) {

    let mensaje = "";
    let numero = parseInt(numero_usuario);

    if (numero_usuario == ""){
        mensaje = 'Debes ingresar un dato'

    } else if (isNaN(numero)){
        mensaje = "No ingresaste un numero entero";

    } else if (numero > secretNum){
        mensaje = "Ingresaste un numero mayor";
         
    } else if (numero < secretNum){
        mensaje = "Ingresaste un numero menor";

    } else {
        mensaje = "GENIAL ES EL NUMERO CORRECTO";

    }

    return mensaje;
}

/*
let ingreso = prompt("Ingrese un numero");
let msj = adivinar(ingreso);
alert(msj);
*/

//repetir esta funcion hasta que el usuario encuentre el numero correcto
const secretNum = 25;
let ingreso = 0
while(secretNum != ingreso){
let ingreso = prompt("Ingrese un numero");
let msj = adivinar(ingreso);
alert(msj);
}