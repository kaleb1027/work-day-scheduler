currentDay = document.getElementById("currentDay");

function refreshTime(){
    var rightNow = moment().format("MMMM Do, HH:mm:ss");
    console.log(rightNow);
    currentDay.textContent = rightNow;
}

setInterval(refreshTime,1000);
