$(document).ready(function() {

var today= moment().format('MMMM DD YYYY');
console.log(today)
var date = $('#date')
var currenthour = moment().format('H');
console.log(currenthour)

date.text(today)

var storedPlans = JSON.parse(localStorage.getItem("storedPlans"));
// See if array exists if not create and set a test
if (storedPlans !== null) {
    console.log(' not working')
  planTextArr = storedPlans;
} else {
    console.log('worked')
   planTextArr = new Array(9);
};


for(i=9 ; i<= 17; i++) {
    
    var index = i -9
    var inputID= 'input'+index
    // new row
    var newrows = $('<div>').addClass('row hourslots').attr('id', i);
    // div with Hour
    var hourdiv = $('<div>').addClass('col-md-2 time');
    var hourspn =$('<span>').attr('class','time');
    var hrInput = $('<div>').addClass('col-md-9 shadow-pulse').append($('<input>').attr('id', inputID).addClass('input').val(planTextArr[index])).attr('placeholder', 'Enter your Plans here');
    var svBtn = $('<div>').addClass('col-md-1 fa fa-save saveIcon').attr('hour', index);
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
    hourspn.text(displayHour + ampm)

    // set row color 

   if(i < currenthour){
     hourdiv.addClass('past')
     svBtn.addClass('past')
   } else if(i === currenthour){
    hourdiv.addClass('present')
    svBtn.addClass('present')
   } else {
    hourdiv.addClass('future')
    svBtn.addClass('future')
   };
 
    // closing Braket for loop
};

$('.saveIcon').on('click', function(event){
  event.preventDefault();
  var index = $(this).attr('hour')
  var inputID = '#input'+ index
  var value= $(inputID).val();  
  planTextArr[index] = value;
  localStorage.setItem("storedPlans", JSON.stringify(planTextArr))
  });

// closes on ready
});