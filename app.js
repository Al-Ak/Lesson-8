
$('.container .one a').click(function(e) {
    $('.container').not($(this).closest('.container')).find('.two, .three').hide();
    $(this).closest('.container').find('.two, .three').toggle();
  });