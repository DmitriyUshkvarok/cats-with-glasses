(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-product-modal-two-open]'),
    closeModalBtn: document.querySelector('[data-product-modal-two-close]'),
    modal: document.querySelector('[data-product-modal-two]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
