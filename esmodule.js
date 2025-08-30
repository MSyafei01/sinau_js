
// Contoh Ekspor Function
modules.export = value;
export const name = 'John';
export const favoriteFood = ['pizza', 'pasta', 'sushi'];

export function sayHi(name) {
    console.log(`Hi, ${name}!`);
}

// Contoh Impor Function
const myImportValue = require('../sinau_js/module.js');
console.log(myImportValue.name);
console.log(myImportValue.favoriteFood);
myImportValue.sayHi(myImportValue.name); 
cd
import { name, favoriteFood as food, sayHi } from '../sinau_js/module.js';

console.log(name);
console.log(food);
sayHi(name);

