(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function n(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}var o=function(){function t(e,r,o,i,u,a,c){var l=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n(this,"handleLikeButtonClick",(function(){l._cardLikeButton.classList.toggle("card__like-button_active")})),n(this,"_toggleLikeButton",(function(){l.isLiked()&&l.handleLikeButtonClick()})),this.item=e,this._name=e.name,this._link=e.link,this._cardTemplate=r,this._handleCardClick=o,this._openDeleteConfirmation=i,this._likes=e.likes,this.handleLikeButton=u,this._id=e._id,this._userId=c,this._ownerId=e.owner._id}var r,o;return r=t,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._card=this._getTemplate(),this._cardLikeButton=this._card.querySelector(".card__like-button"),this._cardImage=this._card.querySelector(".card__image"),this._cardTitle=this._card.querySelector(".card__title"),this._deleteButton=this._card.querySelector(".card__delete-button"),this._likeCounter=this._card.querySelector(".card__like-counter"),this._cardTitle.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._setEventListeners(),this._toggleLikeButton(),this._showCountOfLikes(),this._handleRemoveDeleteButton(),this._card}},{key:"_setEventListeners",value:function(){var t=this;this._cardLikeButton.addEventListener("click",(function(){t.handleLikeButton(t._id,t)})),this._deleteButton.addEventListener("click",(function(){t._openDeleteConfirmation(t)})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}},{key:"_handleCardClick",value:function(){var t=this._card.querySelector(".popup__image-element"),e=this._card.querySelector(".popup__description");t.src=this._link,t.alt=this._name,e.textContent=this._name}},{key:"_handleRemoveDeleteButton",value:function(){this._ownerId!=this._userId?this._deleteButton.classList.add("card__delete-button_hide"):this._deleteButton.classList.remove("card__delete-button_hide")}},{key:"_showCountOfLikes",value:function(){this._likeCounter.textContent=this._likes.length}},{key:"isLiked",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._userId}))}},{key:"handleDeleteButton",value:function(){this._card.remove(),this._card=null}},{key:"likesValue",value:function(t){this._likes=t,this._likeCounter.textContent=t.length}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._form=n,this._error=this._form.querySelector(this._config.inputErrorClass),this._inputs=Array.from(this._form.querySelectorAll(this._config.inputSelector)),this._button=this._form.querySelector(this._config.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_showInputError",value:function(t,e){this._error=this._form.querySelector("#".concat(t.id,"-error")),t.classList.add(this._config.inputErrorClass),this._error.textContent=e}},{key:"_hideInputError",value:function(t){this._error=this._form.querySelector("#".concat(t.id,"-error")),t.classList.remove(this._config.inputErrorClass),this._error.textContent=""}},{key:"_enableButton",value:function(){this._button.classList.remove(this._config.inactiveButtonClass),this._button.disabled=""}},{key:"_disableButton",value:function(){this._button.classList.add(this._config.inactiveButtonClass),this._button.disabled="disabled"}},{key:"_hasInvalidInput",value:function(){return this._inputs.every((function(t){return t.validity.valid}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButton(),this._inputs.forEach((function(e){t._hideInputError(e)}))}},{key:"_toggleButton",value:function(){this._hasInvalidInput(this._inputs)?this._enableButton():this._disableButton()}},{key:"_setEventListener",value:function(){var t=this;this._toggleButton(),this._inputs.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButton()}))}))}},{key:"enableValidation",value:function(){this._setEventListener()}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),c={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.reverse().forEach((function(t){e.addItem(t)}))}},{key:"addItem",value:function(t){this._container.prepend(this._renderer(t))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var d=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){t.close()})),this._popup.addEventListener("click",(function(e){e.target.classList.contains("popup_opened")&&t.close()}))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=v(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function v(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function g(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return g(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImageElement=e._popup.querySelector(".popup__image-element"),e._popupDescription=e._popup.querySelector(".popup__description"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupImageElement.src=e,this._popupImageElement.alt=t,this._popupDescription.textContent=t,_(S(u.prototype),"open",this).call(this)}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=j(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},O.apply(this,arguments)}function j(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function P(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return P(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=e,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._popup.querySelectorAll(".popup__input"),n._submitButton=n._form.querySelector(".popup__button"),n._submitButtonText=n._submitButton.textContent,n}return e=u,n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;O(C(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"close",value:function(){O(C(u.prototype),"close",this).call(this),this._form.reset()}},{key:"disableSubmitButton",value:function(){this._submitButton.disabled=!0}},{key:"enableSubmitButton",value:function(){this._submitButton.disabled=!1}},{key:"renderLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._submitButton.textContent=t?e:this._submitButtonText}}],n&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}var q=function(){function t(e){var n=e.nameSelector,r=e.infoSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameElement=document.querySelector(n),this._infoElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var e,n;return e=t,n=[{key:"getUserInfo",value:function(){var t={};return t.name=this._nameElement.textContent,t.info=this._infoElement.textContent,t}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar,o=t._id;this._nameElement.textContent=e,this._infoElement.textContent=n,this._avatarElement.src=r,this._id=o}},{key:"getId",value:function(){return this._id}}],n&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}var U=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка:".concat(t.status))}},{key:"_request",value:function(t,e){return fetch(t,e).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return this._request("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers})}},{key:"getInitialCards",value:function(){return this._request("".concat(this._baseUrl,"/cards"),{headers:this._headers})}},{key:"sendUserInfo",value:function(t){return this._request("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:"".concat(t.userName),about:"".concat(t.userJob)})})}},{key:"sendNewCardInfo",value:function(t){return this._request("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:"".concat(t.placeName),link:"".concat(t.placeLink)})})}},{key:"deleteCard",value:function(t){return this._request("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers})}},{key:"setCardLike",value:function(t,e){return this._request("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:e,headers:this._headers})}},{key:"changeAvatar",value:function(t){return this._request("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.url})})}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=N(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},V.apply(this,arguments)}function N(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=H(t)););return t}function F(t,e){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},F(t,e)}function J(t,e){if(e&&("object"===D(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function H(t){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},H(t)}var M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&F(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=H(r);if(o){var n=H(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return J(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=e,n._form=n._popup.querySelector(".popup__form"),n._submitButton=n._form.querySelector(".popup__button"),n}return e=u,n=[{key:"setEventListeners",value:function(){var t=this;V(H(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._card)}))}},{key:"open",value:function(t){V(H(u.prototype),"open",this).call(this),this._card=t}},{key:"disableSubmitButton",value:function(){this._submitButton.disabled=!0}},{key:"renderLoading",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Удаление...";this._submitButton.textContent=t?e:this._submitButtonText}}],n&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var G=document.querySelector(".popup_type-edit"),$=document.querySelector(".profile__edit-button"),K=G.querySelector(".popup__edit"),Q=document.querySelector(".popup__add"),W=K.querySelector(".popup__input_data_name"),X=K.querySelector(".popup__input_data_job"),Y=document.querySelector(".profile__add-button"),Z=(document.querySelector(".elements"),document.querySelector(".profile__avatar")),tt=new U({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-59",headers:{authorization:"0065e409-04c2-4cfe-b280-fe6fb5be8f02","Content-Type":"application/json"}});Promise.all([tt.getUserInfo(),tt.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];at.setUserInfo(o),et.renderItems(i)})).catch((function(t){console.log(t)}));var et=new f({renderer:function(t){return new o(t,"#card-template",rt,ot,ut,it,at.getId()).generateCard()}},".elements"),nt=new k(".popup_image");function rt(t,e){nt.open(t,e)}function ot(t){pt.open(t)}nt.setEventListeners();var it=function(t){pt.renderLoading(!0),pt.disableSubmitButton(),tt.deleteCard(t._id).then((function(){pt.renderLoading(!0,"Удалено!"),t.handleDeleteButton(),pt.close()})).catch((function(t){console.log(t)})).finally((function(){setTimeout((function(){pt.enableSubmitButton(),pt.renderLoading(!1)}),1500)}))},ut=function(t,e){var n=e.isLiked()?"DELETE":"PUT";tt.setCardLike(t,n).then((function(t){e.handleLikeButtonClick(),e.likesValue(t.likes)})).catch((function(t){console.log(t)}))},at=new q({nameSelector:".profile__title",infoSelector:".profile__subtitle",avatarSelector:".profile__avatar"}),ct=new B(".popup_type-edit",(function(t){ct.renderLoading(!0),ct.disableSubmitButton(),tt.sendUserInfo(t).then((function(t){at.setUserInfo(t),ct.renderLoading(!0,"Сохранено!"),setTimeout((function(){return ct.close()}),1e3)})).catch((function(t){console.log(t),ct.renderLoading(!0,"Ошибка запроса!")})).finally((function(){setTimeout((function(){ct.enableSubmitButton(),ct.renderLoading(!1)}),1500)}))}));ct.setEventListeners();var lt=new B(".popup_card-add",(function(t){lt.renderLoading(!0),lt.disableSubmitButton(),tt.sendNewCardInfo(t).then((function(t){lt.renderLoading(!0,"Создано!"),et.addItem(t),setTimeout((function(){return lt.close()}),1e3)})).catch((function(t){console.log(t),lt.renderLoading(!0,"Ошибка запроса!")})).finally((function(){setTimeout((function(){lt.enableSubmitButton(),lt.renderLoading(!1)}),1500)}))}));lt.setEventListeners(),$.addEventListener("click",(function(){var t=at.getUserInfo();W.value=t.name,X.value=t.info,st.resetValidation(),ct.open()})),Y.addEventListener("click",(function(){ft.resetValidation(),lt.open()})),Z.addEventListener("click",(function(){yt.open()}));var st=new a(c,G);st.enableValidation();var ft=new a(c,Q);ft.enableValidation();var pt=new M(".popup_card-delete-confirmation",it);pt.setEventListeners();var yt=new B(".popup_new-avatar",(function(t){yt.renderLoading(!0),yt.disableSubmitButton(),tt.changeAvatar(t).then((function(t){at.setUserInfo(t),yt.renderLoading(!0,"Сохранено!"),setTimeout((function(){return yt.close()}),1e3)})).catch((function(t){console.log(t),yt.renderLoading(!0,"Ошибка запроса!")})).finally((function(){setTimeout((function(){yt.enableSubmitButton(),yt.renderLoading(!1)}),1500)}))}));yt.setEventListeners()})();