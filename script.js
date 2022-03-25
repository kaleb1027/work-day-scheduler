


//sets time in the header (live updates)
currentDay = document.getElementById("currentDay");
function refreshTime(){
    var rightNow = moment().format("MMMM Do, HH:mm:ss");
    currentDay.textContent = rightNow;
}




//tracks the time and color codes accordingly
function liveColorCode(){
    var currentHour = moment().hour();

    //loops through each time block to capture the block's assigned hour and compare it to the current hour 
    $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(currentHour, blockHour);


        if (currentHour < blockHour){
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
        else if(currentHour > blockHour){
            $(this).addClass("past")
            $(this).removeClass("present")
            $(this).removeClass("future")
        }
        else{
            $(this).removeClass("past")
            $(this).addClass("present")
            $(this).removeClass("future")
        }
    })
}



//saves local storage
var saveButton = $(".saveBtn");
console.log(saveButton);

saveButton.on("click", function(){
    var text = $(this).siblings(".description").val();
    var blockID = $(this).parent().attr("id");
    localStorage.setItem(blockID, text);
})

//loads pre-existing local storage
$("#hour9 .description").text(localStorage.getItem("hour9"));
$("#hour10 .description").text(localStorage.getItem("hour10"));
$("#hour11 .description").text(localStorage.getItem("hour11"));
$("#hour12 .description").text(localStorage.getItem("hour12"));
$("#hour13 .description").text(localStorage.getItem("hour13"));
$("#hour14 .description").text(localStorage.getItem("hour14"));
$("#hour15 .description").text(localStorage.getItem("hour15"));
$("#hour16 .description").text(localStorage.getItem("hour16"));
$("#hour17 .description").text(localStorage.getItem("hour17"));

//calls my two functions
setInterval(refreshTime,1000);
liveColorCode();





















