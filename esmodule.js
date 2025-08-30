
// Contoh Ekspor Function

export const name = 'John';
export const favoriteFood = ['pizza', 'pasta', 'sushi'];

export function sayHi(name) {
    console.log(`Hi, ${name}!`);
}

// Contoh Impor Function
import { name, favoriteFood as food, sayHi } from './module.js';

console.log(name);
console.log(food);
sayHi(name);