currentDay = document.getElementById("currentDay");
function refreshTime(){
    var rightNow = moment().format("MMMM Do, HH:mm:ss");
    currentDay.textContent = rightNow;
}
setInterval(refreshTime,1000);

var saveButton = $(".saveBtn");
console.log(saveButton);

saveButton.on("click", function(){
    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");


    localStorage.setItem(time, text);
})














