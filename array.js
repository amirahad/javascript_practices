numbers = ['one', 'two', 'three', 'four']
console.log(numbers);

console.log(numbers.shift());

console.log(numbers);

console.log(numbers.unshift('Something'));
console.log(numbers);

console.log(numbers.pop());
console.log(numbers);

console.log(numbers.push('five'));
console.log(numbers);

numbers.splice(2, 1, 'Anything')
console.log(numbers);