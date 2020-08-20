    
const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


function allNames() {
  // escreva seu código aqui
//   declarei um array vazio.
  const authorNames = [];
//   usei o metodo forEach para passar por todos os objetos do array 'books' e adicionar ao meu array a propriedade nome do author de cada livro.
  books.forEach(book => authorNames.push(book.author.name));
//   declarei a function que pretendo usar no reduce.
  const reduceFunction = (a, b) => `${a} ${b},`;
//   declarei uma variavel para atribuir uma string com o reduce do meu array authorNames iniciando com Nome:
  const phrase = authorNames.reduce(reduceFunction, 'Nomes:');
//   declarei uma variável para splitar as letras da minha string formada pelo reduce.
  const splitArray = phrase.split('');
//   atribui ao ultimo elemento do meu array split, que era uma ',' um dot '.'
  splitArray[splitArray.length-1] = '.';
//   retornei a function allNames já com o Join.
  return splitArray.join('');
};
console.log(allNames());

assert.deepEqual(allNames(), "Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.");