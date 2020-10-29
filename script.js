$(document).ready(function () {
    // display the current time and day
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
})
    
    //creating a function with click listener and a local storage to set items
    $(".saveBtn").on("click", function (){
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);

})