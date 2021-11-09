//uppgift 1

console.log(4+4);
console.log(16-8);
console.log(4*2);
console.log(16/2);
console.log(2**3);
console.log(17%9)
//Uppgift 2

let Rovsmor="rovsmor";
let langd=Rovsmor.length;
console.log(`Det här är ${Rovsmor} och längden är ${langd}`);

//Uppgift 3

let arstid="sommar";
if (arstid=="sommar"){
    console.log("Potatis");
}else{
console.log("Ingen potatis")
}

//Uppgift 4

let fruit=1;
if (fruit>0){
    console.log("Det finns frukt kvar"); 
}else{
    console.log("ingen frukt kvar");
}

//uppgift 5
/*
let Aland = {name:"Dödsorsakaren", age:87, hairColor:"blonde",
langd:1.60, roll:"dödare"};
console.log(Aland.name);
console.log(Aland.age);
console.log(hairColor);
console.log(Aland.langd);
console.log(Aland.roll)
*/
//Uppgift 6

let världshav=["Indiska Oceanen", "Stilla havet", "Atlanten"];
console.log(världshav);

//uppgift 7

världshav.push("Medelhavet");
console.log(världshav);
let hav1=världshav.shift(); //tar ut första havet så att den blir ensam
console.log(hav1)   //här så skriver man ut den.
let hav4=världshav.pop(); //här så lägger man ut det sista havet ensam
console.log(hav4);  //här så skriver man ut den

världshav.splice(1,0,"Östersjön");
console.log(världshav[1]);
console.log(världshav);
