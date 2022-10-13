// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-buy-now-modal-open]'),
//     closeModalBtn: document.querySelector('[data-buy-now-modal-closed]'),
//     modal: document.querySelector('[data-buy-now-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//     document.body.classList.toggle('modal-open');
//   }
// })();
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buy-now-modal-open]'),
    closeModalBtn: document.querySelector('[data-buy-now-modal-closed]'),
    modal: document.querySelector('[data-buy-now-modal]'),
    backdrops: document.querySelectorAll('.backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }

  window.onclick = function (e) {
    for (const backdrop of refs.backdrops) {
      if (e.target === backdrop) {
        backdrop.classList.add('is-hidden');
        document.body.classList.toggle('modal-open');
      }
    }
  };
})();
