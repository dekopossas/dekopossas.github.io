const assert = require('assert')
// 2 objétos criado para o exercicio com nome, idade gostos e nacionalidade.
const alex = {
    name: "Alex",
    age: 26,
    likes: ["fly fishing"],
    nationality: "Australian"
};

const gunnar = {
    name: "Gunnar",
    age: 30,
    likes: ["hiking", "scuba diving", "taking pictures"],
    nationality: "Icelandic"
};

// complete a assinatura da função abaixo
// variável criada para separar os gostos de cada pessoa. 
// metodo object destruction para acessar cara valor do objeto.
const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(", ")}.`;
assert.equal(personLikes(alex), "Alex is 26 years old and likes fly fishing.");
assert.equal(personLikes(gunnar), "Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.");