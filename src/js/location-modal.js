(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-location-modal-open]'),
    closeModalBtn: document.querySelector('[data-location-modal-close]'),
    modal: document.querySelector('[data-modal-location]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
