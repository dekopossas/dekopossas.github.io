let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var resultado = 0;
var numeroDeImpares = 0;

for (i = 0; i < numbers.length; i += 1){
  resultado = numbers[i] % 2 === 1;
  console.log(resultado)
  if (resultado == true){
    numeroDeImpares += 1
  }
}

if (numeroDeImpares === 0){
  console.log("Não há número ímpares no Array")
} else {
   console.log("exitem no array " + numeroDeImpares + " números ímpares")
}