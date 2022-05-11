function getTasklist(page){
    fetch('https://www.datanom.ax/~kjell/Tidsredovisning/getTasklist.php?page='+page)
    .then(function(response){
        if(response.status ==200){
            return response.json();
        }
    })
    .then(function(data){
        appendRows(data);
        sidnav(page, data.pages);
    })
}


//hämtar lista med tasks baserat på datum
function getTasklistDates() {
    let fromDate = document.getElementById("fromDate").value;
    let toDate = document.getElementById("toDate").value;

    fetch('https://www.datanom.ax/~kjell/Tidsredovisning/getTasklist.php?from=' + fromDate + "&to=" + toDate)
        .then(function (response) {
            if (response.status == 200) {
                return response.json();
            }
        })
        .then(function (data) {
            appendRows(data);
        })
}

//hämtar lista med tasks sidvis
function getTasklistPages(page) {
    fetch('https://www.datanom.ax/~kjell/Tidsredovisning/getTasklist.php?page=' + page)
        .then(function (response) {
            if (response.status == 200) {
                return response.json();
            }
        })
        .then(function (data) {
            appendRows(data, page);
        })
}




function appendRows(data) {
    let tasks = data.tasks

    //tömmer sidan .
    let tabell
    tabell = document.getElementById('tasks');
    tabell.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {

        //skapar tabellrad
        let tr
        tr = document.createElement('tr');
        tr.id = tasks[i].id;
        

        //skapar uppgift cell i raden
        let td_task;
        td_task = document.createElement('td');
        td_task.innerHTML = tasks[i].activity;
        tr.appendChild(td_task);

        //skapar datum cell i raden
        let td_datum;
        td_datum = document.createElement('td');
        td_datum.innerHTML = tasks[i].date;
        tr.appendChild(td_datum);


        //skapar desc :D
        let td_desc;
        td_desc = document.createElement('td');
        td_desc.innerHTML = tasks[i].description;
        tr.appendChild(td_desc);

        //skapar tid cell i raden
        let td_tid;
        td_tid = document.createElement('td');
        td_tid.innerHTML = tasks[i].time;
        tr.appendChild(td_tid);
        
        //skapar radera cell i raden
        let td_radera;
        td_radera = document.createElement('td');
        td_radera.innerHTML = "Radera";
        tr.appendChild(td_radera);
        tabell.appendChild(tr);
    }
}

/*
    document.getElementById("tasks")
    tablebody.innerHTML = "";
    //for loop som loopar igenom tasks.length
        //skapa ett tr element och td element för varje cell 
     let tr = document.createElement("tr");


   td = document.getElementById("td");
    tablebody.innerHTML = tasks[i].date;
    td.appendChild(data);
}
*/

function sidnav(page,pages){
    let ul=document.getElementById("sidnav");
    ul.innerHTML="";

    //första sidnav :D
    let li1=document.createElement("li");
   li1.onclick = function(){
        getTasklist(1);
    }
    li1.innerHTML="Forsta";
    ul.appendChild(li1);
    

    //förra sidnav :D
    let li2=document.createElement("li");
   li2.onclick = function(){
        getTasklist(page -1);
    }
    li2.innerHTML="Förra";
    ul.appendChild(li2);

    //nästa sidnav :D
    let li3=document.createElement("li");
   li3.onclick = function(){
        getTasklist(page +1);
    }
    li3.innerHTML="Nästa";
    ul.appendChild(li3);

    //sista sidnav :D
    let li4=document.createElement("li");
   li4.onclick = function(){
        getTasklist(pages);
    }
    li4.innerHTML="Sista";
    ul.appendChild(li4);
}
//sätter default värden på datumfälten på sidan, dagens datum och ett datum bakåt i tiden
function setDates() {
    let date = new Date();
    document.getElementById("toDate").value = date.toISOString().split('T')[0];
    date.setDate(date.getDate() - 400)
    document.getElementById("fromDate").value = date.toISOString().split('T')[0];
}