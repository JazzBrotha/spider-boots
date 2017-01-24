// jshint esversion:6
// CONTACT MAP
  function initMap() {
  let mapCanvas = document.getElementById("map");
  let cord = new google.maps.LatLng(33.1791817, -81.0961495);
  let mapOptions = {
    center: cord,
    zoom: 13,
    scrollwheel: false
  };
  let map = new google.maps.Map(mapCanvas, mapOptions);
  let marker = new google.maps.Marker({
  position: cord,
  title:"Vi finns på Spider Road"
  });
  marker.setMap(map);
}

//SMOOTH SCROLL
$(document).on('click', '.nav-link', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
});

//SCROLL TO TOP
$(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        $('.scrollToTop').fadeIn();
    } else {
        $('.scrollToTop').fadeOut();
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

$('#logo').click(function() {
    $(this).addClass("hatch");
  });




function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 59.3279808, lng: 18.05849},
          zoom: 13,
          scrollwheel: false,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#E48E98;'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#DF4859'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });
      }

//CLICKEVENT ABOUT US
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
