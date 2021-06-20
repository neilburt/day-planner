const currentDay = $('#currentDay');
const hourEl = $('.hour');
const hourNow = parseInt(moment().format('H'));
const saveBtn = $('.saveBtn');

currentDay.text(moment().format('MMMM Do YYYY, h:mm a'));

saveBtn.on('click', function(event) {
  event.preventDefault();
  let time = $(this).siblings().eq(0).text();
  let appt = $(this).siblings('.entry').val();

  localStorage.setItem(time, appt);
});

// live color-codes hour rows based on actual time
hourEl.each(function() {
  if(hourNow > parseInt($(this).attr("id"))) {
    $(this).siblings().eq(0).addClass('past')
  } else if(hourNow < parseInt($(this).attr("id"))) {
    $(this).siblings().eq(0).addClass('future')
  } else {
    $(this).siblings().eq(0).addClass('present')
  }
});

function init() {
  
}