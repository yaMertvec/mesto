import {Card} from "./Card.js";
import {initialCards} from "./initialCards.js";
import { FormValidator} from "./FormValidator.js";
import { config } from "./config.js";

//-------------------------------переменные----------------------//
// const popupElement = document.querySelector('.popup');
const popupProfileEdit = document.querySelector('.popup_type-edit');
const popupCardAdd = document.querySelector('.popup_card-add');
const closePopupButtonElement = popupProfileEdit.querySelector('.popup__close');
const openPopupProfileEdit = document.querySelector('.profile__edit-button');
const pageElement = document.querySelector('.page');
const profileName = pageElement.querySelector('.profile__title');
const profileJob = pageElement.querySelector('.profile__subtitle');
const editFormElement = popupProfileEdit.querySelector('.popup__edit');
const addFormElement= document.querySelector('.popup__add');
const nameInput = editFormElement.querySelector('.popup__input_data_name');
const jobInput = editFormElement.querySelector('.popup__input_data_job');
const openAddCardButton = document.querySelector('.profile__add-button');
const popupPlace = document.querySelector('.popup__input_data_place');
const popupPlaceLink = document.querySelector('.popup__input_data_place-link');
const closeCardAddPopup = document.querySelector('.popup__close_card-add');
const closeImagePopup = document.querySelector('.popup__close_image');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
const popupImage = document.querySelector('.popup_image');
const listElements = document.querySelector('.elements');

const closePopupEditProfile = document.querySelector('.popup__close_edit-profile');
const popupDescription = document.querySelector('.popup__description');
const popupImageElement = document.querySelector('.popup__image-element');
const escapeButton = 'Escape'





//--------------------открытие и закрытие попапа с изображением --------------------//
const handleOpenImagePopup = (name,link) => {
  popupImageElement.src = link;
  popupImageElement.alt = name;
  popupDescription.textContent = name;
  // popupImageElement.src = e.target.src
  // popupImageElement.alt = e.target.closest('.card').querySelector('.card__title').textContent;
  // popupDescription.textContent = e.target.closest('.card').querySelector('.card__title').textContent;
  openPopup(popupImage);
}


const renderCard = (item,qwer) => {
  const card = new Card(item,`#card-template`,handleOpenImagePopup);
  const cardElement = card.generateCard();
  qwer.prepend(cardElement)
};
initialCards.forEach((item) => {
  renderCard(item,listElements);
});
//------------------------------------------------------------------------------//

//------------------------профиль------------------//

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByDownEscButton);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByDownEscButton);
};

function handleFormEditSubmit(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfileEdit);
}

editFormElement.addEventListener('submit', handleFormEditSubmit);
openPopupProfileEdit.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfileEdit);
});
closePopupButtonElement.addEventListener('click', () => {
  closePopup(popupProfileEdit);
});
//--------------------------------------------------------//

//--------------------открываем и закрываем попап с добавлением карточки ---------------//
openAddCardButton.addEventListener('click', () => {
  openPopup(popupCardAdd);
})
closeCardAddPopup.addEventListener('click', () => {
  closePopup(popupCardAdd);
})
//---------------добавление карточки---------------//

function handleAddCardFormSubmit(e) {
  e.preventDefault();

  const card = {
    name: popupPlace.value,
    link: popupPlaceLink.value
  }
  renderCard(card,listElements)
  closePopup(popupCardAdd);
 e.target.reset();
}
addFormElement.addEventListener('submit', handleAddCardFormSubmit);
closeImagePopup.addEventListener('click' , () => {
  closePopup(popupImage);
})




const closePopupByDownEscButton = (e) => {
  if (e.key === escapeButton) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
//--------------------закрытие попапа кликом на оверлей--------------------//
const popupElements = document.querySelectorAll('.popup');
const closePopupByClickOnOverlay = (e) => {
  if (e.target === e.currentTarget) {
    closePopup(e.target);
  }
}
popupElements.forEach((element) => element.addEventListener('click', closePopupByClickOnOverlay));

const popupProfileFormValidator = new FormValidator(config, popupProfileEdit);
popupProfileFormValidator.enableValidation();

const popupCardFormValidator = new FormValidator(config, addFormElement);
popupCardFormValidator.enableValidation();
