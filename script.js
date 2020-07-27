// Time Variables
const today = moment().format("dddd, MMMM Do, YYYY"); // Current day
const currentTime = moment(); //Current time
const currentHour = moment().format("k"); //Current hour in military time

let taskInput = $(".row textarea[type=text]"); //

$(document).ready(function() {
});

$("#currentDay").append(today) // Adds current day/date at top of Calendar.


// Time block background colors for past(gray), present(red) and future(green)

$(taskInput).each(function() {       // Creates a for loop though each row class for the ID 
                                    //  of each textarea div.(https://api.jquery.com/each/#each-function)
    
   
    const taskInputNumber = parseInt($(this).attr("id"));
    console.log(taskInputNumber)       //Compares textares ID to current hour.
    if (taskInputNumber < currentHour) {
        $(this).addClass("past")
    }

    else if (taskInputNumber == currentHour) {
        $(this).addClass("present")
    }

    else if (taskInputNumber > currentHour) {
        $(this).addClass("future")
    }

});

