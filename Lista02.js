//  Parte 01
// Ecx 01
function boasVindas(nome){
    return `Olá, ${nome}! Seja bem-vindo(a) ao  JavaScript!`;
}
console.log(boasVindas("Taylor Swift"));
// -----------
// Ex 02
function comprimentar(nome){
    return `Olá, ${nome}!`;
}
console.log(comprimentar("Madelyn Cline"));
// -----------
// Ex 03
function somar(a, b){
    let resultado = a + b;
    return `${a} + ${b} = ${resultado}`;
}
console.log(somar(24,4));
// -----------
// Ex 04
function subtrair(a, b){
    let resultado = a - b;
    return `${a} - ${b} = ${resultado}`;
}
console.log(subtrair(25, 15));
// -----------
// Ex 05
function multiplicar(a, b){
    let resultado = a * b;
    return `${a} * ${b} = ${resultado}`;
}
console.log(multiplicar(30, 5));
// -----------
// Ex 06
function dividir(a, b){
    let resultado = a / b;
    return `${a} / ${b} = ${resultado}`;
}
console.log(dividir(100, 10));
// -----------
// Ex 07
let numeros = [1,2,3,4,5,6,7,8,9,10];

let dobrados = numeros.map((numero) => {
    return numero * 2;
});

console.log(dobrados);
// -----------
// Ex 08
let numeros1 = [1,2,3,4,5,6,7,8,9,10];

let triplos = numeros1.map((numero1) => {
    return numero1 * 3;
});

console.log(triplos);
// -----------
// Ex 09
let numeros2 = [1,2,3,4,5,6,7,8,9,10];

let quadrados = numeros2.map((numero2) => {
    return numero2 * 4;
});

console.log(quadrados);
// -----------
// Ex 10
function calcularMedia(n1, n2, n3){
    let media = (n1 + n2 + n3) / 3;
    return `A média de ${n1}, ${n2} e ${n3} é ${media}`;
}
console.log(calcularMedia(10, 10, 10));
// Parte 02
// Ex 11
function conta (num) {
    if(num % 2 === 0){
        return "O número é par"
    } else{
        return "O número é ímpar"
    }
}
console.log(conta(12));
// Ex 12
function idade (idade) {
    if(idade >= 18){
        return "Maior de idade"
    } else{
        return "Menor de idade"
    }
}
console.log(idade(24))
// Ex 13
function nota(nota){
    if(nota >= 7 && nota <= 10){
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}
console.log(nota(9));
// Ex 14
function maiorQueDois(num1, num2) {
    if(num1 > num2) {
        return `O ${num1} é maior do que o ${num2}`
    } else if(num2 > num1){
        return `O ${num2} é maior do que o ${num1}`
    } else if (num1 < num2) {
         return `O ${num1} é menor do que o ${num2}`
        } else if(num2 < num2) {
            return `O ${num2} é menor do que o ${num1}`
        } else {
            return "Os dois são iguais"
        }
}
console.log(maiorQueDois(24, 120));
// Ex 15
function positivoNegativo(num3) {
    if(num3 >0 ) {
        return "Positivo"
    } else {
        return "Negativo"
    }
}
// Ex 16
function valorFinal(preço, desconto) {
    let descontoAplicado = (preço * desconto) / 100;
     return `O valor com o desconto é de ${descontoAplicado}`;
}
console.log(valorFinal(250, 10));
// Ex 17
function celsius(C){
    let fahrenheit = (C * 9) / 5+32
    return `A converção de ${C} graus celsius  para fahrenheit é ${fahrenheit} `; 
}
console.log(celsius(24));
// Ex 18
function nomeCompleto(nome, sobrenome){
    return `O nome completo é ${nome} ${sobrenome}`
}
console.log(nomeCompleto("Heather","Mulgrew"));
// Ex 19
function caracteres(C1,C2,C3,C4,C5,C6,C7,C8){
    if(C1,C2,C3,C4,C5,C6,C7,C8) {
        return "True"
    } else {
        return "False"
    }
}
console.log(caracteres(1,2,3,4,5,6,7,8));
// Ex 20
function calculadora(c,d) {
    let operação1 = (c+d);
    let operação2 = (c*d);
    let operação3 = (c-d);
    let operação4 = (c/d);
    return `O resultados das operações é: 
     ${operação1}
     ${operação2}
     ${operação3}
     ${operação4}`
}
console.log(calculadora(24, 12));
console.log(calculadora(15, 5));
console.log(calculadora(27, 3));
// Parte 03
// Ex 21
const somar1 = (e, f) => `${e} + ${f} = ${e+f}`;
console.log(somar1 (42, 67));
// Ex 22
const dobrados1 = (g) => `${g} * 2 = ${g*2}`;
console.log(dobrados1(244));
// Ex 23
const saudação = (nome) => `Olá ${nome}!`
console.log(saudação("Sabrina Carpenter"));
// Ex 24
const par = (num4) => `O ${num4} só é par se ${num4 % 2 === 0}`;
console.log(par(26));


 
   

   
