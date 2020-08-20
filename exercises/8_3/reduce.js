    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
//   declarei um array e atribui a esse array os arrays concatenados usando o metodo reduce e concat, peguei esse conteúdo na aula de reduce 8.3 as 1hora e 10 minutos.
  const array = arrays.reduce((a, b) => a.concat(b));
  return array;
};

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
