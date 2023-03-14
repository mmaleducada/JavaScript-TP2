const filas = parseInt(prompt("Ingrese número de filas:"));
const columnas = parseInt(prompt("Ingrese número de columnas:"));
let resultado = filas * columnas;

document.write(`<table><tbody>`);
// dibuja las filas
for(let indiceFilas=0; indiceFilas < filas; indiceFilas++){
    document.write(`<tr>`);
    // dibuja las columnas
    for(let indiceColumnas=0; indiceColumnas < columnas; indiceColumnas++){
        document.write(`<td>`);
        document.write(resultado);
        resultado--;
        document.write(`</td>`);
    }
    document.write(`</tr>`);
}
document.write(`</tbody></table>`);