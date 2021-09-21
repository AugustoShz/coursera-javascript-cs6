const text = 'Rhyme'
const textIt = text[Symbol.iterator]()

console.log(textIt.next());
console.log(textIt.next());
console.log(textIt.next());
console.log(textIt.next());
console.log(textIt.next());
console.log(textIt.next());

const cities = ['Sofia', 'New Delhi', 'Tokyo']

const citiesIt = cities[Symbol.iterator]()


let result = citiesIt.next() 
do {
  console.log(result)
  result = citiesIt.next()
} while(!result.done)