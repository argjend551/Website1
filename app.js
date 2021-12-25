// smooth scroll
function smoothScroll(target, duration) {
     var target = document.querySelector(target);
     var targetPosition = target.getBoundingClientRect().top;
     var startPostition = window.pageYOffset;
     var distance = targetPosition - startPostition;
     var startTime = null;


     function animationScroll(currentTime) {
          if (startTime === null) startTime = currentTime;
          var timeElapsed = currentTime - startTime;
          var run = ease(timeElapsed, startPostition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animationScroll);
     }

     function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
     }


     requestAnimationFrame(animationScroll);

}

var home = document.querySelector('.home');

home.addEventListener('click', function () {
     smoothScroll('header', 1000);

});
var aboutus = document.querySelector('.aboutus');

aboutus.addEventListener('click', function () {
     smoothScroll('.aboutush', 1000);

});
var work = document.querySelector('.info');

work.addEventListener('click', function () {
     smoothScroll('.infotxt', 1000);

});

var products = document.querySelector('.products');

products.addEventListener('click', function () {
     smoothScroll('.slideshow-container', 1000);

});


var scrollTop = document.querySelector('.top');

scrollTop.addEventListener('click', function () {
     smoothScroll('header', 1000);
});




// scroll to top 

const backToTopButton = document.querySelector(".top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
     if (window.pageYOffset > 500) {
          backToTopButton.style.display = "block";
     } else {
          backToTopButton.style.display = "none";
     }

}




// *****json file and about us

let items;

async function readItemsFromJason() {
     items = await (await fetch('data.json')).json();
     showToScreen(currentitem);
}

window.addEventListener("DOMContentLoaded", function () {

})
let pic = document.querySelector('pic');


function showToScreen(person) {
     console.log(person);

     items.id = items[person].id
     items.name = items[person].first_name
     items.lastname = items[person].last_name
     items.email = items[person].email
     items.job = items[person].job
     items.number = items[person].number
     pic = items[person].img
 
     //  $('#id').text("Anställnings nummer " + items.id);
     $('#name').text(items.name + " " + items.lastname);
     $('#job').text(items.job);
     $('#number').text(items.number);
     $('#email').text(items.email);
     $(".pic").attr("src", pic);

}
readItemsFromJason();



nextbtn = document.querySelector(".next")
prevbtn = document.querySelector(".prev")
let currentitem = 0;

nextbtn.addEventListener('click', function () {
     currentitem++;
     if (currentitem > items.length - 1) {
          currentitem = 0;
     }
     showToScreen(currentitem);
})

prevbtn.addEventListener('click', function () {
     currentitem--;
     if (currentitem < 0) {
          currentitem = items.length - 1;
     }
     showToScreen(currentitem);
})





// *****automatic slider

var slideIndex = 0;
showSlides();

function showSlides() {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     var dots = document.getElementsByClassName("dot");
     for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
     }
     slideIndex++;
     if (slideIndex > slides.length) { slideIndex = 1 }
     for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";
     setTimeout(showSlides, 4000); // Change image every 4 seconds
}


