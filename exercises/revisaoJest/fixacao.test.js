const math = require('./mockDeModulos');

describe('testando function subtrair', () => {
  it('chamando subtrair', () => {
    math.subtrair = jest.fn();
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  })
})

describe('testando function multiplicar', () => {
  it('implementando o retorno padrao em 10', () => {
    math.multiplicar = jest
      .fn()
      .mockReturnValue(10)

    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe(10)
  })
})

describe('testando mock da função soma', () => {
  it('soma com função original', () => {
    expect(math.somar(1, 2)).toBe(3) 
  })
  it('testa um mock da função somar', () => {
    math.somar = jest.fn().mockImplementation((a, b) => a + b);
    math.somar(3, 4)
  })
  it('se a função somar foi chamada', () => {
    math.somar(3, 4)
    expect(math.somar).toHaveBeenCalled()
  })
  it('testando se foi somanda a implementation correto', () => {
    expect(math.somar(4, 3)).toBe(7)
  })
})