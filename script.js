$('.lightmode').hide();

$('nav').click(function () {
  $('.wrapper').toggle(500);

});



$(document).ready(function () {
  $('.profileText h2').fadeIn(1000);
  $('.contactInfo ul').slideDown(3000);
});






$(".resumee").click(function () {
  $('.profile h2').hide();
  $('.profile p').hide();
  $('.education h2').hide();
  $('.education p').hide();
  $('.resume h2').slideDown(1000);
  $('.resume p').slideDown(1000);
});

$(".profilee").click(function () {
  $('.resume h2').hide();
  $('.resume p').hide();
  $('.education h2').hide();
  $('.education p').hide();
  $('.profile h2').slideDown(1000);
  $('.profile p').slideDown(1000);
});

$(".educationn").click(function () {
  $('.resume h2').hide();
  $('.resume p').hide();
  $('.profile h2').hide();
  $('.profile p').hide();
  $('.education h2').slideDown(1000);
  $('.education p').slideDown(1000);
});


$(".nightmode").click(function () {
  $('.lightmode').show();
  $('body').css("background-color", "#212121");
  $('.right_Side').css("background-color", "#212121");
  $('.right_Side').css("color", "white");
  $('.container').css("background-color", "#212121");
  $('.contactInfo').css("background-color", "#303030");
  $('.profileText').css("background-color", "#303030");
  $('h2').css("color", "white");
  $('span').css("color", "white");
  $('.left_Side').css("background-color", "#303030");
  $('.wrapper').css("background-color", "#303030");
  $('.nightmode').hide();
});


$(".lightmode").click(function () {
  $('.lightmode').hide();
  $('body').css("background-color", "white");
  $('.right_Side').css("background-color", "white");
  $('.right_Side').css("color", "black");
  $('.container').css("background-color", "white");
  $('.contactInfo').css("background-color", "lightblue");
  $('.profileText').css("background-color", "lightblue");
  $('h2').css("color", "black");
  $('span').css("color", "black");
  $('.left_Side').css("background-color", "lightblue");
  $('.wrapper').css("background-color", "white");
  $('.nightmode').show();
});