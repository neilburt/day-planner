const hourNow = parseInt(moment().format('H'));

$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm a'));

// loads any entries existing in local storage
function renderPlanner() {
  $('#9t').val(localStorage.getItem("9 am"));
  $('#10t').val(localStorage.getItem("10 am"));
  $('#11t').val(localStorage.getItem("11 am"));
  $('#12t').val(localStorage.getItem("12 pm"));
  $('#1t').val(localStorage.getItem("1 pm"));
  $('#2t').val(localStorage.getItem("2 pm"));
  $('#3t').val(localStorage.getItem("3 pm"));
  $('#4t').val(localStorage.getItem("4 pm"));
  $('#5t').val(localStorage.getItem("5 pm"));
}
renderPlanner();

// makes clicking each hour row's button save the entry to local storage under specific key
$('.saveBtn').on('click', function(event) {
  event.preventDefault();
  let time = $(this).siblings().eq(0).text();
  let appt = $(this).siblings('.entry').val();
  localStorage.setItem(time, appt);
});

// live color-codes hour rows based on actual time
$('.hour').each(function() {
  if(hourNow > parseInt($(this).attr('id'))) {
    $(this).siblings().eq(0).addClass('past')
  } else if(hourNow < parseInt($(this).attr('id'))) {
    $(this).siblings().eq(0).addClass('future')
  } else {
    $(this).siblings().eq(0).addClass('present')
  }
});