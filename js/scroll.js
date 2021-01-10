$(document).ready(function(){
  const buttonUp = $('#buttonUp');

  $(window).scroll (function() {
    if ($(this).scrollTop () > 300) {
      buttonUp.fadeIn();
    } else {
      buttonUp.fadeOut();
    }
  });

  buttonUp.click (function(){
    $('html, body').animate({
    scrollTop: 0
    }, 800);
    return false;
    });
});
