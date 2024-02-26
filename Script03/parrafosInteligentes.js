/*
    González Navarro Oscar Eduardo 4SA
 */

//Referenciamos el body
const body = document.querySelector('body')

//Bucle para crear los 5 párrafos
for (let i=0;i < 5 ; i++){

    //Se crea el párrafo
    const parrafo = document.createElement('p')

    //Variable para almacenar el total de caracteres por párrafo
    totalCaracteres = 0

    //Seleccionamos un número aleatorio entre 50 y 100 para las palabras
    let numPalabsAlea = Math.floor(Math.random() * 51) + 50

    //Se almacena en una variable lo que regrese la función
    let contenido = llenarParrafos(numPalabsAlea)

    //Se asigna el contenido obtenido al texto del parrafo
    parrafo.textContent = contenido

    //Se agregan y muestran la cantidad de carácteres de cada párrafo
    totalCaracteres += contenido.length

    console.log('La cantidad de carácteres del párrafo ' + [i + 1] + ' es: ' + totalCaracteres)

    //Se conecta con el body
    body.appendChild(parrafo)

}

//Función encargada de llenar los párrafos
function llenarParrafos(numPalabsAlea){
    
    //Cadena de carácteres para usar
    let caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789 '
    //Variable para almacenar el texto
    let texto = ''

    //Bucle para agregar carácteres al texto
    for (let i = 0; i < numPalabsAlea; i++) {
      texto += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }
    return texto
}