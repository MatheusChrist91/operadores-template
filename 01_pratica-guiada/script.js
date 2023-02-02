/*        PRÁTICA GUIADA
let saldo
console.log(`valor inicial do saldo é: ${saldo}`)

// Operação número 1
saldo = 15
saldo = saldo + 22.4
console.log(`O valor do saldo após a primeira operação é: ${saldo}`)

// Operação número 2 
saldo = saldo - 12.34
console.log(`O valor do saldo após a segunda operação é :${saldo}`)

// Operação número 3 
saldo = saldo / 3
console.log(`O valor do saldo após a terceira operação é: ${saldo}`)

// Operação número 4
saldo = saldo * 3.42
console.log(`O valor do saldo após a quarta operação é: ${saldo}`)

// Operação número 5
saldo = saldo % 3
console.log(`O valor do saldo após a quinta operação é: ${saldo}`)


// PRÁTICA GUIADA 2
console.log(2 * 2 + 2)
console.log (2 * (2 + 2))

// PRÁTICA GUIADA 2
const resultado1 = 5 === 5  
console.log(`Comparação 1 é: ${resultado1}`)

const resultado2 = 5 !== 5
console.log(`Comparação 2 é: ${resultado2}`)

const resultado3 = 5 !== '5'
console.log(`Comparação 3 é: ${resultado3}`)

const resultado4 = '5' === 'cinco'
console.log(`Comparação 4 é: ${resultado4}`)

const resultado5 = typeof 5 === typeof 20
//                 number       number
console.log(`Comparação 5 é: ${resultado5}`)

const resultado6 = typeof '5' === typeof 'cinco'
//                  string         string
console.log(`Comparação 6 é: ${resultado6}`)

const resultado7 = 5  === Math.round(4.98888)
console.log(`Comparação 7 é: ${resultado7}`)


// PRÁTICA GUIADA 3
const primeiroNumero = 15
const segundoNumero = 24

// Comparaçao 1
const compara1 = primeiroNumero === segundoNumero
console.log(`Comparação 1 é: ${compara1}`)

// Comparaçao 2
const compara2 = primeiroNumero >= segundoNumero
console.log(`Comparação 2 é: ${compara2}`)

// Comparação 3
const compara3 = primeiroNumero > segundoNumero
console.log(`Comparação 3 é: ${compara3}`)

// Comparação 4
const compara4 = primeiroNumero < segundoNumero
console.log(`Comparação 4 é: ${compara4}`)



// PRÁTICA GUIADA 4
//a: Quero dirigir um Celta 2012;
//b: Sou maior de idade;
//c: Consigo comprar o Celta por 22.000 reais;
//d: Consigo alugar o Celta;
//e: Tenho carteira de motorista;

//Quero dirigir o Celta 2012
//Não sou maior de idade
//Sou maior de idade e não tenho carteira de motorista
//Sou maior de idade e consigo comprar ou alugar o Celta
//Sou maior de idade e tenho carteira de motorista, mas não quero dirigir o Celta
*/


// EXERCÍCIO DE FIXAÇÃO 1

let minhaidade = Number(prompt('Qual a sua idade'))
let amigoidade = Number(prompt('Qual a idade do seu melhor amigo?'))
let diferencarelacao = minhaidade > amigoidade
let diferencaaritimetica = minhaidade - amigoidade

console.log (`Sua idade é maior que a do seu melhor amigo? ${diferencarelacao}`)
console.log(`A diferença de idade é: ${diferencaaritimetica}`)



/*
// EXERCÍCIO DE FIXAÇÃO 2

const a = 'Vou pra praia'
const b = 'Sou maior de idade'
const c = 'Posso tomar uma cervejinha'
const d = 'Quero passear de carro'


1) Não sou maior de idade e quero passear de carro
2) Sou maior de idade e vou para a praia, e não quero passear de carro
3) Vou para a praia ou quero passear de carro
4) Posso tomar uma cervejinha e não vou passear de carro


console.log(`${!b && d}`) //false
console.log(`${(b && a) && !d}`) //false
console.log(`${a || d}`)
console.log(`${c || d}`)

*/
