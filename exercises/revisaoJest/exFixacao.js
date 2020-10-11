const randomNumber = () => Math.round(Math.random()*100)

const isDivisible = (n) => (randomNumber() % n) === 0

module.exports = { randomNumber, isDivisible };
