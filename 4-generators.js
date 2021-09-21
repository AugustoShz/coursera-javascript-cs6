function* generator() {
  yield 1;
  yield 2;
  return 15;
  yield 3;
}

const gen = generator()

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

class Polygon {
  constructor(...sides) {
    this.sides = sides
  }

  *[Symbol.iterator]() {
    for(let side of this.sides) yield side
  }
}

const poly = new Polygon(1, 2, 3, 4, 5)

for(let side of poly) {
  console.log(side)
}

console.log('idMaker')
function* idMaker() {
  let iteration = 1

  while(true){
    yield iteration++
  }
}

const it = idMaker();

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)