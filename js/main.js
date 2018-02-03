var color = ['red', 'yellow', 'green'];

$('#game-box').click(function(e) {
  $('.header')
    .removeClass('header-unclicked')
    .addClass('header-clicked');
  $('.title')
    .removeClass('title-unclicked')
    .addClass('title-clicked');
  $('.circle').each(function(index, element) {
    $(this)
      .removeClass('gray')
      .addClass(color[index]);
  });
});

$(document).click(function(e) {
  if (!$(e.target).closest('#game-box').length) {
    $('.header')
      .removeClass('header-clicked')
      .addClass('header-unclicked');
    $('.title')
      .removeClass('title-clicked')
      .addClass('title-unclicked');
    $('.circle').each(function(index, element) {
      $(this)
        .removeClass(color[index])
        .addClass('gray');
    });
  }
});

$(function() {
  $('#game-box').draggable();
});
