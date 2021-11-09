//En array tillsätts värde med []


index=Math.floor(Math.random()*3)
let fruits=["apel","päron","banan"];

console.log(fruits[index]);
fruits[2]="kiwi";
console.log(fruits[2]);
console.log(fruits);
fruits.push("banana");
console.log(fruits);
//Shift() och pop() tar ut färsta respektive sista medlemmen i arrayn
let eatFruit=fruits.shift();
console.log(eatFruit);
console.log(fruits);

//andra array metoder: reverse() sort() slice() concat() 