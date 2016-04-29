// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on('ready', function() {
  $('#new_tweet').submit( function(e) {

    e.preventDefault();
    data = $(this).serialize();
    //  console.log($(this).serialize());
    $.ajax({method: 'post',
      url: '/tweets',
      data: data
    }).done(function(data) {
      $('.tweets').prepend(data);
    });
  });
});


// on('click', function(e)
//$('#tweets').prepend('#tweet-message').val();
