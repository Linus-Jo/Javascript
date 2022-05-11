function getCompilation(){
    let fromDate
    let toDate
    fetch('https://www.datanom.ax/~kjell/Tidsredovisning/getCompilation.php?'+'from='+fromDate+'&to='+toDate)
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
window.onload=function(){
    getCompilation();
}


