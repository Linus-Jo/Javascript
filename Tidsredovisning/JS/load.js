window.onload=function(){
    getTasklist(1);
    setDates();
    fillDropdown();
    document.getElementById("dateGet").addEventListener("click",function(){getTasklistDates()});
    document.getElementById("pageGet").addEventListener("click",function(){getTasklistPages(1)});
}
