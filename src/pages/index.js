import { Card } from "../components/Card.js";
import { initialCards } from "../scripts/initialCards.js";
import { FormValidator } from "../components/FormValidator.js";
import { config } from "../scripts/config.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
//-------------------------------переменные----------------------//
// const popupElement = document.querySelector('.popup');
const popupProfileEdit = document.querySelector('.popup_type-edit');
const popupOpenProfileEdit = document.querySelector('.profile__edit-button');
const formEditElement = popupProfileEdit.querySelector('.popup__edit');
const formAddElement = document.querySelector('.popup__add');
const nameInput = formEditElement.querySelector('.popup__input_data_name');
const jobInput = formEditElement.querySelector('.popup__input_data_job');
const openAddCardButton = document.querySelector('.profile__add-button');

const listElements = document.querySelector('.elements');






const createCard = (item) => {
  const card = new Card(item, `#card-template`, handleOpenImagePopup)
  const newCard = card.generateCard();
  return newCard
}

initialCards.forEach((item) => {
  listElements.prepend(createCard(item));
});

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const newCard = createCard(item);
    cardList.addItem(newCard);
  },
}, '.elements'
);

const popupImage = new PopupWithImage('.popup_image');
popupImage.setEventListeners();

function handleOpenImagePopup(name, link) {
  popupImage.open(name, link);
}

const handleCardFormSubmit = (formValues) => {
  const cardItem = {
    name: formValues.placeName,
    link: formValues.placeLink
  }
  const newCard = createCard(cardItem)
  cardList.addItem(newCard);
  popupCard.close()
}
const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  infoSelector: '.profile__subtitle'
})
const popupProfile = new PopupWithForm('.popup_type-edit', handleFormEditSubmit);
popupProfile.setEventListeners();


const popupCard = new PopupWithForm('.popup_card-add', handleCardFormSubmit)
popupCard.setEventListeners();

function handleFormEditSubmit(formValues) {
  userInfo.setUserInfo(formValues);
  popupProfile.close();
}


popupOpenProfileEdit.addEventListener('click', function () {
  const userData = userInfo.getUserInfo()
  nameInput.value = userData.name;
  jobInput.value = userData.info;
  popupProfileFormValidator.resetValidation();
  popupProfile.open()
})


//--------------------открываем и закрываем попап с добавлением карточки ---------------//
openAddCardButton.addEventListener('click', () => {
  popupCardFormValidator.resetValidation();
  popupCard.open();
})


const popupProfileFormValidator = new FormValidator(config, popupProfileEdit);
popupProfileFormValidator.enableValidation();
popupProfileFormValidator.resetValidation()

const popupCardFormValidator = new FormValidator(config, formAddElement);
popupCardFormValidator.enableValidation();
popupCardFormValidator.resetValidation()
