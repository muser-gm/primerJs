/*
//console.log("Hola mundo!") //como el mostrar
//----------------------------------------------
// Ejercicio: declarar variables y constantes

let miEdad=35;
let miCuidad="La Plata"
let miTelefono=123456789;
const miNombre="Mario";
const miApellido="Cruz";
const nacionalidadArgentina=true;

console.log(miEdad);
console.log(miCuidad);
console.log(miTelefono);
console.log(miNombre);
console.log(miApellido);
console.log(nacionalidadArgentina);
//-----------------------------------------------

//Operaciones aritméticas:
let a=5;
let b=6;
let c=0;
//suma (luego: resta, multiplicacion, division, modulo '%', potencia '**')
c=a+b;
console.log(c);
//operaciones de asignacion: 
c=2;
c=c+1;

c++; //c=c+1
c+=5; //c=c+5

//operadores lógicos:
miembroIglesia=true;
poseedorSacerdocio=false;
//and
let respuesta=miembroIglesia&&poseedorSacerdocio;
console.log(respuesta);
//or
respuesta=miembroIglesia||poseedorSacerdocio;
console.log(respuesta);
//not
respuesta=!miembroIglesia;
console.log(respuesta);

//EJERCICIO: crear 2 variables booleanas evaluadas por los conectores and, or y not
climaFrio=true;
llueve=false;

meQuedoEnCasa=climaFrio && !llueve;
console.log(meQuedoEnCasa);

meQuedoEnCasa= climaFrio || llueve;
console.log(meQuedoEnCasa);

//---------------------------------------------
//OPERACIONES DE COMPARACION SIEMPRE DEVUELVE UN BOOLEANO
//----------------------------------------------- 

let aa =2;
let bb = "2";

respuesta = aa == bb; // TRUE: comparacion que solo evalua el valor (contenido) NO EL TIPO

respuesta = aa ===bb; //FALSE: si evalua el tipo.

// > , <, >= , <= ... evalua el contenido sin importar el tipo.

//CONDICIONALES
let loQueSea = true;
if (loQueSea=true) {
    //lo que se va a ejecutar si la condicion es verdadera
} else {
    //todo si la condicion no cumple
}

//ejercicio

edad=4;

if (edad>=8) {
    console.log("puedes bautizarte")
    if (edad >=12) {
        console.log("luego puedes obtener una recomendacion para el templo por medio de una entrevista con tu obispo")
    }
}else {
    console.log("aun no puedes bautizarte, te falta :", 8-edad, "años. Pero si puedes recibir una bendicion especial del sacerdocio!!! :D ")
}
*/


/*----------------------------------------------------
EJERCICIO PRUEBA TECNICA:
Evaluar la edad de una persona y determinar si es de la primaria
edad de 0 a 11 años
hombre joven de 12 a 17 años
jas de 18 a 35 años
y poseedor de sacerdocio de 36 años en adelante
--------------------------------------------------------*/

let edad = 1;

//primero evaluo si el rango de edad válida. Si no cumple la condicion, entonces termina el programa.
if (!(edad >=1 && edad <=110)) {
    console.log("Edad ingrasada incorrecta. Por favor, ingresa una edad válida (entre 1 y 110)");
} else if (edad >0 && edad <= 11) {         
    console.log("Perteneces a la primaria");
} else if (edad >= 12 && edad <= 17) {
    console.log("Perteneces a la juventud");
} else if (edad >= 18 && edad <= 35) {
    console.log("Eres JAS");
} else {
    console.log("Perteneces a los sacerdotes mayores");
}