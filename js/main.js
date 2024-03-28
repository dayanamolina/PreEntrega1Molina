// function aplicarDcto() {

//     let nombre = prompt("Ingrese su nombre");
//     let precio;
//     let cursoLenceria = 1
//     let cursoBikinis = 2
//     let efectivo = 1
//     let tarjeta = 2

//     if (nombre) {
//         alert("Bienvenido " + nombre + "!");

//         while (true) {
//             let productos = prompt("Ingrese el número del curso: 1)Lencería, 2)Bikinis")

//             if (parseInt(productos) === cursoLenceria) {
//                 alert("El valor del curso es de $20000");
//                 precio = 20000;
//                 break;
//             }
//             if (parseInt(productos) === cursoBikinis) {
//                 alert("El valor del curso es de $25000");
//                 precio = 25000;
//                 break
//             }
//             else {
//                 alert("Opcion incorrecta, ingrese el Nº 1 para Lencería o el Nº 2 para Bikinis.") 
//             }

//         }

//         while (true) {
//             metodoPago = prompt("Ingrese el número del método de pago: 1)Efectivo, 2)Tarjeta");
//             if (parseInt(metodoPago) === efectivo || parseInt(metodoPago) === tarjeta) {
//                 break;
//             } else {
//                 alert("Opcion incorrecta, ingrese el Nº 1 para Efectivo o el Nº 2 para Tarjeta.");
//             }
//         }


//         if (parseInt(metodoPago) === efectivo) {
//             precio -= (precio * 0.20);
//             alert("Se aplicó un descuento del 20% por pago en efectivo. El monto a pagar es: $" + precio.toFixed(2));
//         } else {
//             precio += (precio * 0.10);
//             alert("Se incrementó un 10% por pago con tarjeta. El monto a pagar es: $" + precio.toFixed(2));
//         }
//     }
// }
// aplicarDcto()






// let nombreCurso = prompt("Ingrese el nombre del producto seleccionado");
// let precioCurso = prompt("Ingrese el precio del producto seleccionado");
// let categoriaCurso = prompt("Ingrese la categoria del producto seleccionado");

// let curso = {
//     nombre: nombreCurso,
//     precio: precioCurso,
//     categoria: categoriaCurso,
// }

// let carritoCursos = [];

// carritoCursos.push(curso);

// console.log(carritoCursos);





// se crea variable que indica si se sale del ciclo while o no
let salir = false

// Se crea el array de cursos 
let carritoCursos = [];

// Se crea ciclo while con la condicion de que mientras salir sea false el ciclo continue
while (!salir) {

    //Se obtienen los datos del curso
    let nombreCurso = prompt("Ingrese el nombre del producto seleccionado");
    let precioCurso = prompt("Ingrese el precio del producto seleccionado");
    let categoriaCurso = prompt("Ingrese la categoria del producto seleccionado");

    //Se crea el objeto curso
    let curso = {
        nombre: nombreCurso,
        precio: precioCurso,
        categoria: categoriaCurso,
    }

    //Se añade el objeto curso al array de cursos
    carritoCursos.push(curso);

    //Se pregunta al usuario si quiere salir o continuar cargando cursos
    let quiereSalir = prompt("Seleccione 1 si quiere salir y seleccione 2 si desea continuar")

    //Si selecciona 1 se cambia el valor de la variable salir a true para terminar de cargar los cursos y salir del ciclo while
    if (quiereSalir === "1") {
        salir = true
    }
}

console.log(carritoCursos);

