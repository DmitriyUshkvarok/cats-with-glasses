(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buy-now-modal-open]'),
    closeModalBtn: document.querySelector('[data-buy-now-modal-closed]'),
    modal: document.querySelector('[data-buy-now-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
