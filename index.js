const prompt = require('prompt-sync')();

const somar = require('./soma')
const subtrair = require('./subtracao')

let operador = prompt('digite a operação desejada ')
let numero1 = +prompt('digite o primeiro numero ')
let numero2 = +prompt('digite o proximo numero ')



if (operador === "+") {
    console.log(somar(numero1, numero2));
}

else if (operador === "-") {
    console.log(subtrair(numero1, numero2));
}