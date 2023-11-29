//1. 


let estasRegistrado = prompt("estas registrado? contestar con si o no");
let permisoEdad = prompt("es mayor de edad?");

    if (estasRegistrado === "si" && permisoEdad >= 18) {
        alert ("Bienvenido de nuevo!")
    }
    else{
        console.log ("acceso denegado")
    }
    




    //2

    let enStock = prompt("el producto esta en stock?");
    let precioConDescuento = prompt ("el producto tiene desceunto?");

    if (enStock === "si" || precioConDescuento === "si"){
        console.log("producto disponible");
    }

    else{
        console.log("producto no disponible");
    }





//3

let sesionIniciada = prompt ("iniciaste sesion? si o no");

if (!sesionIniciada){
    console.log("por favor inicia sesion");
}
else{
    console.log("Bienvenido de nuevo");
}



//4

let usuario = prompt("ingrese su Usuario");
let contraseia = prompt("ingrese la contraseña");

if (usuario === "admin" && (contrasenia === "secreta" || contrasenia ==="123456")){
    console.log("Bienvenido");
}
else{
    console.log("acceso denegado");
}
