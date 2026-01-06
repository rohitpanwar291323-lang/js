const marvel_heroes = ["Thor", "Iron man", "Captain America"]

const dc_heroes = ["Batman", "Superman", "Flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// const super_heroes= marvel_heroes.concat(dc_heroes)             // limitation is that you can concat only two elements
// console.log(super_heroes);


const super_heroes = [...marvel_heroes, ...dc_heroes]              // spread: no limitation you can concat more than two elements
// 

const another_array = [1, 2, 3, [2, 3, 5], [4, 6, [2, 3, 8]]]
const real_array = another_array.flat(Infinity)

// console.log(real_array);



console.log(Array.isArray("Rohit"));   // check if it is Array or not
console.log(Array.from("Rohit"));      // convert into Array
console.log(Array.from({name: "Rohit"}));  // gives an empty Array bbecause it is not specifed 

let score1 = 100
let score2 = 150
let score3 = 200

console.log(Array.of(score1 , score2, score3));     // converts into Array




