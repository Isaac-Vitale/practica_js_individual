//1
let estudiantes = ["Tom", "Ciro", "Sam", "Mily", "Lai"]
document.write(estudiantes)

//2
console.log(estudiantes[4])

//3
estudiantes[2] = "Samuel";
console.log(estudiantes)

//4
estudiantes.push("Albert");
alert("Se agregó un alumno: "+ estudiantes[estudiantes.length -1])

//5
estudiantes.pop("Albert")
console.log(estudiantes)

//6
estudiantes.unshift("Alberto")
console.log(estudiantes)

//7
estudiantes.shift()
console.log(estudiantes)   

//8
let ingresantes2023 = ["Yoel", "Samara", "Alexa"]
nuevoAño = estudiantes.concat(ingresantes2023)
console.log(nuevoAño)

//9
nuevoAño.sort()
console.log(nuevoAño)

//10
let articulos = ["Gaseosa", "Gomitas", "Alfajor", "Jugo de naranja", "Queso"]
articulo_añadido = prompt("Agregue un articulo a la lista")
articulos.push(articulo_añadido)
articulos.includes(articulo_añadido)
console.log(articulos)

