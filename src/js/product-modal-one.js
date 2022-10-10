(() => {
  const refs = {
    openModalBtn: document.querySelector('[product-modal-one-open]'),
    closeModalBtn: document.querySelector('[product-modal-one-close]'),
    modal: document.querySelector('[product-modal-one]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();