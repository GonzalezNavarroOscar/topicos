/*
    González Navarro Oscar Eduardo 4SA
*/

//Referenciamos el body
const body = document.querySelector('body')

//Arreglo de colores para que sea aleatorio (20 colores en esta ocasión)
const colores = ['#F72585','#B5179E','#7209B7','#560BAD','#480CA8','#3A0CA3','#3F37C9','#4361EE','#4895EF','#4CC9F0',
'#001219','#005F73','#0A9396','#94D2BD','#E9D8A6','#EE9B00','#CA6702','#BB3E03','#AE2012','#9B2226']

//Ahora bien, es necesario utilizar un arreglo nuevo, para almacenar los colores que ya se utilizaron
const coloresUtilizados = []

//Finalmente necesitamos un último arreglo para almacenar los colores restantes
const coloresRestantes = []

//Bucle para crear los 10 divs
for (let i=0;i<=10 ; i++){

    //Se crea el div
    const div = document.createElement('div')

    //Se le modifica el tamaño
    div.style.height = '100px'

    //Al arreglo de colores restantes, se le asignarán los valores restantes exceptuando al utilizado
    const coloresRestantes = colores.filter(color => !coloresUtilizados.includes(color))

    //Seleccionamos el color para el div
    const colorSeleccionado = coloresRestantes[Math.floor(Math.random() * coloresRestantes.length)]

    //Después de ello, agregamos ese color al arreglo de colores usados
    coloresUtilizados.push(colorSeleccionado)

    //finalmente modificamos el color de los divs
    div.style.backgroundColor = colorSeleccionado

    //Se conecta con el body
    body.appendChild(div)

}