const pokeTipsCallback = (callback) => {
    setTimeout(() => {
        callback('uma string louca');
    }, 300);
}

test('pokeTips precisa retornar essa strung', (done) => {
    pokeTipsCallback((tip) => {
        expect(tip).toBe('uma string louca');
        done();
    })
})

const pokeTipsPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('uma string louca');
        },500);
    })
}

test('pokeTipsPromise retona a string que esperamos', () => {
    return pokeTipsPromise().then((tip) => {
        expect(tip).toBe('uma string louca');
    });
});

test('pokeTipsPromise retorna a string esperado', () => {
    return expect(pokeTipsPromise()).resolves.toBe('uma string louca');
});