// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

//syntax 1

function multiplyNumber(number) {
  return number * 100;
}
var numbersByOneHndred = numbers.map(multiplyNumber);

console.log('Syntax 1:', numbersByOneHndred);

//syntax 2

var numPercentage = numbers.map(number => {
  return number * 100;
});
console.log('Syntax 2:', numPercentage);

//syntax 3

var numByPercentage = numbers.map(number => number * 100);

console.log('Syntax 3:', numByPercentage);
