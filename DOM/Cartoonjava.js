document.getElementById("Hej").onmouseover= function(){mouseOver()};
document.getElementById("Hej").onmouseout = function(){mouseOut()};

function mouseOver(){
    document.getElementById("Hej").style.color = "red";
}

function mouseOut(){
    document.getElementById("Hej").style.color = "black";
}