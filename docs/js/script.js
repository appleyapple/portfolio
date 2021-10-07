//-- ================ Animation handling ================ --//

// mobile screen nav toggle 
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
var $section = $('#skills');

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


//-- ================ Github API calls ================ --//

function getUserStats(username) {

  // JSON language: bytes
  let languageStats = {}; 

  // github api connection setup
  const xhr = new XMLHttpRequest();
  const url = `https://api.github.com/users/${username}/repos`;

  xhr.open('GET', url, true);

  // process request
  xhr.onload = function() {

    const data = JSON.parse(this.response);
    
    for (var i in data) {

      // get repo names
      // console.log('Repo: ', data[i].name);

      // get language + bytes 
      fetch(data[i].languages_url)
        .then(res => res.json())
        .then((out) => {
          // get key names (languages)
          languages = Object.keys(out);

          // for each language, get # of bytes in that language
          for (var j in languages) {
            if (languageStats[languages[j]]) {
              languageStats[languages[j]] += (out[languages[j]]); 
            } else {
              languageStats[languages[j]] = (out[languages[j]]);
            }
          }
        }).catch(err => console.error(err));
    }
  }

  xhr.send();
  return languageStats;
}

// language stats sorted by bytes coded
languageStats = {};
languageStats = getUserStats('appleyapple');
// languageStats = getUserStats('appleyapple').sort(function (a, b) {
//   return a[1] > b[1];
// });
console.log(languageStats);


//-- ================ Create bars dynamically ================ --//

// name: language, progress: 0-100, bytes: from languageStats
function addLanguage(name, progress, bytes = "N/A") {
  document.getElementById('languages').insertAdjacentHTML(
    'beforeend',
    `<div class='skills-item'>
          <h3>${name}</h3>
          <div class="progress-bar">
              <span class="progress-bar-fill animated" style="width:${progress}%;"></span>
          </div>
          <p>Bytes coded: ${bytes}</p>
      </div>`
  )
}

// // append languages 
// for (var language in languageStats) {
//   console.log(language);
//   addLanguage("123", 45, 67890);
// }
