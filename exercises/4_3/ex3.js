// Exercicios do quarto bloco!
//agora vai em!
let n = 5;
var esp = ' ';
var sim = '*';
var linha = '';
var espacos = '';
var simbolos = '';
var numeroDeEspacos = '';
var numeroDeSimbolos = '';

if (n == 1){
  console.log(sim);
}else{
  for ( var c = 1; c <= n; c += 1){
    numeroDeEspacos = (n-c) * esp;
    console.log(numeroDeEspacos)
    numeroDeSimbolos = c * sim;
    linha = numeroDeEspacos + numeroDeSimbolos;
    console.log(linha)
  }
}
