function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};new Swiper(".gallery-swip",{effect:"fade",grabCursor:!0,autoplay:{delay:3500,disableOnInteraction:!0}}),new Swiper(".mySwiper-review",{slidesPerView:1,slidesPerGroup:1,spaceBetween:40,loop:!0,pagination:{el:".swiper-pagination",clickable:!0}});(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),n=document.querySelectorAll(".mob-list__link"),o=()=>{const n="true"===e.getAttribute("aria-expanded")||"false";e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),document.body.classList.toggle("modal-open")};e.addEventListener("click",(()=>{o();for(var e=0;e<n.length;e++)n[e].onclick=function(e){e.preventDefault(),o()}}))})();let n=document.querySelector(".scroll-btn");window.onscroll=function(){window.pageYOffset>200?n.classList.add("shown"):n.classList.remove("shown")},n.onclick=function(){window.scrollTo(0,0)};const o={openModalBtnsOne:document.querySelector("[data-open-one]"),openModalBtnsTwo:document.querySelector("[data-open-two]"),openModalBtnsThree:document.querySelector("[data-open-three]"),openModalBtnsFour:document.querySelector("[data-open-four]"),openModalBtnsFive:document.querySelector("[data-open-five]"),openModalBtnsSix:document.querySelector("[data-open-six]"),openModalBtnsSeven:document.querySelector("[data-open-seven]"),openModalBtnsMobile:document.querySelector("[ data-modal-mobile-open]"),closedModalBtnsOne:document.querySelector("[data-modal-closed-one]"),closedModalBtnsTwo:document.querySelector("[data-modal-closed-two]"),closedModalBtnsThree:document.querySelector("[data-modal-closed-three]"),closedModalBtnsFour:document.querySelector("[data-modal-closed-four]"),closedModalBtnsFive:document.querySelector("[data-modal-closed-five]"),closedModalBtnsSix:document.querySelector("[data-modal-closed-six]"),closedModalBtnsSeven:document.querySelector("[data-modal-closed-seven]"),closedModalBtnsMobile:document.querySelector("[data-modal-mobile-closed]"),oneModal:document.querySelector("[data-modal-one]"),twoModal:document.querySelector("[data-modal-two]"),threeModal:document.querySelector("[data-modal-three]"),fourModal:document.querySelector("[data-modal-four]"),fiveModal:document.querySelector("[data-modal-five]"),sixModal:document.querySelector("[data-modal-six]"),sevenModal:document.querySelector("[data-modal-seven]"),mobileModal:document.querySelector("[data-modal-mobile]"),backdrops:document.querySelectorAll(".backdrop")};function r(){o.oneModal.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}function i(){o.twoModal.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}function a(){o.threeModal.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}function c(){o.fourModal.classList.toggle("is-hidden")}function l(){o.fiveModal.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}function u(){o.sixModal.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}function s(){o.sevenModal.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}function d(){o.mobileModal.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}o.openModalBtnsOne.addEventListener("click",r),o.closedModalBtnsOne.addEventListener("click",r),o.openModalBtnsTwo.addEventListener("click",i),o.closedModalBtnsTwo.addEventListener("click",i),o.openModalBtnsThree.addEventListener("click",a),o.closedModalBtnsThree.addEventListener("click",a),o.openModalBtnsFour.addEventListener("click",c),o.closedModalBtnsFour.addEventListener("click",c),o.openModalBtnsFive.addEventListener("click",l),o.closedModalBtnsFive.addEventListener("click",l),o.openModalBtnsSix.addEventListener("click",u),o.closedModalBtnsSix.addEventListener("click",u),o.openModalBtnsSeven.addEventListener("click",s),o.closedModalBtnsSeven.addEventListener("click",s),o.openModalBtnsMobile.addEventListener("click",d),o.closedModalBtnsMobile.addEventListener("click",d),window.addEventListener("click",(e=>{o.backdrops.forEach((t=>{e.target===t&&(t.classList.add("is-hidden"),document.body.classList.toggle("modal-open"))}))})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(o.oneModal.classList.add("is-hidden"),document.body.classList.remove("modal-open"))})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(o.twoModal.classList.add("is-hidden"),document.body.classList.remove("modal-open"))})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(o.threeModal.classList.add("is-hidden"),document.body.classList.remove("modal-open"))})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(o.fourModal.classList.add("is-hidden"),document.body.classList.remove("modal-open"))})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(o.fiveModal.classList.add("is-hidden"),document.body.classList.remove("modal-open"))})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(o.mobileModal.classList.add("is-hidden"),document.body.classList.remove("modal-open"))})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(o.sixModal.classList.add("is-hidden"),document.body.classList.remove("modal-open"))})),window.addEventListener("keydown",(function(e){"Escape"===e.code&&(o.sevenModal.classList.add("is-hidden"),document.body.classList.remove("modal-open"))})),Fancybox.bind('[data-fancybox="gallery"]',{Thumbs:!0,Toolbar:!0,Image:{zoom:!0,click:!0,wheel:"slide"}});var f=document.querySelector(".panel"),m=document.querySelector(".btn--servicess"),h=f.querySelector(".button-close");m.addEventListener("click",(function(){f.classList.add("panel--show")})),h.addEventListener("click",(function(){f.classList.remove("panel--show")}));const v=document.querySelectorAll('a[href^="#"]');for(let e of v)e.addEventListener("click",(function(t){t.preventDefault();const n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}));
/*! @vimeo/player v2.18.0 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var g=void 0!==t&&"[object global]"==={}.toString.call(t);function w(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function b(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function k(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function E(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function M(e){return/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,o=t||n;if(!o)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(k(o))return"https://vimeo.com/".concat(o);if(E(o))return o.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(o,"” is not a vimeo.com url."))}var S=void 0!==Array.prototype.indexOf,T="undefined"!=typeof window&&void 0!==window.postMessage;if(!(g||S&&T))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),o=function(e,t,o){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:o}):e[t]=o};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(o(this,"_id",i("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function n(e,n){if(!r(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function i(e){return e+"_"+a()+"."+a()}function a(){return Math.random().toString().substring(2)}return o(e.prototype,"delete",(function(e){if(n(this,"delete"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),o(e.prototype,"get",(function(e){if(n(this,"get"),r(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),o(e.prototype,"has",(function(e){if(n(this,"has"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),o(e.prototype,"set",(function(e,t){if(n(this,"set"),!r(e))throw new TypeError("Invalid value used as weak map key");var i=e[this._id];return i&&i[0]===e?(i[1]=t,this):(o(e,this._id,[e,t]),this)})),o(e,"_polyfill",!0),e}()}function r(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:q);var x,P,F=(x=function(e){
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
var t,n,o;o=function(){var e,t,n,o=Object.prototype.toString,r="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,o){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==o})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function i(e,o){n.add(e,o),t||(t=r(n.drain))}function a(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function c(){for(var e=0;e<this.chain.length;e++)l(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function l(e,t,n){var o,r;try{!1===t?n.reject(e.msg):(o=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(r=a(o))?r.call(o,n.resolve,n.reject):n.resolve(o)}catch(e){n.reject(e)}}function u(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=a(e))?i((function(){var o=new f(n);try{t.call(e,(function(){u.apply(o,arguments)}),(function(){s.apply(o,arguments)}))}catch(e){s.call(o,e)}})):(n.msg=e,n.state=1,n.chain.length>0&&i(c,n))}catch(e){s.call(new f(n),e)}}}function s(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&i(c,t))}function d(e,t,n,o){for(var r=0;r<t.length;r++)!function(r){e.resolve(t[r]).then((function(e){n(r,e)}),o)}(r)}function f(e){this.def=e,this.triggered=!1}function m(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function h(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new m(this);this.then=function(e,n){var o={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return o.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");o.resolve=e,o.reject=t})),t.chain.push(o),0!==t.state&&i(c,t),o.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){u.call(t,e)}),(function(e){s.call(t,e)}))}catch(e){s.call(t,e)}}n=function(){var e,n,o;function r(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,i){o=new r(t,i),n?n.next=o:e=o,n=o,o=void 0},drain:function(){var o=e;for(e=n=t=void 0;o;)o.fn.call(o.self),o=o.next}}}();var v=e({},"constructor",h,!1);return h.prototype=v,e(v,"__NPO__",0,!1),e(h,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(h,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(h,"all",(function(e){var t=this;return"[object Array]"!=o.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,o){if("function"!=typeof n||"function"!=typeof o)throw TypeError("Not a function");var r=e.length,i=Array(r),a=0;d(t,e,(function(e,t){i[e]=t,++a===r&&n(i)}),o)}))})),e(h,"race",(function(e){var t=this;return"[object Array]"!=o.call(e)?t.reject(TypeError("Not an array")):new t((function(n,o){if("function"!=typeof n||"function"!=typeof o)throw TypeError("Not a function");d(t,e,(function(e,t){n(t)}),o)}))})),h},(n=q)[t="Promise"]=n[t]||o(),e.exports&&(e.exports=n[t])},x(P={exports:{}},P.exports),P.exports),_=new WeakMap;function N(e,t,n){var o=_.get(e.element)||{};t in o||(o[t]=[]),o[t].push(n),_.set(e.element,o)}function j(e,t){return(_.get(e.element)||{})[t]||[]}function C(e,t,n){var o=_.get(e.element)||{};if(!o[t])return!0;if(!n)return o[t]=[],_.set(e.element,o),!0;var r=o[t].indexOf(n);return-1!==r&&o[t].splice(r,1),_.set(e.element,o),o[t]&&0===o[t].length}function B(e,t){var n=_.get(e);_.set(t,n),_.delete(e)}function A(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function O(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var o={method:t};void 0!==n&&(o.value=n);var r=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));r>=8&&r<10&&(o=JSON.stringify(o)),e.element.contentWindow.postMessage(o,e.origin)}}function I(e,t){var n,o=[];if((t=A(t)).event){if("error"===t.event)j(e,t.data.method).forEach((function(n){var o=new Error(t.data.message);o.name=t.data.name,n.reject(o),C(e,t.data.method,n)}));o=j(e,"event:".concat(t.event)),n=t.data}else if(t.method){var r=function(e,t){var n=j(e,t);if(n.length<1)return!1;var o=n.shift();return C(e,t,o),o}(e,t.method);r&&(o.push(r),n=t.value)}o.forEach((function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(e){}}))}var V=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return V.reduce((function(t,n){var o=e.getAttribute("data-vimeo-".concat(n));return(o||""===o)&&(t[n]=""===o?1:o),t}),t)}function W(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var o=document.createElement("div");return o.innerHTML=n,t.appendChild(o.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(o,r){if(!E(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(i+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var c="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;c.open("GET",i,!0),c.onload=function(){if(404!==c.status)if(403!==c.status)try{var t=JSON.parse(c.responseText);if(403===t.domain_status_code)return W(t,n),void r(new Error("“".concat(e,"” is not embeddable.")));o(t)}catch(e){r(e)}else r(new Error("“".concat(e,"” is not embeddable.")));else r(new Error("“".concat(e,"” was not found.")))},c.onerror=function(){var e=c.status?" (".concat(c.status,")"):"";r(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},c.send()}))}var D=new WeakMap,U=new WeakMap,H={},$=function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(p(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!b(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var r=t.querySelector("iframe");r&&(t=r)}if("IFRAME"===t.nodeName&&!E(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(D.has(t))return D.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";var i=new F((function(e,r){if(n._onMessage=function(t){if(E(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var o=A(t.data);if(o&&"error"===o.event&&o.data&&"ready"===o.data.method){var i=new Error(o.data.message);return i.name=o.data.name,void r(i)}var a=o&&"ready"===o.event,c=o&&"ping"===o.method;if(a||c)return n.element.setAttribute("data-ready","true"),void e();I(n,o)}},n._window.addEventListener("message",n._onMessage),"IFRAME"!==n.element.nodeName){var i=R(t,o);z(L(i),i,t).then((function(e){var o=W(e,t);return n.element=o,n._originalElement=t,B(t,o),D.set(n.element,n),e})).catch(r)}}));if(U.set(this,i),D.set(this.element,this),"IFRAME"===this.element.nodeName&&O(this,"ping"),H.isEnabled){var a=function(){return H.exit()};this.fullscreenchangeHandler=function(){H.isFullscreen?N(n,"event:exitFullscreen",a):C(n,"event:exitFullscreen",a),n.ready().then((function(){O(n,"fullscreenchange",H.isFullscreen)}))},H.on("fullscreenchange",this.fullscreenchangeHandler)}return this}var t,n,o;return t=e,n=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new F((function(o,r){return t.ready().then((function(){N(t,e,{resolve:o,reject:r}),O(t,e,n)})).catch(r)}))}},{key:"get",value:function(e){var t=this;return new F((function(n,o){return e=w(e,"get"),t.ready().then((function(){N(t,e,{resolve:n,reject:o}),O(t,e)})).catch(o)}))}},{key:"set",value:function(e,t){var n=this;return new F((function(o,r){if(e=w(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){N(n,e,{resolve:o,reject:r}),O(n,e,t)})).catch(r)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===j(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),N(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");C(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=U.get(this)||new F((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return F.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return H.isEnabled?H.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return H.isEnabled?H.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return H.isEnabled?F.resolve(H.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new F((function(t){if(U.delete(e),D.delete(e.element),e._originalElement&&(D.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}e._window.removeEventListener("message",e._onMessage),H.isEnabled&&H.off("fullscreenchange",e.fullscreenchangeHandler),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}],n&&y(t.prototype,n),o&&y(t,o),e}();g||(H=function(){var e=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,o=t.length,r={};n<o;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)r[t[0][n]]=e[n];return r}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:function(t){return new Promise((function(o,r){var i=function e(){n.off("fullscreenchange",e),o()};n.on("fullscreenchange",i);var a=(t=t||document.documentElement)[e.requestFullscreen]();a instanceof Promise&&a.then(i).catch(r)}))},exit:function(){return new Promise((function(t,o){if(n.isFullscreen){var r=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",r);var i=document[e.exitFullscreen]();i instanceof Promise&&i.then(r).catch(o)}else t()}))},on:function(e,n){var o=t[e];o&&document.addEventListener(o,n)},off:function(e,n){var o=t[e];o&&document.removeEventListener(o,n)}};return Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[e.fullscreenEnabled])}}}),n}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=R(e);z(L(t),t,e).then((function(t){return W(t,e)})).catch(n)}catch(e){n(e)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(E(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),o=0;o<n.length;o++)if(n[o].contentWindow===t.source){n[o].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener("message",t)}}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoSeoMetadataAppended){window.VimeoSeoMetadataAppended=!0;var t=function(t){if(E(t.origin)){var n=A(t.data);if(n&&"ready"===n.event)for(var o=e.querySelectorAll("iframe"),r=0;r<o.length;r++){var i=o[r],a=i.contentWindow===t.source;M(i.src)&&a&&new $(i).callMethod("appendVideoMetadata",window.location.href)}}};window.addEventListener("message",t)}}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoCheckedUrlTimeParam){window.VimeoCheckedUrlTimeParam=!0;var t=function(e){"console"in window&&console.error&&console.error("There was an error getting video Id: ".concat(e))},n=function(n){if(E(n.origin)){var o=A(n.data);if(o&&"ready"===o.event)for(var r=e.querySelectorAll("iframe"),i=0;i<r.length;i++){var a=r[i],c=a.contentWindow===n.source;M(a.src)&&c&&function(){var e=new $(a);e.getVideoId().then((function(t){var n=new RegExp("[?&]vimeo_t_".concat(t,"=([^&#]*)")).exec(window.location.href);if(n&&n[1]){var o=decodeURI(n[1]);e.setCurrentTime(o)}})).catch(t)}()}}};window.addEventListener("message",n)}}());var Q,Y=$,J=/^\s+|\s+$/g,X=/^[-+]0x[0-9a-f]+$/i,G=/^0b[01]+$/i,K=/^0o[0-7]+$/i,Z=parseInt,ee="object"==typeof t&&t&&t.Object===Object&&t,te="object"==typeof self&&self&&self.Object===Object&&self,ne=ee||te||Function("return this")(),oe=Object.prototype.toString,re=Math.max,ie=Math.min,ae=function(){return ne.Date.now()};function ce(e,t,n){var o,r,i,a,c,l,u=0,s=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=o,i=r;return o=r=void 0,u=t,a=e.apply(i,n)}function h(e){return u=e,c=setTimeout(p,t),s?m(e):a}function v(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-u>=i}function p(){var e=ae();if(v(e))return y(e);c=setTimeout(p,function(e){var n=t-(e-l);return d?ie(n,i-(e-u)):n}(e))}function y(e){return c=void 0,f&&o?m(e):(o=r=void 0,a)}function g(){var e=ae(),n=v(e);if(o=arguments,r=this,l=e,n){if(void 0===c)return h(l);if(d)return c=setTimeout(p,t),m(l)}return void 0===c&&(c=setTimeout(p,t)),a}return t=ue(t)||0,le(n)&&(s=!!n.leading,i=(d="maxWait"in n)?re(ue(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=l=r=c=void 0},g.flush=function(){return void 0===c?a:y(ae())},g}function le(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ue(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==oe.call(e)}(e))return NaN;if(le(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=le(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(J,"");var n=G.test(e);return n||K.test(e)?Z(e.slice(2),n?2:8):X.test(e)?NaN:+e}Q=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return le(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),ce(e,t,{leading:o,maxWait:t,trailing:r})};const se=document.querySelector("#vimeo-player"),de=new Y(se),fe=document.querySelector("[data-open-three]"),me=document.querySelector("[data-modal-closed-three]");document.querySelector(".backdrop"),document.querySelector("[data-modal-three]");fe.addEventListener("click",(function(){se.setAttribute("src","https://player.vimeo.com/video/236203659")})),me.addEventListener("click",(function(){se.removeAttribute("src","https://player.vimeo.com/video/236203659")})),de.on("timeupdate",e(Q)((({seconds:e})=>{localStorage.setItem("videoplayer-current-time",JSON.stringify(e))}),1e3)),de.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time"))),console.dir(de);
//# sourceMappingURL=index.ca63eb69.js.map