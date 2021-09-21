function* fibonacciGenerator() {
  let a = 0;
  let b = 1;

  while(true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const gen = fibonacciGenerator()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)


const isPrime = num => {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false
    }
  }

  return num > 1
}

console.log('Primes')
function* primeNumbersGenerator(){
  let number = 1

  while(true) {
    if(isPrime(number)) yield number;
    number++;
  }
}

const primeNumbersGen = primeNumbersGenerator();
console.log(primeNumbersGen.next().value)
console.log(primeNumbersGen.next().value)
console.log(primeNumbersGen.next().value)
console.log(primeNumbersGen.next().value)
console.log(primeNumbersGen.next().value)
console.log(primeNumbersGen.next().value)
console.log(primeNumbersGen.next().value)
console.log(primeNumbersGen.next().value)