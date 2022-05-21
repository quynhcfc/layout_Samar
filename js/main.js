var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 900 ||
    document.documentElement.scrollTop > 900
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// function topFunction() {
//   document.body.scrollTop.animate = 0;
//   document.documentElement.scrollTop = 0;
// }

function topFunction() {
  currentYOffset = self.pageYOffset;
  initYOffset = currentYOffset;

  var intervalId = setInterval(function () {
    currentYOffset -= initYOffset * 0.05;
    document.body.scrollTop = currentYOffset;
    document.documentElement.scrollTop = currentYOffset;

    if (self.pageYOffset == 0) {
      clearInterval(intervalId);
    }
  }, 30);
}
