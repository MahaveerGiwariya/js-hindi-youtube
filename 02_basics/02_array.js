const marvel_heros =[ "shaktiman", "balveer", "spiderman"]
const dc_heros = [ "superman", "flash", "batman"]

//marvel_heros.push(dc_heros) // array in to array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
 // two arrray join karne ke liya
//  const new_array=  marvel_heros.concat(dc_heros)
// console.log(new_array);

// dusra tarika 
const all_new_heros = [ ...marvel_heros, ...dc_heros]

//console.log(all_new_heros);

const another_array = [ 1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]] ]

const real_another_array = another_array.flat(Infinity)

//console.log(real_another_array); //  1, 2, 3, 4, 5,6, 7, 6, 7, 4,5

console.log(Array.isArray("hitesh")) //ye bata y h ki array h ya nhi 
console.log(Array.from("mahaveer")) // ye word ko string me change karta h
console.log(Array.from({name: "mahaveer"})) // interesting give []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
