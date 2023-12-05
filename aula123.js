/* function constructor

    * expresão new
    * criar um novo objeto
    * this keyword
*/

function Person (name){ // sempre coloca letra M primeiro por ideia de boas praticas
    this.name = name
    this.walk = function (){
        return this.name +" Andando"

}
}
const jose = new Person("jose") // return um Object
const roger = new Person("roger") 

console.log(jose.walk())
console.log(roger.walk())