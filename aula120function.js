const sum = function(number1 , number2){
    total = number1 + number2
    return total
}

let number1 = 2
let number2 = 5

console.log(`o numero  é ${number1}`)
console.log(`o numero  é ${number2}`)

console.log(`a soma é ${sum(number1, number2)}`)
// function scope

let subject

function createThink(subject) {
    subject = "study" // tem significado
    return subject
}

console.log(subject)
console.log(createThink(subject))

// function hoisting
console.log("function hoisting")
sayMyname()

function sayMyname(){
    console.log(`Mayk`)
}

// arraw function 
console.log("arraw function ")


const sayMyName = () => {
    console.log('Mayk')
}

sayMyName()