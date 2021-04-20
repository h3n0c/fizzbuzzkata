function isDivisibleBy3(num) {
  return num % 3 === 0;
}

function isDivisibleBy5(num) {
  return num % 5 === 0;
}

export function contains(num, number: number) {
  return num.toString().includes(number.toString());
}

export function fizzBuzz(num){
  let value = '';

  if (isDivisibleBy3(num) || contains(num, 3)) {
    value += 'Fizz';
  }

  if (isDivisibleBy5(num) || contains(num, 5)) {
    value += 'Buzz';
  }

  if(value.length === 0){
    value = num;
  }

  return value;
}

export function fizzBuzzList(num) {
  return (num === 1) ? 1 : fizzBuzzList(num-1) + ' ' + fizzBuzz(num);
}
