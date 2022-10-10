(() => {
  const refs = {
    openModalBtn: document.querySelector('[product-modal-three-open]'),
    closeModalBtn: document.querySelector('[product-modal-three-close]'),
    modal: document.querySelector('[product-modal-three]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();