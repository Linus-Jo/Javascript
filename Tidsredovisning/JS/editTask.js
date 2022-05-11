//skapar formulär för ny task
function resetTaskForm() {
    document.getElementById("taskformlegend").innerHTML="Ny Uppgift";
    fillDropdown();
    document.getElementById("dateinput").value = "";
    document.getElementById("timeinput").value = "";
    document.getElementById("commentinput").value = "";
    document.getElementById("sendTask").onclick=function(){
        saveTask();
    }
}



function fillDropdown(activityId = -1){
    let dropdown = document.getElementById("activityinput");
    dropdown.innerHTML = "";
   
   
    fetch('https://www.datanom.ax/~kjell/Tidsredovisning/getActivityList.php')
        .then(function (response) {
            if (response.status == 200) {
                return response.json();
            }
        })
        .then(function (data) {
            let activities = data.activities;
            for (let i = 0; i < activities.length; i++) {
                let option = document.createElement('option');
                option.value = activities[i].id;
                option.innerHTML = activities[i].activity;
                if(activityId!=-1 && activityId==activities[i].id){
                    option.selected=true;
                }
                dropdown.appendChild(option);
            }
        })
}

function deleteTask(){
        //skapa ett formdata objekt
        let FD = new FormData();
        FD.append("id", id);
    
        //Sparar via fetch med post data
        fetch('https://www.datanom.ax/~kjell/Tidsredovisning/deleteTask.php'+id,
            {
                method: 'post',
                body: FD
            })
            .then(function (response) {
                if (response.status == 200) {
                    return response.json();
                }
                else {
                    throw (error);
                }
            })
            .then(function (data) {
                resetTaskForm();
            })
}

//Sparar eller Redigerar en uppgift mot databasen
function saveTask(id = -1) {
    //hämta input från formulär
    let activityId = document.getElementById("activityinput").value;
    let date = document.getElementById("dateinput").value;
    let time = document.getElementById("timeinput").value;
    let comment = document.getElementById("commentinput").value;

    //skapa ett formdata objekt
    let FD = new FormData();
    FD.append("activityId", activityId);
    FD.append("date", date);
    FD.append("time", time);
    FD.append("description", comment);

    let getText="";
    if(id!=-1){
        getText="?id="+id;
 }
 }