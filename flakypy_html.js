toggleContent = function(elem) {
    elem.classList.toggle("active")
    var content = elem.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

selectDivRun = function() {
    var sel = document.getElementById("selectDivRun");
    var runNumber = sel.value;

    // Hide all other runs
    var allRuns = document.getElementsByClassName("divergence")
    for (let run of allRuns) {
        run.style.display = "none"
    }

    // Show selected run
    document.getElementById(`div-${runNumber}`).style.display = "inline-flex";
}

selectAnomRun = function() {
    var sel = document.getElementById("selectAnomRun");
    var runNumber = sel.value;

    // Hide all other runs
    var allRuns = document.getElementsByClassName("anomalies")
    for (let run of allRuns) {
        run.style.display = "none"
    }

    // Show selected run
    document.getElementById(`anom-${runNumber}`).style.display = "inline-flex";
}