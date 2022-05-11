

function double5 () {

    let resultado = 2 * 4 ;
    alert ("El resultado de multiplicar 2 x 4 =" + resultado  );


} 


function multiplicar (numero1, numero2){

    let resultado = numero1 * numero2 ;
    alert ("El resultado de multiplicar " +  numero1 + " x " + numero2 + " = " +  resultado  );


}


function multiplicar_2 (numero1,numero2){

    return numero1 * numero2 ;


}


//4 tipos de función realizando lo mismo
function double (x){
    return x * 2;
}
console.log(double(10));

let double2 = function(x) {
    return x * 2;
};
console.log(double2(10));

const double3 = (x) => {
    return x * 2;
};
console.log(double3(10));

let result = (function (x,y) { 
    return x * y * 2;
})(10,30);
console.log(result);


//Scope
let scope = "Soy global";

function testScope() {
    let scope = "Soy local";
    console.log ("Adentro de la función: " + scope);     
}

testScope(); 

console.log("Afuera de la función: " + scope);


//ejemplo 2
let scope2 = "Soy global";

function testScope2() {
    scope2 = "Soy local";

    console.log("Adentro de la segunda función: " + scope2);     
}

console.log("Afuera de la segunda función: " + scope2);     

testScope2();

let resultado = multiplicar_2 (2,5);
alert ("El resultado de multiplicar 2  x 5 = " +  resultado  );

console.log(multiplicar_2 (6,7));


let input1 = parseInt(prompt("Ingrese un numero"));
let input2 = parseInt(prompt ("Ingrese otro numero"));

let resultado2 = multiplicar_2(input1,input2) ;


function testDinero(){


    dinero = -5 ;
    

}





let dinero = 1000000 ;

testDinero();
console.log(dinero);


function adivinar(numero_usuario){

    let mensaje = "";
    let numero = parseInt(numero_usuario);
   
    if (numero_usuario == ""){

        mensaje = "Debes ingresar un dato";
    }  else if (isNaN(numero)){

        mensaje = "No ingresaste un numero entero";

    } else if (numero > secretNum){

        mensaje = "ingresaste un numero mayor" ;
    }else if (numero < secretNum){

        mensaje = "ingresate un numero menor";
    } else {

        mensaje = "GENIAL ES EL NUMERO CORRECTO" ;
    }
    return mensaje ;
}

const secretNum = 25;
let ingreso = 0;
while (secretNum != ingreso) {
    let ingreso = prompt("Ingrese un numero") ;
    let msj =adivinar(ingreso) ;
    alert(msj);
}


















