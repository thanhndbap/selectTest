// CUSTOM JAVASCRIPT FOR SELECT PAGE
/*
    Control Toggle Menu Bar
*/
$(document).ready(function(){
  var contador = 1;
  $('.header-content .col-md-2 span').click(function(){
    if(contador == 1){
      $('.header-content .wraper-menu-main').animate({
        left: '0'
      });
      contador = 0;
    } else {
      contador = 1;
      $('.header-content .wraper-menu-main').animate({
        left: '-100%'
      });
    }
    $('.header-content .col-md-2 span').removeClass('hidden')
    $(this).toggleClass('hidden');
  });
});