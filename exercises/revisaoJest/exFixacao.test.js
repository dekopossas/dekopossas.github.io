function randomNumber() {
  return Math.round(Math.random()*100)
}

function isDivisible(n) { 
  return (randomNumber() % n) === 0
}
test('testando se randomNumber foi chamado em isDivisible', () => {

  randomNumber = jest.fn();

  isDivisible(2);

  expect(randomNumber).toHaveBeenCalledTimes(1);
});
