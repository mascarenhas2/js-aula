const usuarios = [
    {nome:`Marta`, idade: 31},
    {nome: `Jose`, idade: 35},
    {nome:`Carla`, idade: 25}
]

//Filtrar idade maior que 30
const idadeMaiorQue30 = usuarios.filter(usuario => usuario.idade > 30)
//console.log(idadeMaiorQue30)

console.log(`Listando todos os usuarios.`)
usuarios.forEach(usuario => 
    console.log(`Nome: ${usuario.nome}, idade${usuario.idade}`))

console.log(`\nIdade maior que 30.`)
idadeMaiorQue30.forEach(usuario => { 
    console.log(`Nome: ${usuario.nome}, idade: ${usuario.idade}`)

})

//encontar usuario especifico.
const usuarioEncontrando = usuarios.find(usuario => usuario.nome === `Marta`)
console.log(`\nEncontrando usuário.`)
console.log(usuarioEncontrando)