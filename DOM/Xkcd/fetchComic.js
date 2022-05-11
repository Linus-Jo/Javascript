function getComic(which){
    fetch('https://xkcd.vercel.app/?comic='+which)
    .then(function(response){
        if(response.status ==200){
            return response.json();
        }
    })
    .then(function(data){
        if(typeof(document.maxComic) == "undefined"){
            document.maxComic = data.num;
        }
        appendComic(data);
    });
}


function appendComic(data){
    let mainComic = document.getElementById("mainComic");
    mainComic.innerHTML =""
    
 //Den hämtar titeln från comicen. 
    let titel = document.createElement("h1");
  titel.innerHTML = data.title;
  mainComic.appendChild(titel);
  
  //här så visar den datum då comicen publicerades.
  let date = document.createElement("time");
  date.innerHTML = data.day + "." + data.month + "." + data.year;
  mainComic.appendChild(date);

  //här skapar jag en figure tag.
    let fig = document.createElement("figure");
// här skapar jag en bild och lägger till den till figure-taggen.
    let bild = document.createElement("img");
    bild.src = data.img;
    fig.appendChild(bild);

    //här skapar jag en bildtext till comicen.
    let num = document.createElement("figcaption");
    num.innerHTML="Comic number: " + data.num;
    fig.appendChild(num);
    //här appendar jag figen.
    mainComic.appendChild(fig);

    //här så sparar jag comic-numret i en variabel.
    document.currentComic = data.num;

}

window.onload = function(){
    document.maxComic;
    getComic("latest");

    document.getElementById("forsta").onclick = function(){
        getComic(1);
    }

document.getElementById("forra").onclick = function(){
    
    if(document.currentComic==1){
        alert("sket sig");
    }else{
        getComic(document.currentComic -1);
    }
}
document.getElementById("slumpa").onclick = function(){
    getComic(Math.floor(Math.random()*document.maxComic));
}
document.getElementById("nasta").onclick = function(){
    if(document.currentComic != document.maxComic){
        getComic(document.currentComic +1);
    }
}

document.getElementById("sista").onclick = function(){
    getComic("latest"); 
}
}