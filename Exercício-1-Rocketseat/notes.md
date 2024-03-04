let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while(Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente:")
  xAttempts++
}
alert(`Parabéns, você adivinhou o numero em ${xAttempts} tentativas`)
// lista 2


let option;
let items = []

while(option !=3) {

  
  option = Number(prompt(`
  Olá usuário! Digite o número da opção desejada
  
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `));
  
  switch(option) {
    case 1:
      let item = prompt("Digite o nome do item")
    items.push(item) 
      break;
    case 2:
      if(items.length == 0) {
        alert("Não existe itens cadastrados")
      } else {
        alert(items)
      }
      break;
    case 3:
        alert("bye")
        break;
    default:
        alert("Opção não identificada em nossos recursos. Tente novamente!")
  }
}
console.log(option, items)
  