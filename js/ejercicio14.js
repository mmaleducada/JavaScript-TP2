let frase = prompt("Introduce una frase");
let longitud = frase.length;    //Devuelve la longitud del string.
let caracter;
let i;

for (i = 0; i < longitud; i++) {
    caracter = frase.charAt(i);    //recupera el caracter i del string.
    if (i == longitud - 1) {
        document.write(caracter);
    }
    else {
        document.write(caracter + "-");
    }
}