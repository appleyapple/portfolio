
//-- Animation handling --//

//id card fanout
var card = document.getElementsByClassName('id-card');

card[0].addEventListener('animationend', function(e) {
  card[0].classList.remove('animated');
});

card[0].addEventListener('mouseover', function(e) {
  card[0].classList.add('animated')
})

// see-more arrow bounce
var arrow = document.getElementsByClassName('arrow down');

arrow[0].addEventListener('animationend', function(e) {
  arrow[0].classList.remove('animated');
});

arrow[0].addEventListener('mouseover', function(e) {
  arrow[0].classList.add('animated')
})

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