//Criando um vetor de objetos.
const usuarios = [
    {nome:`Marta`, idade: 30},
    {nome: `Jose`, idade: 35},
    {nome:`Carla`, idade: 25}
]

//Exibindo.
console.log(usuarios)

usuarios.forEach(usuario => {
    console.log(`Nome: ${usuario.nome} - idade: ${usuario.idade} \n`)
})