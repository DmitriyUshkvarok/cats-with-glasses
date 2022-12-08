const refs = {
  // =====button open modal
  openModalBtnsOne: document.querySelector('[data-open-one]'),
  openModalBtnsTwo: document.querySelector('[data-open-two]'),
  openModalBtnsThree: document.querySelector('[data-open-three]'),
  openModalBtnsFour: document.querySelector('[data-open-four]'),
  openModalBtnsFive: document.querySelector('[data-open-five]'),
  openModalBtnsSix: document.querySelector('[data-open-six]'),
  openModalBtnsSeven: document.querySelector('[data-open-seven]'),
  openModalBtnsMobile: document.querySelector('[ data-modal-mobile-open]'),
  // =====button closed modal
  closedModalBtnsOne: document.querySelector('[data-modal-closed-one]'),
  closedModalBtnsTwo: document.querySelector('[data-modal-closed-two]'),
  closedModalBtnsThree: document.querySelector('[data-modal-closed-three]'),
  closedModalBtnsFour: document.querySelector('[data-modal-closed-four]'),
  closedModalBtnsFive: document.querySelector('[data-modal-closed-five]'),
  closedModalBtnsSix: document.querySelector('[data-modal-closed-six]'),
  closedModalBtnsSeven: document.querySelector('[data-modal-closed-seven]'),
  closedModalBtnsMobile: document.querySelector('[data-modal-mobile-closed]'),
  // =====modals
  oneModal: document.querySelector('[data-modal-one]'),
  twoModal: document.querySelector('[data-modal-two]'),
  threeModal: document.querySelector('[data-modal-three]'),
  fourModal: document.querySelector('[data-modal-four]'),
  fiveModal: document.querySelector('[data-modal-five]'),
  sixModal: document.querySelector('[data-modal-six]'),
  sevenModal: document.querySelector('[data-modal-seven]'),
  mobileModal: document.querySelector('[data-modal-mobile]'),
  // ===== backdrops
  backdrops: document.querySelectorAll('.backdrop'),
};
// one modal
refs.openModalBtnsOne.addEventListener('click', oneModalFunction);
refs.closedModalBtnsOne.addEventListener('click', oneModalFunction);

function oneModalFunction() {
  refs.oneModal.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}
// two modal
refs.openModalBtnsTwo.addEventListener('click', twoModalFunction);
refs.closedModalBtnsTwo.addEventListener('click', twoModalFunction);

function twoModalFunction() {
  refs.twoModal.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}
// three modal
refs.openModalBtnsThree.addEventListener('click', threeModalFunction);
refs.closedModalBtnsThree.addEventListener('click', threeModalFunction);

function threeModalFunction() {
  refs.threeModal.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}
// four modal
refs.openModalBtnsFour.addEventListener('click', fourModalFunction);
refs.closedModalBtnsFour.addEventListener('click', fourModalFunction);

function fourModalFunction() {
  refs.fourModal.classList.toggle('is-hidden');
}
// five modal
refs.openModalBtnsFive.addEventListener('click', fiveModalFunction);
refs.closedModalBtnsFive.addEventListener('click', fiveModalFunction);

function fiveModalFunction() {
  refs.fiveModal.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}
//  six modal
refs.openModalBtnsSix.addEventListener('click', sixModalFunction);
refs.closedModalBtnsSix.addEventListener('click', sixModalFunction);

function sixModalFunction() {
  refs.sixModal.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}
// seven modal

refs.openModalBtnsSeven.addEventListener('click', sevenModalFunction);
refs.closedModalBtnsSeven.addEventListener('click', sevenModalFunction);

function sevenModalFunction() {
  refs.sevenModal.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}
// mobile modal
refs.openModalBtnsMobile.addEventListener('click', mobileModalFunction);
refs.closedModalBtnsMobile.addEventListener('click', mobileModalFunction);

function mobileModalFunction() {
  refs.mobileModal.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
}
// backdrop
window.addEventListener('click', e => {
  refs.backdrops.forEach(backdrop => {
    if (e.target === backdrop) {
      backdrop.classList.add('is-hidden');
      document.body.classList.toggle('modal-open');
    }
  });
});

// closed esc
window.addEventListener('keydown', onEscKeyPressOne);
function onEscKeyPressOne(event) {
  if (event.code === 'Escape') {
    refs.oneModal.classList.add('is-hidden');
  }
  document.body.classList.remove('modal-open');
}

window.addEventListener('keydown', onEscKeyPressTwo);
function onEscKeyPressTwo(event) {
  if (event.code === 'Escape') {
    refs.twoModal.classList.add('is-hidden');
  }
  document.body.classList.remove('modal-open');
}

window.addEventListener('keydown', onEscKeyPressThree);
function onEscKeyPressThree(event) {
  if (event.code === 'Escape') {
    refs.threeModal.classList.add('is-hidden');
  }
  document.body.classList.remove('modal-open');
}

window.addEventListener('keydown', onEscKeyPressFour);
function onEscKeyPressFour(event) {
  if (event.code === 'Escape') {
    refs.fourModal.classList.add('is-hidden');
  }
  document.body.classList.remove('modal-open');
}

window.addEventListener('keydown', onEscKeyPressFive);
function onEscKeyPressFive(event) {
  if (event.code === 'Escape') {
    refs.fiveModal.classList.add('is-hidden');
  }
  document.body.classList.remove('modal-open');
}

window.addEventListener('keydown', onEscKeyPressSix);
function onEscKeyPressSix(event) {
  if (event.code === 'Escape') {
    refs.mobileModal.classList.add('is-hidden');
  }
  document.body.classList.remove('modal-open');
}

window.addEventListener('keydown', onEscKeyPressSeven);
function onEscKeyPressSeven(event) {
  if (event.code === 'Escape') {
    refs.sixModal.classList.add('is-hidden');
  }
  document.body.classList.remove('modal-open');
}

window.addEventListener('keydown', onEscKeyPressEight);
function onEscKeyPressEight(event) {
  if (event.code === 'Escape') {
    refs.sevenModal.classList.add('is-hidden');
  }
  document.body.classList.remove('modal-open');
}
