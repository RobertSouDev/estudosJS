// 1. Declare uma variável de nome weight
let name = "weight"

// 2.  Que tipo de dado é a variável acima
console.log(typeof name)

/* 3. Declare uma váriavel e atribua valores para casa
   um dos dados:
       * name: String
       * age: Number (integer)
       * star: Number(float)
       * isSubscribed: Boolean
*/

let newName = "str"
let age = 32
let star = 3.4
let Boo = false
const lista = [newName, age, star, Boo]

/*  4. A variável student abaixo é de que tipo ?

    4.1 Atribua a ela as mesmas propiedades e valores
    do exercício 3.

    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> para <weight> pelos 
        valores de cada propiedade
*/
let student = {} // object

console.log(`tipo da variavel student ${typeof student}`)

let objeto = {
    newName: "Robert",
    age : 32,
    star : 3.4,
    Boo : false,
}

let nomeo = objeto.newName
let idadeo = objeto.age
console.log(`sou ${nomeo},tenho idade ${idadeo}`)