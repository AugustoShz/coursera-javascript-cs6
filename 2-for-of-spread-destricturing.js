const name = 'Florence';

// for(let item of name) {
//   console.log(item)
// }

const nameIt = name[Symbol.iterator]();
// for(let item of nameIt) {
//   console.log(item)
// }

let spices = ['cumin', 'cardamom', 'nutmeg', 'ginger'];
let moreSpices = ['clove', 'fennel'];

// const letters = [...name];
// console.log(letters)

const mergedSpices = [...spices, ...moreSpices]
console.log(mergedSpices)

const [first, second] = spices;
console.log(first, second)