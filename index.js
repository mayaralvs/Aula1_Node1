//const prompt = require ("prompt-sync")()

import PromptSync from "prompt-sync"
import chalk from "chalk"

const prompt = PromptSync()

/*const nome = prompt (chalk.green.bold("Digite seu nome: "))
console.log(chalk.magenta.bold(`Olá ${nome}!`))

const temp = Number(prompt(chalk.blue.italic("Digite a temperatura: ")))

if(temp > 38){
    console.log("Febre")
} else if (temp <26){
    console.log("Foi de base")
}
else {
    console.log("Tudo ok")
}

let salario = Number(prompt("Digite seu salario: "))
let aumento = Number(prompt("Digite o aumento: "))
const novo = salario+(salario*aumento/100)
console.log(`O novo salario é: ${novo}`)

let nascimento = Number(prompt("Digite o ano do seu nascimento: "))
const ano = new Date()
let idade = ano.getFullYear() - nascimento

if(idade > 18){
    console.log("Pode tirar sua habilitação, você tem " + idade + " anos!")
} else {
    console.log("Você tem " + idade + ", ainda não pode tirar sua habilitação")
}*/

const num1 = Number(prompt(chalk.magenta.bold("Digite o primeiro valor: ")))
const num2 = Number(prompt(chalk.green.bold("Digite o segundo valor: ")))
const num3 = Number(prompt(chalk.cyan.bold("Digite o terceiro valor: ")))
const num4 = Number(prompt(chalk.blue("Digite o quarto valor: ")))
const num5 = Number(prompt(chalk.yellow("Digite o quinto valor: ")))

const media = (num1 + num2 + num3 + num4 + num5)/5

console.log(chalk.red.italic("A média dos números digitados é: " + media))




