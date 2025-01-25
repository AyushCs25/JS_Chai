const marvel_Heros=["thor","spiderman","ironMan"]
const dc_Heros=["Superman","Batman","Flash"]

// marvel_Heros.push(dc_Heros)
// console.log(marvel_Heros[3][1]);

// const all_Heros = marvel_Heros.concat(dc_Heros);
// console.log(all_Heros);

const all_Heros = [...marvel_Heros, ...dc_Heros]
console.log(all_Heros);

const another_array = [1,2,3, [4,5,6], 7, [6,7,[4,5]]];
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Ayush"));
console.log(Array.from("Ayush"));
console.log(Array.from({name: "Ayush"}));       // Interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3));