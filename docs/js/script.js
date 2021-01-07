
// Animation handling
var card = document.getElementsByClassName('id-card');
card[0].addEventListener('animationend', function(e) {
    card[0].classList.remove('animated');
});
card[0].addEventListener('mouseover', function(e) {
    card[0].classList.add('animated')
})

var arrow = document.getElementsByClassName('arrow down');
arrow[0].addEventListener('animationend', function(e) {
    arrow[0].classList.remove('animated');
});
arrow[0].addEventListener('mouseover', function(e) {
    arrow[0].classList.add('animated')
})
