// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-about-modal-open]'),
//     closeModalBtn: document.querySelector('[data-about-modal-close]'),
//     modal: document.querySelector('[data-about-modal]'),
//     backdrop: document.querySelector('.backdrop'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//     document.body.classList.toggle('modal-open');
//   }

//   window.onclick = function (e) {
//     if (e.target == refs.backdrop) {
//       refs.backdrop.classList.add('is-hidden');
//       document.body.classList.toggle('modal-open');
//     }
//   };
// })();

//Додала рядки 6, 17-22

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-about-modal-open]'),
    closeModalBtn: document.querySelector('[data-about-modal-close]'),
    modal: document.querySelector('[data-about-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
