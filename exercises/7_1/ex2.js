const longestWord = (frase) => {
    let palavras = frase.split(' ');
    let maiorPalavra = '';
    for (let c = 0; c < palavras.length; c += 1){
        if (palavras[c].length > maiorPalavra.length){
            maiorPalavra = palavras[c];
        }
    }
    return maiorPalavra;
}
let andreFalando = 'Antônio foi no banheiro e não sabemos o que aconteceu mentiraaaaaaaa'
console.log(longestWord(andreFalando))