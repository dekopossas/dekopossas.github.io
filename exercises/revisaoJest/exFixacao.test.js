function randomNumber() {
  return Math.round(Math.random()*100)
}

function isDivisible(n) { 
  return (randomNumber() % n) === 0
}
test('testando se randomNumber foi chamado em isDivisible', () => {

  randomNumber = jest
    .fn()
    .mockReturnValueOnce(5)
    .mockReturnValueOnce(21)

  isDivisible(3);
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(isDivisible(7)).toBe(true);
});
