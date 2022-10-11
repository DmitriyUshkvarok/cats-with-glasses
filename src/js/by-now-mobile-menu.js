(() => {
  const refs = {
    openModalBtn: document.querySelector('[buy-now-modal-mobile-open]'),
    closeModalBtn: document.querySelector('[buy-now-modal-mobile-closed]'),
    modal: document.querySelector('[buy-now-modal-mobile]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
