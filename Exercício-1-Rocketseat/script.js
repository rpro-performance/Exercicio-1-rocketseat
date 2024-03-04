let number1 = prompt(`Digite o primeiro número`)
let number2 = prompt(`Digite o segundo número`)

number1 = Number(number1)
number2 = Number(number2)


const adi = number1 + number2
const sub = number1 - number2
const multi = number1 * number2
const div = number1 / number2
const restDiv = number1 % number2

function checkOddOrEven(adi) {
  if(adi %2 === 0) {
    return "Par"
  } else {
    return "Impar"
  }
} 

function SameOrDifferent(number1, number2) {
  if(number1 === number2) {
    return "Igual"
  } else {
    return "Diferente"
  }
}

alert('Adition: ' + adi)
alert('Subtracion: ' + sub)
alert('Multiplication: ' + multi)
alert('Division: ' + div)
alert('remainder of the division: ' + restDiv)
alert(`O resultado da soma é:` + checkOddOrEven(adi))
alert(`Os dois números inseridos são:` + SameOrDifferent(number1, number2))

