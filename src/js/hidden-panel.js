var panel = document.querySelector('.panel');
var openPanelButton = document.querySelector('.btn--servicess');
var closePanelButton = panel.querySelector('.button-close');
openPanelButton.addEventListener('click', function () {
  panel.classList.add('panel--show');
});

closePanelButton.addEventListener('click', function () {
  panel.classList.remove('panel--show');
});
