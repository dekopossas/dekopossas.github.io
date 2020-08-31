// linha referente ao metodo assert para os testes.
const assert = require('assert')

// escreva sum abaixo
// declarei uma function 'sum' com rest operation 'numbers'.
function sum(...numbers) {
    // declarei a variável que vai acumular os numeros. Tipo um reduce.
    let c = 0;
    // criei um laço de repetição que vai percorrer o meu rest operation de numeros.
    for(number of numbers) {
        // para cada numero ele adiciona para o meu contador o valor do proximo numero aqui.
        c = c + number;
    }
    // retorna o valor do meu contador.
    return c;
}

console.log(sum())

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)