var numrep = parseInt(prompt("Introduce numero de repeticiones"));

if (numrep == numrep) {
    
    if (numrep > 0 && numrep <= 50) {
        var rep,i;
        
        for (i = 0; i <=numrep; i++) {
            
            for (rep = 1; rep <= i; rep++) {
                document.write(rep);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número introducido no es válido");
    }
} 
else {
    alert("No has introducido un número");
}