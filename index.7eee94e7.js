var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in n){var l=n[e];delete n[e];var t={id:e,exports:{}};return o[e]=t,l.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){n[e]=o},e.parcelRequired7c6=l);new Swiper(".gallery-swip",{effect:"fade",grabCursor:!0,autoplay:{delay:3500,disableOnInteraction:!0}}),new Swiper(".mySwiper",{slidesPerView:1,slidesPerGroup:1,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0}});l("8z2Xb");let t=document.querySelector(".scroll-btn");window.onscroll=function(){window.pageYOffset>200?t.classList.add("shown"):t.classList.remove("shown")},t.onclick=function(){window.scrollTo(0,0)},(()=>{const e={openModalBtn:document.querySelector("[data-modal-franchise-open]"),closeModalBtn:document.querySelector("[data-franchise-modal-close]"),modal:document.querySelector("[data-modal-franchise]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector("[data-location-modal-open]"),closeModalBtn:document.querySelector("[data-location-modal-close]"),modal:document.querySelector("[data-modal-location]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();
//# sourceMappingURL=index.7eee94e7.js.map
