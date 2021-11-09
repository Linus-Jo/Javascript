//här deklarerar jag arrayer och variabler.
let bokstav=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
let skyltar =[];
let skylt = "";
//här loopar den igenom tusen gånger. 
for(let i=0;i<1000;i++){
    //här så genererar den bokstäver
    for(let j=0;j<3;j ++){
        skylt = skylt+(bokstav[Math.floor(Math.random()*bokstav.length)]);
    }
    //här så skapar jag siffror till skyltarna 
    skylt+="-";
    for(let k=0;k<3;k++){
        skylt=skylt+(Math.floor(Math.random()*10));
    }
    /*loopen backar iterationsvariabeln eller lägger skyltarna i en array */
    if(skyltar.includes(skylt)){
        i--;
    }else{
        skyltar.push(skylt);

    }
  
    skylt="";
}
    //här så skriver den ut skyltarna i konsolen.
    for(let i=0;i<1000;i++){
        //använder i ++ för att göra så att det skrivs ut 3 skyltar per rad.
        console.log(`[${skyltar[i++]}] [${skyltar[i++]}] [${skyltar[i++]}] [${skyltar[i]}]`);
    }
