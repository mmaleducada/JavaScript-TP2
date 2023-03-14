let edad = parseInt(prompt("Ingresa tu edad"));

if (edad <= 130 && edad > 0) {
    if (edad < 80 && edad > 18) {
        document.write("La persona puede conducir");
    } else if (edad >= 80 || edad < 18) {
        document.write("No es recomendable conducir")
    } 
} else {
    document.write("ingreso un valor invalido")
}