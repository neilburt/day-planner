const currentDay = $('#currentDay');
const hourEl = $('.hour');
const hourNow = parseInt(moment().format('H'));
const saveBtn = $('.saveBtn');
var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];



let planner;
// renderPlanner();

currentDay.text(moment().format('MMMM Do YYYY, h:mm a'));


// makes clicking each hour row's button save the entry to local storage
saveBtn.on('click', function(event) {
  event.preventDefault();
  let time = $(this).siblings().eq(0).text();
  let appt = $(this).siblings('.entry').val();

  localStorage.setItem("appointment" + time, appt);
});

// live color-codes hour rows based on actual time
hourEl.each(function() {
  if(hourNow > parseInt($(this).attr('id'))) {
    $(this).siblings().eq(0).addClass('past')
  } else if(hourNow < parseInt($(this).attr('id'))) {
    $(this).siblings().eq(0).addClass('future')
  } else {
    $(this).siblings().eq(0).addClass('present')
  }
});

function renderPlanner(appt) {
 


 let getTextArea =  localStorage.getItem("appointment", appt);
  console.log("text area",getTextArea);
}

//displayHours();

renderPlanner();