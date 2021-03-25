$(document).ready(function () {

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));


    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);

})

    $("#Hr-9am .description").val(localStorage.getItem("9am"));
    $("#Hr-10am .description").val(localStorage.getItem("10am"));
    $("#Hr-11am .description").val(localStorage.getItem("11am"));
    $("#Hr-12pm .description").val(localStorage.getItem("12pm"));
    $("#Hr-1pm.description").val(localStorage.getItem("1pm"));
    $("#Hr-2pm.description").val(localStorage.getItem("2pm"));
    $("#Hr-3pm .description").val(localStorage.getItem("3pm"));
    $("#Hr-4pm.description").val(localStorage.getItem("4pm"));
    $("#Hr-5pm .description").val(localStorage.getItem("5pm"));
    


    function hourTracker(){
        var currentHour = moment().hour();

        $(".time-slots").each(function(){
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentHour)

            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})




    
