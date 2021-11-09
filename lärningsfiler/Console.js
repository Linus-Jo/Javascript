//Lektion 1 JavaScript

//Skriver ut till konsolen
console.log("Hello World");

/*
Kommentar som går över flera rader 
här är också en kommentar
och här
*/

//en variabel som declarereas med let går också att använda var men då har det en annan scope
let namn="Linus";
console.log(namn);
let a=4;
let b=5;
let c;
let d="2";
c=a+b;
console.log(c);
console.log(namn+b); //Concat 
console.log(a/d) //automatisk type conversion
console.log(b/namn);

//Datatyper
//String, Number(Integer,Double,Float), Boolean, (null,underfined)

let num=[];
console.log(typeof(num));


const pieish = 3.14;

//Type coversions Number()  String()
let place=54;
console.log(place);
console.log(place+2);
console.log(String(place)+2);