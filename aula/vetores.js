//Criando um vetor.
const frutas = [`Maça`, `Banana`, `Laranja`]
console.log(frutas)

//acesar elementos especificos.
console.log(frutas[0])
console.log(frutas[1])

//Adicionando elementos.
frutas.push(`Uvas`)
console.log(frutas)

// Remover elementos.
frutas.pop()
console.log(frutas)

frutas.splice(1,1) //REmove apenas o segundo.
console.log(frutas)

//Percorrendo o vetor.
frutas.forEach((fruta, index) => {
    console.log(`${index}: ${fruta}`)

})