const currentDay = $('#currentDay');
let hourEl = $('.hour');
let hourNow = parseInt(moment().format('H'));

currentDay.text(moment().format('MMMM Do YYYY, h:mm a'));

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

