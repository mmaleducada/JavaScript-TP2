let vocales = ["a", "e", "i", "o", "u"];
let texto = prompt("Introduce un texto");
let textoMinuscula = texto.toLowerCase();
let posicion = 0;
let parar = false;

for (var i = 0; i < textoMinuscula.length; i++) {
    for (var j = 0; j < vocales.length; j++) {
        if (vocales[j] == textoMinuscula.charAt(i)) {
            posicion = i;
            parar = true;
            break;
        }
    }
    if (parar) {
        break;
    }
}
document.write("La primera vocal está en la posición " + posicion);