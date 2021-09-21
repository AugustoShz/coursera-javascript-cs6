function* italianCitiesGenerator() {
  yield* ['Rom', 'Florence', 'Turin'];
  yield 'Genoa';

  return 'Buongiorno'
}

function* citiesGenerator() {
  yield 'Paris';
  const value = yield* italianCitiesGenerator();
  yield value
  yield 'Berlin';
}

const it = citiesGenerator()

let result
do {
  result = it.next()
  console.log(result)
}while(!result.done)

function* flatten(array, depth = 1) {
  for(let item of array) {
    let recurseFlatten
    if(Array.isArray(item) && depth > 0) yield * flatten(item, depth - 1);
    else yield item
  }
}

const arr = [1, 2, [3, 4, [5, 6]]]
const flattened = [...flatten(arr, Infinity)]
console.log(flattened)