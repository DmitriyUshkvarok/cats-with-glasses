const openModalButtons = document.querySelectorAll('.open-modal'),
  modal = document.querySelectorAll('.popup'),
  closeModalButtons = document.querySelectorAll('.close-modal');

openModalButtons.forEach(openBtn => {
  openBtn.addEventListener('click', openModal);
});

closeModalButtons.forEach(closeBtn => {
  closeBtn.addEventListener('click', closeModal);
});

function openModal() {
  modal.classList.add('visible');
}

function closeModal() {
  modal.classList.remove('visible');
}
