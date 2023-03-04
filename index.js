//const prompt = require ("prompt-sync")()

import PromptSync from "prompt-sync"
const prompt = PromptSync()

/*const nome = prompt ("Digite seu nome: ")
console.log(`Olá ${nome}!`)

const temp = Number(prompt("Digite a temperatura: "))

if(temp > 38){
    console.log("Febre")
} else if (temp <26){
    console.log("Foi de base")
}
else {
    console.log("Tudo ok")
}*/

/*let salario = Number(prompt("Digite seu salario: "))
let aumento = Number(prompt("Digite o aumento: "))
const novo = salario+(salario*aumento/100)
console.log(`O novo salario é: ${novo}`)*/

let nascimento = Number(prompt("Digite o ano do seu nascimento: "))
const ano = new Date()
let idade = ano.getFullYear() - nascimento

if(idade > 18){
    console.log("Pode tirar sua habilitação, você tem " + idade + " anos!")
} else {
    console.log("Você tem " + idade + ", ainda não pode tirar sua habilitação")
}

