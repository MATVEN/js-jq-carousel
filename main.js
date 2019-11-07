$(document).ready(function(){


  $('.next').click(nextPhoto);
  $('.prev').click(prevPhoto);

  // funzioni
  function nextPhoto() {
    var positionImg = $('.slider-wrapper .images img.active');
    var positionI = $('.nav i.active');

    positionImg.removeClass('active');
    positionI.removeClass('active');

    // le img riniziano a scorrere della prima
    if (positionImg.hasClass('last')) {
      $('.slider-wrapper .images img.first').addClass('active');
      $('.nav i.first').addClass('active');
    }else {
      positionImg.next('img').addClass('active');
      positionI.next('i').addClass('active');
    }

  }

  function prevPhoto() {

    var positionImg = $('.slider-wrapper .images img.active');
    var positionI = $('.nav i.active');

    positionImg.removeClass('active');
    positionI.removeClass('active');

    // dalla prima img puoi rnare all'ulitma
    if (positionImg.hasClass('first')) {
      $('.slider-wrapper .images img.last').addClass('active');
      $('.nav i.last').addClass('active');
    }else {
      positionImg.next('img').addClass('active');
      positionI.next('i').addClass('active');

    }

  }
});
