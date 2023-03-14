let cadena = prompt("Introduce un Texto:");
let longitud = cadena.length;
let j;
let car;
let salida = "";

for (j = 0; j < longitud; j++) {
    car = cadena.charAt(j);
    salida = car + salida;
}
document.write(salida);