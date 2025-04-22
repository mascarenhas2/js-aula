//i =1
//console.log(i++)
//console.log(i)
//y = 10
//console.log(++y)

//Somando todas as idades.
console.log(`Soma de todas as idades. `)
const somaIdades = usuario.reduce((total, usuario) => total + usuario.idade, 0)
console.log(`Soma das idades: ${somaIdades} `)

//Transofrmar elementos.
console.log(`\nOperação de multiplicação - dobrar valor`)
const numeros = [2, 4, 6, 8]
const numerosDobrados = numeros.map(numero=> numero * 2)
console.log(`Numeros a dobrar: ${numeros}`)
console.log(`Numeros Dobrados: ${numerosDobrados}`)