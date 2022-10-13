(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buy-now-modal-mobile-open]'),
    closeModalBtn: document.querySelector('[data-buy-now-modal-mobile-closed]'),
    modal: document.querySelector('[data-buy-now-modal-mobile]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
