(() => {
  const refs = {
    openModalBtn: document.querySelector("[product-modal-two-open]"),
    closeModalBtn: document.querySelector("[product-modal-two-close]"),
    modal: document.querySelector("[product-modal-two]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();