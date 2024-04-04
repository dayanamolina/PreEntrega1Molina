function obtenerNombre() {
    let nombre = prompt("Ingrese su nombre");
    //Forma de validar que se ingrese solo letras
    let soloLetras = /^[A-Za-z]+$/;
    while (!soloLetras.test(nombre)) {
        nombre = prompt("El nombre debe contener solo letras. Ingrese su nombre nuevamente:");
    }
    return nombre;
}

function obtenerCurso() {
    let curso = prompt("Ingrese el número del curso: \n1) Lencería\n2) Bikinis\n3) Corsetería\n4) Costura Inicial\n5) Moldería Base");
    //Forma de validar que se ingrese solo numeros
    let soloNumeros = /^\d+$/;
    while (!soloNumeros.test(curso)) {
        curso = prompt("Debe ingresar sólo el Nº del curso.  \n1) Lencería\n2) Bikinis\n3) Corsetería\n4) Costura Inicial\n5) Moldería Base");
    }
    return curso;
}

function obtenerMetodoDePago() {
    let metodoPago = prompt("Ingrese el número del método de pago: 1)Efectivo, 2)Tarjeta");
    //Forma de validar que se ingrese solo numeros
    let soloNumeros = /^\d+$/;
    while (!soloNumeros.test(metodoPago)) {
        metodoPago = prompt("Debe ingresar sólo el Nº del curso. Ingrese el número del método de pago: 1)Efectivo, 2)Tarjeta");
    }
    return metodoPago;
}

function deseaContinuar() {
    let deseaElegirOtroCurso = prompt("Desea cargar otro curso? 1) Si, 2) No.")
    if (deseaElegirOtroCurso === "2") {
        return false
    } else {
        return true
    }
}

function seleccionarCursos() {
    let cursoLenceria = 1
    let cursoBikinis = 2
    let cursoCorseteria = 3
    let cursoCosturaInicial = 4
    let cursoMolderiaBase = 5
    let continuar = true

    let cursos = []

    while (continuar) {
        let curso = obtenerCurso();

        if (parseInt(curso) === cursoMolderiaBase || parseInt(curso) === cursoBikinis || parseInt(curso) === cursoCosturaInicial || parseInt(curso) === cursoCorseteria || parseInt(curso) === cursoLenceria) {
            if (parseInt(curso) === cursoLenceria) {
                let cursoElegido = {
                    nombre: "Curso Lenceria",
                    precio: 20000
                }
                cursos.push(cursoElegido)
                continuar = deseaContinuar()
            }

            if (parseInt(curso) === cursoBikinis) {
                let cursoElegido = {
                    nombre: "Curso Biknis",
                    precio: 25000
                }
                cursos.push(cursoElegido)
                continuar = deseaContinuar()
            }

            if (parseInt(curso) === cursoCorseteria) {
                let cursoElegido = {
                    nombre: "Curso Corseteria",
                    precio: 28000
                }
                cursos.push(cursoElegido)
                continuar = deseaContinuar()
            }

            if (parseInt(curso) === cursoCosturaInicial) {
                let cursoElegido = {
                    nombre: "Curso Costura Inicial",
                    precio: 17000
                }
                cursos.push(cursoElegido)
                continuar = deseaContinuar()
            }

            if (parseInt(curso) === cursoMolderiaBase) {
                let cursoElegido = {
                    nombre: "Curso Molderia Base",
                    precio: 19000
                }
                cursos.push(cursoElegido)
                continuar = deseaContinuar()
            }
        } else {
            alert("Opcion incorrecta, Debe ingresar sólo el Nº del curso.  \n1) Lencería\n2) Bikinis\n3) Corsetería\n4) Costura Inicial\n5) Moldería Base.")
        }
    }
    return cursos
}

function obtenerSubtotal(cursos) {
    let subtotal = 0
    cursos.forEach(curso => {
        subtotal += curso.precio
    })
    return subtotal
}

function comprarCursos() {

    let nombre = obtenerNombre();
    let precio;
    let efectivo = 1
    let tarjeta = 2

    if (nombre) {
        alert("Bienvenido " + nombre + "!");

        const carritoCursos = seleccionarCursos();
        console.log(carritoCursos);

        //Mostrar listado de cursos seleccionados
        let listaCursos = ""
        carritoCursos.forEach(curso => {
            listaCursos += "-" + curso.nombre + "\n"
        })
        alert("Lista de cursos:\n" + listaCursos);

        //Mostrar el curso mas caro
        let precios = carritoCursos.map(curso => curso.precio);
        let precioMaximo = Math.max(...precios);
        let cursoMasCaro = carritoCursos.find(curso => curso.precio === precioMaximo);
        alert("El curso más caro es: " + cursoMasCaro.nombre + " con un precio de $" + cursoMasCaro.precio);

        let metodoPago = obtenerMetodoDePago();

        let subtotal = obtenerSubtotal(carritoCursos)
        let total = 0

        if (parseInt(metodoPago) === efectivo) {
            total = (subtotal * 0.80);
            alert("Se aplicó un descuento del 20% por pago en efectivo. El monto a pagar es: $" + total.toFixed(2));
            alert("Gracias por su compra")
        } else {
            total = (subtotal * 0.90);
            alert("Se incrementó un 10% por pago con tarjeta. El monto a pagar es: $" + total.toFixed(2));
            alert("Gracias por su compra")
        }
    }
}

comprarCursos()