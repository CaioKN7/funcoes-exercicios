//Exercício 3

function imprimirSoma(numero1, numero2) {

    return soma = numero1+numero2
    
}

function imprimirMiltiplicacao(numero1, numero2) {

    return multiplicacao = numero1*numero2
    
}

function imprimirDivisao(numero1, numero2) {

    return divisao = numero1/numero2
    
}

function imprimirSubtracao(numero1, numero2) {

    return subtracao = numero1-numero2
    
}

numero1 = +prompt ("digite um numero:")
numero2 = +prompt ("Digite outro")

//Soma
console.log("A soma desses 2 números é:")
 console.log(imprimirSoma(numero1,numero2))

//Multiplicação
console.log("A multiplicacação desses 2 números é:")
console.log(imprimirMiltiplicacao(numero1,numero2))

//Divisão
console.log("A divisão desses 2 números é:")
console.log(imprimirDivisao(numero1,numero2))

//Subtração
console.log("A subtração desses 2 números é:")
console.log(imprimirSubtracao(numero1,numero2))