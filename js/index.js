let productos = {
    flor1 : 10,
    flor2 : 20,
    flor3 : 30
}

function calacularCostoTotal 


/*console.log("Hola")

//variables- var(palabra reservada- verlas en google las demas)

//es la manera en como se declara las variables antes del nacimienro de ecmascript 6-

//variable + pedido = cantidad;

var numero = 10; //NO SE USA VAR, ES A MODO EJEMPLO.

// A PARTIR DE ECMA6, HAY 2 MANERAS DE DECLARAR VARIABLES (LAS QUE SE USAN ACTUALMENTE).

// ESTAS SON let y const

//LET

//let es una variable la cual podemos MODIFICAR cuando sea necesaria.

//let + camelCase = numero o variable a modificar.

let primerNumero = 1; 

console.log(primerNumero) // console.log(algo) ------ TIPO DE FUNCION CON EL CUAL PODEMOS HACER QUE FIGURE EN LA CONSOLA DE INSPECCIONAR.
primerNumero = 2;

console.log(primerNumero)


//existe otro tipo de variable la cual nos dice que el valor guardado NO VA A SER GUARDADO

//CONST

//const + MAYUS la variable y va con snacke_case

const CONSTANTE_NUMERO = 4; // tambien se puede escribir como constante_numero.

console.log (CONSTANTE_NUMERO);

//CONSTANTE_NUMERO = 5; ------ NO SIRVE, DA ERROR, YA QUE CON LA VARIABLE CONST no se puede modificar el valor!

// terminologias = declaracion e inicializacion;

let bombre; //---- (DECLARACION) declaracion de la variable

nombre = "maximiliano" // (INICIALIZACION) ----- va entre " " ya que JS tiene un tipo de inicializacion que pide que el dato este entre comillas.

//Tipos de datos:

let numero = 1; //datos de tipo numericos.

let string = "cadena de caracteres" //datos de tipo cadena , VAN ENTRE " ".

let boolean = true; // false - true.

/* NUMERICOS : sirven para trabajar con operados aritmeticos (+, -, *, /).

-son herramientas fundamentales para la programacion, nos permiten realizar opermraciones matematicas entre variables y valores.

-numero flotante: 1.2, numeros con coma basicamente. */

/* Dentro de los operadores tenemos;

-SUMA = +.
-RESTA = -.
-DIVISION = /.
-MULTIPLICAION = *
-RESTO O MODULO = %

-INCREMENTO = ++
-DECREMENTO= --



//Como generar una suma

let suma = 5 + 3;

console.log (suma);

//otro ejemplo ;

let numero1 = 1;
let numero2 = 2;

let resultado = numero1 + numero2; //Despues solo con cambiar la operacion puedo generar resultados.

console.log (resultado)


// STRING:
//concatenar, se reserva para datos tipo string:

let nombre = "Juan";
let apellido = "Bongiorno";
let vacio = " "; // se usa para dejar un espacio vacio entre las dos cosas.

let nombreApellido = nombre + apellido; 

console.log (nombreApellido); // = me da como resultado JuanBongiorno.

//let nombreApellido = nombre + vacio + apellido; // me da como resultado Juan Bongiorno.

// LA MANERA CORRECTA DE HACERLO ES:

console.log ("Hola soy "+ nombre + " "+ apellido + "  y fui top 10");

// FUNCIONES PROMPT Y ALERT

//PROMPT --- SE USA PARA SOLICITAR UN DATO:

let nombre = prompt("ingresa tu nombre");

console.log (nombre)

//ALERT --- ES PARA REFLEJAR EL DATO GUARDADO.

alert (nombre);

// PARSEINT hace que un prompt o string se haga un numero.

let numero1 =  parseInt(prompt ("inresa tu numero")); 
let numero2 = parseInt(prompt ("inresa otro numero"));

//todo lo que se pase por prompt se va a ingresar al programa como string.

let resultado = numero1 +numero2;

alert (resultado);

*/

//---------------- CLASE 2 ------------------------------------------------------------------------------------------------------//

//condicionales en JS//

//condicional = una estructura de flujo que nos permite tomar decisiones.
//puede ser verdadero o flaso.
//verdader o falso son BOOLEANOS, que representan NUMERO BINARIOS -0(FALSO) -1(VERDADERO).

//OPERADORES DE COMPARACION O RELACIONALES.

//operador de IGUALDAD == (doble igual) -- compara los valores que haya y tambien compara los tipos de datos


//operador de igualdad ESTRICTA === (triple igual)

//operador DISTINTO !=

//operador distintamente estricto !==


//ESTRUCTURA IF -- sentencia if (se utiliza para la toma de decisiones y siempre toma como decision si o no)
//IMPORTANTE PARA LA TOMA DE DECISIONES, EVALUA EXPRESIONES VERDADERAS.

//if ( condicion_boleana){
    //aca va el resultado de la condicion
//}


//EJEMPLO

//let suma = 8; //si la variable numero es igual (operador de igualdad = ) a 8

//if (numero == 8){                             // se debe imprimir este codigo
    //consol.log ("en efecto es el numero 8");
//}

//2.

//let a,b,c,d,e; (llame a una variable declarada)

//a=8;  (le di un valor) ------//igual

//if (a == 8){
    //console.log ("en efecto es el numero 8")
//}

//b= "10" (dato tipo string por los "")

//if (=== 10){ //dato estrictamente igual === (estrictamente igual)
    //console.log("en efecto es el numero 10");
//}


//OPERADOR DE DESIGUALDAD:

//c= "pepi"; //pepi es distinto a pepito ya que el valor de C no concuerda con lo declarado en el IF.

//if (c != "pepito"){
    //console.log("esto deberia ser distinto a pepito")
//}

//OPERADOR DE MAYOR QUE Y MENOR QUE;

//MAYOR QUE

//d = 8;

//if (d mayor 8){
    //console.log (d + " " + "esto es mas grande que 8")
//}

//MENOR QUE

//e=9;

//if (9 es menor 10){
    //console.log(e + " " + "es menor que 10")
//}


//ELSE = nos sirve para completar la sentencia if en caso de querer reotornar un valor de tipo FALSO.
//retornar un mensaje de tipo FALSE

//e = 11;

//if (e <= 10){
    //console.log(e + "" +"es menor que 10")
//}

//else{
    //console.log(e + " " + "es mayor que 10, date cuenta burrazo")
//}

// SI TENGO MAS DE UNA CONDICION USO else if =  nos va a ayudar a evaluar multiples opciones;
//else if = si no

//e = 11;

//si es mayor, igual o menor que 10;

//if (e > 10){
    //console.log(e + " " + "es mayor que 10")
//}

//else if (e == 10){
    //console.log(e + " " + "es igual que 10")
//}

//else{
    //console.log(e + " " + "es menor que 10") 
//}



//JUEGO

//const EDAD = prompt ("Ingrese su edad"); 
//cada vez que usamos un prompt el tipo de dato ingresado se guarda como un STRING

//para que ese STRING vuelva a ser un dato numerico uso ParseInt (es una funcion que nos convierte el dato en un numero);
//const EDAD_NUMERO = parseInt(EDAD);//

//if (isNaN(EDAD_NUMERO)){
    //console.log("pone un numero que no entiendo")// isNan (not a number)
//} 
//else{
    //aca va el codigo para preguntar que edad tiene.
    //y si puede manejar.
    //if (EDAD_NUMERO >= 18){
        //console.log("es mayor puede manejar")
    //}
    //else{
        //console.log("es menor no puede manejar");
    //}
//}

//OPERADORES LOGICOS, son op que se van a ejecutar X parte del programa.
//siempre y cuando se cumpla una condicion.

// Op logico AND o Op Y -- se expresa atraves de un (&&) 
// (&&) Va a devolver verdadero si ambas considiciones son tambien verdaderas.

//OP AND

//let edad = 25;               //uso dos variables, edad y licencia
//let tieneLicencia = true;

//if (edad mayor o = 18 && tieneLicencia == true){        //al cumplirse las dos da TRUE
    //console.log ("podes conducir")
//}
//else{
    //console.log("no podes conducir")
//}

//OP LOGICO "o" se expresa con || (alt + 124);
//op logico "o" se va a ejecutar siempre y cuando una de las dos condiciones sea verdadera.


//OPERADOR LOGICO "no" (!)
// Invertir el valor de la condicion de verdadero a falso.

//let esVerano = false;

//if (!esVerano){
    //console.log("no es verano");
//}
//else{
    //console.log("es verano");
//}

//Precedencia de operadores = nos ayuda a entender como ejecuta JS los bloques de codigo.

//1- parentesis y corchetes
//2- operador unitarios
//3- op. artimeticos
//4- op. relacionales (mayor y menor)
//5- op. de igualdad
//6- op. logicos


//CLASE 3-----------------------------------------------------------------------------------//



//Ciclos / Iteraciones//

//Ciclos / iteracion; estructuras de control que nos permite ejecutar un bloque de codigo siempre y cuando se cumpla una determinada condicion.

// 2 tipos de ciclos: por conteo y por condiciones.
//por conteo : FOR.
//por condiciones : WHILE / DO WHILE.


//ciclo por conteo: tipo de ciclo que se puede utilizar siempre y cuando sepamos cuantas veces se necesita repetir.

//ciclo condicionales: se repite tantas veces siempre y cuando se cumpla la condicion.



//OPERADORES UNITARIOS
//ayudan a aumentar o disminuir el valor de una variable.
//hay 2 op. unitarios: 

//op. de incremento (++) -- (+1)
//op. de decremento (--) -- (-1)

//OP. DE INCREMENTO == se puede divir de dos formas: 

//Op. preimpremento, va a incrementar la variable antes que se utilice.

//let x = 5;
//let y = ++x;  (++ = 1) (aumenta en 1 la variable X);

//Op. post-incremento: el valor de la variable se invremneta despues que se utiliza la variable actual.

//let m = 5;
//let n = m++; (aca se le suma en la proxima iteracion, al estar adelante la letra se suma dsps si se le pone antes el ++ se le suma primero);

//Op de decremento; (el valor se reduce antes de que se ejecute la variable);

//let x = 5;
//let y = --x;

//Op. post-decremento

//let m = 5;
//let n = m--;


//CICLO FOR: (estructura de control de flujo, que nos sirve para ejecutar un bloque de codigo siempre que sepamos el numero de veces que se necesite).

//Compuesto por: 

//for(inicializacion; condicion; actualizacion);
//for(  DESDE        + HASTA    + incremento/decremento)

//inicializacion -- sola una vez.
//condicion -- las veces que sean necesarias SIEMPRE QUE SEA VERDADERA.
//actualizacion -- depende la cantidad de iteraciones.


//for(inicializacion; condicion; actualizacion);{
    //bloque de codido a repetir
//}

//EJEMPLO:


//for(let i=0; i < 21; i++){
    //console.log("iteracion nro", i);
//}

//const NUMERO = 5;

//for(let i=1; i<=10; i++){
    //let resultado = NUMERO * i;
    //console.log(NUMERO + " X " + i + " = " + resultado);
//}

//OTRO EJEMPLO: (tabla de multiplicar)

//const NUMERO = parseInt(propomt(""));

//for(let i=1; i<=10; i++){
    //let resultado = NUMERO * i;
    //console.log(NUMERO + " X " + i + " = " + resultado);
//}

//SENTENCIA BREAK: se usa para salir de un bucle inmendiatamente.
//cuando se cumpla una condicion especifica.
//podemos usar un break dentro un ciclo y hacer que se termine.

//for( let i=1; i<=10; i++){
   // if( i === 5){
        //break
   // }
    //console.log(i)
//}

//contaria hasta el 5 arrancando del 0.

//SENTENCIA CONTINUE: se utiliza para saltar iteraciones y continua con la siguiente iteracion.

//for( i=1; i <=5; i++){
    //if( i === 3){
        //continue
    //}
    //console.log(i)
//}

//WHILE: se utiliza para crear bucles siempre y cuando se cumpla una condicion.

//while(condicion){
    //bloque de codigo a ejecutar, minetras se cumpla la condicion.
//}

//EJEMPLO

//queremos que se muentren numeros del 1 al 10.

//let contador = 1;

//while(contador <=10){
    //console.log("numero: "+ contador);
    //contador ++;
//}

//console.log("bucle completado");

//Juego:

//const PALABRASECRETA = "javascript";

//let intentos = 0;
//let adivinanza = "";

//while(adivinanza !== PALABRASECRETA){
    //adivinanza = prompt("adivina la palabra secreta, es un lenguaje de programacion").toLowerCase();
    //intentos ++;

    //if(adivinanza !== PALABRASECRETA){
        //alert("ese no es,adivina de nuevo")
    //}
//}

//alert("Adivinaste!, tardaste" +intentos + "intentos")

//DO WHILE: es como el WHILE, pero este se ejecuta una vez el bucle, solo una.

//do{
    //bloque de codigo a ejecutar, al menos una vez.
//}

//while(condicion);



//EJEMPLO:

//sumar numeros por usuario:

//let suma = 1;
//let continuar;

//do{                //parseFloat permite numeros con coma.
    //const NUMERO = parseFloat(prompt("ingresa un numero para sumar"));
    //if(!isNaN(NUMERO)){
        //suma += NUMERO;
        //continuar = prompt("quiere ingresar otro numero? (si/no) ").toLocaleLowerCase();
    //}
    //else{
        //alert("ingresa un numero valido");
        //continuar ="si"; //continuar el bloque en caso de ser entrada valida.
    //}
//}

//while ( continuar ==="si");
//console.log("la suma total es:" + suma)

//SENTENCIA SWITCH: es una estructura de control que sirve para tomar decisiones basadas eb un valor de una expresion.
//alternativa al if, else y nos rive para realizar diferentes acciones.

//switch (expresion){

    //case valor1:
        //codigo a ejecutar
        //todos los case van a tener un breake
        //break
    //case valor2:
        //codigo a ejecutar
       // break
    //case valor3:
        //codigo a ejecutar
        //break
    //case valor4:
        //codigo a ejecutar
        //break
//}


//EJEMPLO:

//let num1 = parseInt(prompt("ingresa el numero"));
//let operacion = prompt ("ingresa operacion");
//let num2 = parseInt(prompt("ingresa el numero"));
//let resultado;
//switch (operacion){
    //case "+":
        //resultado = num1 +num2;
    //break;
    //case "-":
        //resultado = num1 - num2;
    //break;
    //case "*":
        //resultado = num1 * num2;
    //break
    //case "/":
        //resultado = num1 / num2;
    //break
//default:
    //alert("operacion no valida");
    //resultado = "indefinido"
//}

//alert("resultad" + resultado)


// CLASE 4 ------------------------------------------------------------------------------------------------------------------------

//FUNCIONES y PROPIEDADES BASICAS

//FUNCION = conjunto de instrucciones que se agrupan para realizar una tarea concreta.

//DECLARACION

//Se declara a través de la palabra reservada (function). Deben tener un nombre en minúscula y sin espacios seguidos de los característicos paréntesis (). 
//El contenido de la función se escribe entre las llaves. El nombre de la función no se puede repetir en otra.

//como nombramos la funcion: 

//-tiene que ser un VERBO O ACCION
//-tiene que estar escrito en camelCase
//-ese verbo o accion va dentro del function.




//function + palabra clave (verbo o accion a realizar) + () + {}
//function saludar (){
    //instruccion o bloques de codigos de la funcion.
    //console.log ("buenos dias");
//}

//como se invoca a la funcion?:

//saludar();


//EJEMPLO:

//function sumar() {
    //let num1 = parseInt(prompt("ingresa un numero"));
    //let num2 = parseInt(prompt("ingresa un numero"));
    //let suma = num1 + num2;
    //console.log("la suma es:" + suma);
//}

//si la quiero volver a llamar solo llamo a la funcion SUMA:

//suma();

//scoupe : significa AMBITO habla de la visibilidad y accesibilidad de una varibledentro de un programa.
//existen 2 tipos de socupe: LOCAL Y GLOBAL.


//GLOBALES: 


//SI LAS VARIABLES ESTAN POR FUERA DE LAS FUNCIONES ENTONCES SON GLOBLALES.
//esto lo que permite es llamarlas en cualquier parte del codigo.

//let num1 = parseInt(prompt("ingresa un numero"));
//let num2 = parseInt(prompt("ingresa un numero"));

//function sumar() {
    //let suma = num1 + num2;
    //console.log("la suma es:" + suma);
//}

//suma();



//LOCAL: 

//una variable local es aquella que nace y muere dentro de la funcion.

//function sumar() {
    //let num1 = parseInt(prompt("ingresa un numero"));
    //let num2 = parseInt(prompt("ingresa un numero"));
    //let suma = num1 + num2;
    //console.log("la suma es:" + suma);
//}

//si la quiero volver a llamar solo llamo a la funcion SUMA:

//suma();


//EJEMPLO:

//let variableGlobal1 = "soy global";

//function ejemploScoupe() {
    //let variableGlobal = "soy local";
    //console.log(varibleGlobal1);
    //console.log(varibleLocal1);
//}

//ejemplosScoupe();

//console.log(variableGlobal1);//esta si la va a mandar ya que es GLOBAL.
//console.log(variableLocal1) //esta no la va a mandar ya que es LOCAL.


//funcion con un ejemplo WHILE:

//function ingresaNombre() {
//let nombreIngresado = prompt("Ingresar nombre")
//console.log("El nombre ingresado es " + nombreIngresado);
//}

//let numero = 0;

//while(numero < 2){    -- //lo que hace esto es pedirte en bucle la cantidad de veces la pregunta que quieras.
    //ingresaNumero()
    //numero ++         -- //esto lo que hace es que si la condicion es 2 le suma uno por el ++
//}

//FUNCIONES POR PARAMETROS:

//valor que se pasa a una funcion cuando esta se llama.
//las funciones pueden aceptar 0 parametros o los que necesiten.
//los parametros son variables locales dentro de la funcion.

//function sumar(a,b) {
    //return a + b;
//}

//let resultado = sumar (3,5);
//console.log(resultado)//

//EJEMPLO:

//let nombreIngresado = prompt("ingresa tu nombre");
//let apellidoIngresado = prompt("ingresa tu apellido");

//function saludar(nombre, apellido){ //cuando se declara es PARAMETRO
    //console.log("bienvenido alumno:" + nombre + " " + apellido);
//}

//saludar(nombreIngresado, apellidoIngresado); //cuando se llama a la funcion es ARGUMENTO




//FUNCIONES ANONIMAS:

//es una funcion que no tiene un nombre asociado.
//estas funciones pueden asignarse a las variables o argumentos.


//variable + funcion
//let suma = function (a,b){
    //return a + b;
//}

//llamada a la funcion:

//let resultado = suma(3,5);


//FUNCION FLECHA O ARROW FUNCTION:

//funcion que nace en ECMA6

// estructura de la funcion flecha:

// variable = ()=>

//let sumar = (a,b) => a + b;