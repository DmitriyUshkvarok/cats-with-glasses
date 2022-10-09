let buttonUp = document.querySelector(".scroll-btn");
window.onscroll = function () {
  if (window.pageYOffset > 200) {
    buttonUp.classList.add("shown");
  } else {
    buttonUp.classList.remove("shown");
  }
};

buttonUp.onclick = function () {
  window.scrollTo(0, 0);
};