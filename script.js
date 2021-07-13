var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("hnav").style.top = "0";
  } else {
    document.getElementsByClassName("hnav").style.top = "-10rem";
  }
  prevScrollpos = currentScrollPos;
}