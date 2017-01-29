// jshint esversion:6

//SMOOTH SCROLL
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top-50
      }, 800);
      return false;
    }
  }
});

//SCROLL TO TOP
$(window).scroll(function() {
    if ($(this).scrollTop() > 2000) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
    }
});


$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       $('.scrollToTop').css('bottom', '3rem');
   }
   else {
     $('.scrollToTop').css('bottom', '0');
   }
});

$('.scrollToTop').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});

//BRAND PIC MINIMIZE ON SCROLL
$(document).ready(function(){
var scroll_start = 0;
var startchange = $('#startchange');
var offset = startchange.offset();
  if (startchange.length){
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").addClass("fixednav");
          $(".brand-img").addClass("brand-img-fixed");
      } else {
          $(".navbar").removeClass("fixednav");
          $(".brand-img").removeClass("brand-img-fixed");
      }
    });
  }
});

//MOBILEMENU
$(document).ready(function(){
  $('#menu').slicknav({
    label: '',
    duration: 0
  });
});
$(document).ready(function(){
  $('.slicknav_btn').click(function(){
    $('.slicknav_icon').toggleClass('open');
    $('.intro-section').toggleClass('intro-section-hidden');
  });
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
    $('.brand-img').css('width', '90%');
  } else {
    $('nav').removeClass('shrink');
    $('.brand-img').css('width', '115%');
  }
});

$(window).scroll(function() {
    $('#photo1').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
        $(this).addClass("slideUp");
      }
    });
  });

$(window).scroll(function() {
    $('#photo2').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
        $(this).addClass("slideUp");
      }
    });
  });


$(window).scroll(function() {
    $('#photo3').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
        $(this).addClass("slideUp");
      }
    });
  });

  //LOGO ANIMATION
$('#logo').click(function() {
    $(this).addClass("hatch");
  });

//CLICKEVENT ABOUT US
const desktop = window.matchMedia("(min-width: 1024px)");
const tablet = window.matchMedia("(min-width: 768px)");
const mobile = window.matchMedia("(max-width: 600px)");

var m = `<span style="font-size:2rem;">Mattias Östblom</span><br/>
         <span style="font-style:italic;">Frontend Utvecklare</span><br/><br/>
         Sedan Spider Link grundades har Mattias varit företagets ledstjärna inom webbutveckling. Mattias skicklighet som programmerare utmärker honom som en exceptionell resurs för Spider Link. Han trivs lika bra att arbeta med frontend- som backend-delen av en lösning.`;
var a = `<span style="font-size:2rem;">Andreas Engström</span><br/>
         <span style="font-style:italic;">Frontend Utvecklare</span><br/><br/>
         Andreas är vår kreativa utvecklare som har pysslat med programmering sen han skaffade sin första modem 1994. Som programmerare är Andreas en kreativ kraft i Spider Link som UI/UX-expert och iOS-utvecklare och kombinerar sina tekniska färdigheter med sitt öga för system och gränssnitt.`;
var n = `<span style="font-size:2rem; color:#373a3c;">Nicolas Fuentes</span><br/>
         <span style="font-style:italic; color:#373a3c;">Frontend utvecklare</span><br/><br/>
         Med en förkärlek för läcker design och frontendutveckling skapar Nicolas hemsidor och webblösningar med fingertoppskänsla. Han är utvecklare med fokus på webb, UX och engagerande digitala upplevelser.`;
var closeBtn = '<span class="btnClose">Stäng</span>';

if (desktop.matches) {
  $('.circle-img').click(function(){
    if (this.id === 'photo1'){
      $('<div class="overlay-matte img-clicked"><p>' + m + '</p></div>').appendTo('#overlay');
      $(closeBtn).appendTo('.overlay-matte');
      $('.img-clicked').addClass('slideExpandUp');
      } else if (this.id === 'photo2'){
        $('<div class="overlay-andreas img-clicked"><p>' + a + '</p></div>').appendTo('#overlay');
        $(closeBtn).appendTo('.overlay-andreas');
        $('.img-clicked').addClass('slideExpandUp');
      } else {
        $('<div class="overlay-nico img-clicked"><p style="color:#373a3c;">' + n + '</p></div>').appendTo('#overlay');
        $(closeBtn).appendTo('.overlay-nico');
        $('.img-clicked').addClass('slideExpandUp');
    }
    $('.circle-img').addClass('pointer-event');
    $('.btnClose').click(function(){
      $(this).parent().remove();
      $('.circle-img').removeClass('pointer-event');
    });
  });
}
