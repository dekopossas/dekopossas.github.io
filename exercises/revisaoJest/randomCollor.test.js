const service = require('./randomCollor');

test("#randomRgbColor", () => {
  // testando se a função foi chamada
  service.randomRgbColor = jest.fn();

  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});
