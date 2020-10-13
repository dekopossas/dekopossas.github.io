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