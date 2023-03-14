let frase = prompt("Introduce una frase:");
let longitud = frase.length;
let cadena = frase.toUpperCase();
let car;
let contador = 0;

for (let i = 0; i < longitud; i++) {
    car = cadena.charAt(i);
    if (car === "A" || car === "E" || car === "I" || car === "O" || car === "U") {
        contador++;
    }
}

document.write("Número de Vocales: " + contador + ".");
