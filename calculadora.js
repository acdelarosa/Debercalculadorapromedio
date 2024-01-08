let nombre = prompt("Ingrese su nombre")


let materia = (prompt("Ingrese materia"))


let c1 = parseInt(prompt ("Ingrese primera calificación (De 0 a 10)"))
let c2 = parseInt(prompt ("Ingrese segunda calificación (De 0 a 10)"))
let c3 = parseInt(prompt ("Ingrese tercera calificación (De 0 a 10)"))

if (isNaN(c1) || isNaN(c2) || isNaN(c3) || c1 > 10 || c1 < 0 || c2 > 10 || c2 < 0 || c3 > 10 || c3 < 0) {alert ("Ingrese una nota válida del 0 al 10")}
else{console.log(c1)
    console.log(c2)
    console.log(c3)
    let promedio= (c1 + c2 + c3)/3
    console.log (promedio)
    if (promedio >= 7) { alert(nombre + " !Felicidades¡ Has aprobado con un promedio de " + promedio) }
else if (promedio < 7) { alert(nombre + ", gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es " + promedio) }

}