//Exercício 3

function imprimirSoma(numero1, numero2) {

    const soma = numero1+numero2
    console.log(soma)
    
}

function imprimirMiltiplicacao(numero1, numero2) {

    const multiplicacao = numero1*numero2
    console.log(multiplicacao)
    
}

function imprimirDivisao(numero1, numero2) {

    const divisao = numero1/numero2
    console.log(divisao)
    
}

function imprimirSubtracao(numero1, numero2) {

    const subtracao = numero1-numero2
    console.log(subtracao)
    
}

numero1 = +prompt ("digite um numero:")
numero2 = +prompt ("Digite outro")

//Soma
console.log("A soma desses 2 números é:")
imprimirSoma(numero1,numero2)

//Multiplicação
console.log("A multiplicacação desses 2 números é:")
imprimirMiltiplicacao(numero1,numero2)

//Divisão
console.log("A divisão desses 2 números é:")
imprimirDivisao(numero1,numero2)

//Subtração
console.log("A subtração desses 2 números é:")
imprimirSubtracao(numero1,numero2)