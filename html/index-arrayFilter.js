const numbers = ['2', '4', '6', '8', '500', '12', '88', '100']


const newNumbers = number => number < 8
const newNumbers = number => number !== '8';

const Numbers = numbers.filter(newNumbers);

console.log(Numbers);