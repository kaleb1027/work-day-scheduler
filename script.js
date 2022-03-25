


//sets time
currentDay = document.getElementById("currentDay");
function refreshTime(){
    var rightNow = moment().format("MMMM Do, HH:mm:ss");
    currentDay.textContent = rightNow;
}
setInterval(refreshTime,1000);



//color codes past,present,and future


//saves local storage
var saveButton = $(".saveBtn");
console.log(saveButton);

saveButton.on("click", function(){
    var text = $(this).siblings(".description").val();
    var blockID = $(this).parent().attr("id");
    localStorage.setItem(blockID, text);
})

$("#hour9 .description").text(localStorage.getItem("hour9"));
$("#hour10 .description").text(localStorage.getItem("hour10"));
$("#hour11 .description").text(localStorage.getItem("hour11"));
$("#hour12 .description").text(localStorage.getItem("hour12"));
$("#hour13 .description").text(localStorage.getItem("hour13"));
$("#hour14 .description").text(localStorage.getItem("hour14"));
$("#hour15 .description").text(localStorage.getItem("hour15"));
$("#hour16 .description").text(localStorage.getItem("hour16"));
$("#hour17 .description").text(localStorage.getItem("hour17"));





















