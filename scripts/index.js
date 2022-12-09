//-------------------------------переменные----------------------//
const popupElement = document.querySelector('.popup');
const popupCardAdd = document.querySelector('.popup_card-add');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupProfileEditElement = document.querySelector('.profile__edit-button');
const pageElement = document.querySelector('.page');
const profileName = pageElement.querySelector('.profile__title');
const profileJob = pageElement.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__form');
const formElementAdd = document.querySelector('.popup__add');
const nameInput = formElement.querySelector('.popup__input_data_name');
const jobInput = formElement.querySelector('.popup__input_data_job');
const popupAddButtonElement = document.querySelector('.profile__add-button');
const popupPlace = document.querySelector('.popup__input_data_place');
const popupPlaceLink = document.querySelector('.popup__input_data_place-link');
const popupCloseCardAdd = document.querySelector('.popup__close_card-add');
const popupCloseImage = document.querySelector('.popup__close_image');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const handleDeleteButtonClick = (e) => {
  e.target.closest('.card').remove();
}
//       Добавление карточки //

const generateCard = (item) => {
  const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
  const card = cardTemplate.cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  cardTitle.textContent = item.name;
  const cardImage = card.querySelector('.card__image');
  cardImage.alt = item.name
  cardImage.src = item.link
  const openImagePopup = function () {
    popupImage.classList.add('popup_opened');
  }
  const imagePopupHandler = (e) => {
    popupImageElement.src = e.target.src;
    popupImageElement.alt = e.target.closest('.card').querySelector('.card__title').textContent;
    popupDescription.textContent = e.target.closest('.card').querySelector('.card__title').textContent;
    openImagePopup();
  }

  cardImage.addEventListener('click', imagePopupHandler);
  const closeImagePopup = function () {
    popupImage.classList.remove('popup_opened');
  }
  popupCloseImage.addEventListener('click', closeImagePopup);


  popupDescription = document.querySelector('.popup__description');

  cardImage.addEventListener('click', openImagePopup);
  return card;
}

const renderCard = (item) => {
  const card = generateCard(item)
  listElements.prepend(card)
  const deleteButton = document.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', handleDeleteButtonClick);
};

const listElements = document.querySelector('.elements');
initialCards.forEach(item => {
  renderCard(item);
});

////////////////////////////////////////////////////////////////////





const openAddCardPopup = function () {
  popupCardAdd.classList.add('popup_opened');
}
const closeAddCardPopup = function () {
  popupCardAdd.classList.remove('popup_opened');
}
const openPopup = function () {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}


// const closePopupByClickOnOverlay = function (event) {
//   console.log(event.target, event.currentTarget);
//   if (event.target !== event.currentTarget) {
//     return;
//   }
//   closePopup();
// }


// ----------------------обработчик--------------------------- //
formElement.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', handleFormSubmit);
popupProfileEditElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupCloseCardAdd.addEventListener('click', closeAddCardPopup);
popupAddButtonElement.addEventListener('click', openAddCardPopup);

// popupElement.addEventListener('click', closePopupByClickOnOverlay);
// -----------------------------------------------------//



function handleFormSubmit(e) {
  e.preventDefault();
  const card = {
    name: popupPlace.value,
    link: popupPlaceLink.value
  }

  renderCard(card, listElements)
  closeAddCardPopup();
  popupPlace.value = '';
  popupPlaceLink.value = '';
  const deleteButton = document.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', handleDeleteButtonClick);
  const likeElement = document.querySelectorAll('.card__like-button');
  const likeActiveElement = document.querySelector('card__like-button_active');
  likeElement.forEach(element => {
    element.onclick = handleLike
  });

  const popupImage = document.querySelector('.popup_image');
  const cardImage = document.querySelector('.card__image');
  const openImagePopup = function () {
    popupImage.classList.add('popup_opened');
  }
  cardImage.addEventListener('click', openImagePopup);
}

const likeElement = document.querySelectorAll('.card__like-button');
const likeActiveElement = document.querySelector('card__like-button_active');

const handleLike = (event) => {
  if (event.target.classList.contains('card__like-button_active')) {
    event.target.classList.remove('card__like-button_active');
    return;
  }
  event.target.classList.add('card__like-button_active');
}
likeElement.forEach(element => {
  element.onclick = handleLike
});

const popupImage = document.querySelector('.popup_image');
const cardImage = document.querySelector('.card__image');
popupImageElement = document.querySelector('.popup__image-element');
const openImagePopup = function () {

  popupImage.classList.add('popup_opened');
}
