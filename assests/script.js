$(document).ready(function() {

var today= moment().format('MMMM DD YYYY');
console.log(today)
var date = $('#date')
date.text(today)

var storedPlans = JSON.parse(localStorage.getItem("storedPlans"));
// See if array exists if not create and set a test
if (storedPlans !== null) {
    Console.log(' not working')
  planArr = storedPlans;
} else {
    console.log('worked')
  planTextArr = new Array(9);
  planTextArr[4] = "test";
}


for(i=9 ; i<= 17; i++) {
    var index = i -9
    // new row
    var newrows = $('<div>').addClass('row hourslots').attr('hour', index);
    // div with Hour
    var hourdiv = $('<div>').addClass('col-md-2 time');
    var hourspn =$('<span>').attr('class','time').text(index);
    var hrInput = $('<div>').addClass('col-md-9').append($('<input>').attr('id', index).text('placeholder'));
    var svBtn = $('<div>').addClass('col-md-1').append($('<i>').addClass('saveIcon').text('placeholder'))
    $('#timeslots').append(newrows);
    newrows.append(hourdiv.append(hourspn));
    newrows.append(hrInput);
    newrows.append(svBtn);
   
    // hour formatter
    var displayHour = 0;
    var ampm = "";
    if (i > 12) { 
      displayHour = i - 12;
      ampm = "pm";
    } else {
      displayHour = i;
      ampm = "am";
    }
    


 

    


    // closing Braket for loop
};
// closes on ready
});