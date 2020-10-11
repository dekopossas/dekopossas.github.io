const randomNumber = () => Math.round(Math.random()*100)

const isDivisible = (n) => (randomNumber() % n) === 0

test('testando se randomNumber foi chamado em isDivisible'), () => {
  isDivisible(5);
  expect(randomNumber).toHaveBeenCalled();
}
