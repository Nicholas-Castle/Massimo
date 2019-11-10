// when scrolling init funciton
window.onscroll = function() {scrollFunct()};

// grab navBar
var navBar = document.getElementById("navBar");

// get nav bar offset pos
var sticky = navBar.offsetTop;

// add sticky class to nav adfter scrolling/ remove sticky at top
function scrollFunct() {
  if (window.pageYOffset >= sticky)
  navBar.classList.add("sticky")
}
else {
  navBar.classList.remove("sticky");
  }
}
