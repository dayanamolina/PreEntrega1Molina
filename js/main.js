function aplicarDcto() {

    let nombre = prompt("Ingrese su nombre");
    let precio;
    let cursoLenceria = 1
    let cursoBikinis = 2
    let efectivo = 1
    let tarjeta = 2

    if (nombre) {
        alert("Bienvenido " + nombre + "!");

        while (true) {
            let productos = prompt("Ingrese el número del curso: 1)Lencería, 2)Bikinis")

            if (parseInt(productos) === cursoLenceria) {
                alert("El valor del curso es de $20000");
                precio = 20000;
                break;
            }
            if (parseInt(productos) === cursoBikinis) {
                alert("El valor del curso es de $25000");
                precio = 25000;
                break
            }
            else {
                alert("Opcion incorrecta, ingrese el Nº 1 para Lencería o el Nº 2 para Bikinis.") 
            }
                
        }
        
        while (true) {
            metodoPago = prompt("Ingrese el número del método de pago: 1)Efectivo, 2)Tarjeta");
            if (parseInt(metodoPago) === efectivo || parseInt(metodoPago) === tarjeta) {
                break;
            } else {
                alert("Opcion incorrecta, ingrese el Nº 1 para Efectivo o el Nº 2 para Tarjeta.");
            }
        }


        if (parseInt(metodoPago) === efectivo) {
            precio -= (precio * 0.20);
            alert("Se aplicó un descuento del 20% por pago en efectivo. El monto a pagar es: $" + precio.toFixed(2));
        } else {
            precio += (precio * 0.10);
            alert("Se incrementó un 10% por pago con tarjeta. El monto a pagar es: $" + precio.toFixed(2));
        }
    }
}
aplicarDcto()



