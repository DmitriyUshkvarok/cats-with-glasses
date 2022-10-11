(() => {
  const refs = {
    openModalBtn: document.querySelector('[buy-now-modal-open]'),
    closeModalBtn: document.querySelector('[buy-now-modal-closed]'),
    modal: document.querySelector('[buy-now-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
