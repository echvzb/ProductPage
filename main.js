AOS.init();
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.padding = "0";
    document.getElementById("logo").style.fontSize = "2rem";
  } else {
    document.getElementById("header").style.padding = "5vh 1rem";
    document.getElementById("logo").style.fontSize = "3rem";
  }
}