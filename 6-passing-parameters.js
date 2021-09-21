function* counterGenerator(start = 0, end = Infinity) {
  for(let i = start; i < end; i++){
    yield i
  }
}

const gen = counterGenerator(5,7)

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

function* observerGenerator() {
  console.log('Generator created')
  
  while(true) {
    const value = yield;
    console.log(`Value passed: ${value}`)
  }
}

const it = observerGenerator()
it.next(1)
it.next(2)
it.next(3)

function* solveRiddle(){
  const question = "What's the Asnwer to the Ultimate Question of Life, the Universe, and Everything?"
  
  const answer = yield question;

  if(answer === 42) yield true
  else yield false
}

const it2 = solveRiddle()
const question = it2.next().value
console.log(question)

const result = it2.next(42).value
console.log(result)