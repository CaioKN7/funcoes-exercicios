//Exercício 2

function imprimirSoma(numero1, numero2) {

    const soma = numero1+numero2
    console.log(soma)
    
}

console.log("Exercício 2A")
imprimirSoma(35, 60)

function imprimirSeSaoIguais(numero1, numero2) {

    const igualdade = numero1 >= numero2
    console.log(igualdade)
    
}

console.log("Exercício 2B")
imprimirSeSaoIguais(30, 45)
imprimirSeSaoIguais(40, 30)
imprimirSeSaoIguais(96, 96)



function imprimirSeEpar(numero1) {

    const parOunao = numero1 % 2===0;
    console.log(parOunao);
    
}

console.log("Exercício 2C")
imprimirSeEpar(8)
imprimirSeEpar(7)



function imprimirSalarioComDesconto(valor) {

    return valor *0.10;
    
}

const salarioTotal = 2500.00
const desconto = salarioTotal - imprimirSalarioComDesconto(salarioTotal)
console.log("Exercício 2D")
console.log("O salário total de 2,500.00 com o desconto de 10% no INSS é:", desconto)
