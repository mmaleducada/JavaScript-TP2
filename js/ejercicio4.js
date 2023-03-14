let suma = 0;

do {
    let numero = parseInt(prompt('Ingresa un numero'));

    if (numero == numero) {
        suma = suma + numero;
    } else {
        alert('El dato ingresado no es un numero, por favor ingrese un numero');
    }
} while (confirm("Desea continuar?")) {
    document.write(suma);
}