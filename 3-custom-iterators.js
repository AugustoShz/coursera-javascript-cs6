class Polygon {
  constructor(...sides) {
    this.sides = sides
  }

  [Symbol.iterator]() {
    let currentSideIndex = 0;

    return {
      next: () => {
        if(currentSideIndex < this.sides.length){
          return { value: this.sides[currentSideIndex++], done: false }
        } else return { done: true }
      }
    }
  }
}

const poly = new Polygon(1, 2, 3, 4, 5)

for(let side of poly){
  console.log(side)
}

function idMaker() {
  let iteration = 1

  return {
    next: () => {
      return { value: iteration++, done: false }
    }  
  }
}

const it = idMaker();

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)