
//-- Animation handling --//

// mobile nav toggle 
const navMenu = document.getElementById('nav-menu'), 
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}

if (navToggle) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}

// add shadow to header bg when scrolling
function scrollHeader() {
  const nav = document.getElementById('header');
  // when scroll is >200 viewport height, add scroll header class to header tag
  if (this.scrollY >= 80) {
    nav.classList.add('scroll-header');
  }
  else {
    nav.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader)

// see-more arrow bounce
const arrow = document.getElementsByClassName('arrow down');

if (arrow) {
  arrow[0].addEventListener('animationend', () => {
    arrow[0].classList.remove('bounce');
  });
}

if (arrow) {
  arrow[0].addEventListener('mouseover', () => {
    arrow[0].classList.add('bounce');
  })
}

// progress bar on scroll into view

var $section = $('#portfolio');

function animateBars() {
  $(".progress-bar-fill").each(function(){
    $(this).removeClass("animated");
  });
}

$(document).bind('scroll', function(e) {
  var scrollOffset = $(document).scrollTop();
  var containerOffset = $section.offset().top - window.innerHeight;
  if (scrollOffset > containerOffset) {
    setTimeout(function(){
      animateBars();
    },500);
    $(document).unbind('scroll');
  }
});