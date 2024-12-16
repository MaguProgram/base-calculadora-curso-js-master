// AGREGA A LA PANTALLA EL VALOR DEL BOTON
function agregar(numeros) {
    document.getElementById('pantalla').value += numeros // Con getelement seleccionamos un elemento de HTML
}

// BORRA TODO
function borrar() {
    document.getElementById('pantalla').value = ''
}

// NOS GENERA EL CALCULO MATEMATICO
function resultado() {
    const valorPantalla = document.getElementById('pantalla').value
    const result = eval(valorPantalla)
    document.getElementById('pantalla').value = result
}
