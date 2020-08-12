const fatorial = (n) => {
    if (n === 0) {
        return `A fatoração do numero zero é ${1}`;
    } else if (n < 0) {
        return `Não tem como fatorar números negativos.`
    } else {
        let resp = 1;
        for (let c = 1; c <= n; c += 1){
            resp *= c;
        }
    return `o fatorial do numero ${n} é ${resp}`;
    }
}
console.log(fatorial(5))
// expectativa 24
