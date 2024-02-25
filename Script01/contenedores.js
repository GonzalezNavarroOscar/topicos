/*
    González Navarro Oscar Eduardo 4SA
 */ 

//Referenciamos el body
const body = document.querySelector('body')

//Arreglo de colores para que sea aleatorio
const colores =['#F72585','#B5179E','#7209B7','#560BAD','#480CA8','#3A0CA3','#3F37C9','#4361EE','#4895EF','#4CC9F0']

//Bucle para crear los 10 divs
for (let i=0;i<=10 ; i++){

    //Se crea el div
    const div = document.createElement('div')

    //Se le modifica el tamaño
    div.style.height = '100px'

    //Se le modifica el color de forma aleatoria según nuestro arreglo de colores
    div.style.backgroundColor = colores[Math.floor(Math.random()*colores.length)]

    //Se conecta con el body
    body.appendChild(div)

}