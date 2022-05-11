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

//hämtar lista med tasks baserat på datum
function getTasklistDates() {
    let startDate = document.getElementById("fromDate").value;
    let stopDate = document.getElementById("toDate").value;

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
