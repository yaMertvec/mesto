import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { config } from "../utils/constants.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import "../pages/index.css";
import { Api } from "../components/Api.js";
import { PopupDeleteConfirmation } from "../components/PopupDeleteConfirmation.js";
//-------------------------------переменные----------------------//
// const popupElement = document.querySelector('.popup');
const popupProfileEdit = document.querySelector(".popup_type-edit");
const popupOpenProfileEdit = document.querySelector(".profile__edit-button");
const formEditElement = popupProfileEdit.querySelector(".popup__edit");
const formAddElement = document.querySelector(".popup__add");
const nameInput = formEditElement.querySelector(".popup__input_data_name");
const jobInput = formEditElement.querySelector(".popup__input_data_job");
const openAddCardButton = document.querySelector(".profile__add-button");
const listElements = document.querySelector(".elements");
const profileImage = document.querySelector(".profile__avatar");

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-59",
  headers: {
    authorization: "0065e409-04c2-4cfe-b280-fe6fb5be8f02",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    cardList.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

const cardList = new Section(
  {
    renderer: (item) => {
      const card = new Card(
        item,
        `#card-template`,
        handleOpenImagePopup,
        openDeleteConfirmation,
        handleLikeClick,
        handleDeleteCardFormSubmit,
        userInfo.getId()
      );
      const newCard = card.generateCard();
      return newCard;
    },
  },
  ".elements"
);

const popupImage = new PopupWithImage(".popup_image");
popupImage.setEventListeners();

function handleOpenImagePopup(name, link) {
  popupImage.open(name, link);
}

const handleCardFormSubmit = (cardData) => {
  popupCard.renderLoading(true);
  popupCard.disableSubmitButton();
  api
    .sendNewCardInfo(cardData)
    .then((cardData) => {
      popupCard.renderLoading(true, "Создано!");
      cardList.addItem(cardData);
      setTimeout(() => popupCard.close(), 1000);
    })
    .catch((err) => {
      console.log(err);
      popupCard.renderLoading(true, "Ошибка запроса!");
    })
    .finally(() => {
      setTimeout(() => {
        popupCard.enableSubmitButton();
        popupCard.renderLoading(false);
      }, 1500);
    });
};

function openDeleteConfirmation(card) {
  popupDeleteCard.open(card);
}

const handleDeleteCardFormSubmit = (card) => {
  popupDeleteCard.renderLoading(true);
  popupDeleteCard.disableSubmitButton();
  api
    .deleteCard(card._id)
    .then(() => {
      popupDeleteCard.renderLoading(true, "Удалено!");
      card.handleDeleteButton();
      popupDeleteCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setTimeout(() => {
        popupDeleteCard.enableSubmitButton();
        popupDeleteCard.renderLoading(false);
      }, 1500);
    });
};

const handleLikeClick = (cardId, card) => {
  const method = card.isLiked() ? "DELETE" : "PUT";
  api
    .setCardLike(cardId, method)
    .then((res) => {
      card.handleLikeButtonClick();
      card.likesValue(res.likes);
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleFormEditSubmit = (formValues) => {
  popupProfile.renderLoading(true);
  popupProfile.disableSubmitButton();
  api
    .sendUserInfo(formValues)
    .then((userData) => {
      userInfo.setUserInfo(userData);
      popupProfile.renderLoading(true, "Сохранено!");
      setTimeout(() => popupProfile.close(), 1000);
    })
    .catch((err) => {
      console.log(err);
      popupProfile.renderLoading(true, "Ошибка запроса!");
    })
    .finally(() => {
      setTimeout(() => {
        popupProfile.enableSubmitButton();
        popupProfile.renderLoading(false);
      }, 1500);
    });
};

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  infoSelector: ".profile__subtitle",
  avatarSelector: ".profile__avatar",
});
const popupProfile = new PopupWithForm(
  ".popup_type-edit",
  handleFormEditSubmit
);
popupProfile.setEventListeners();

const popupCard = new PopupWithForm(".popup_card-add", handleCardFormSubmit);
popupCard.setEventListeners();

popupOpenProfileEdit.addEventListener("click", function () {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.info;
  popupProfileFormValidator.resetValidation();
  popupProfile.open();
});

//--------------------открываем и закрываем попап с добавлением карточки ---------------//
openAddCardButton.addEventListener("click", () => {
  popupCardFormValidator.resetValidation();
  popupCard.open();
});

profileImage.addEventListener("click", () => {
  popupChangeAvatar.open();
});

const popupProfileFormValidator = new FormValidator(config, popupProfileEdit);
popupProfileFormValidator.enableValidation();

const popupCardFormValidator = new FormValidator(config, formAddElement);
popupCardFormValidator.enableValidation();

const popupDeleteCard = new PopupDeleteConfirmation(
  ".popup_card-delete-confirmation",
  handleDeleteCardFormSubmit
);
popupDeleteCard.setEventListeners();

const handleChangeAvatarFormSubmit = (formValues) => {
  popupChangeAvatar.renderLoading(true);
  popupChangeAvatar.disableSubmitButton();
  api
    .changeAvatar(formValues)
    .then((userData) => {
      userInfo.setUserInfo(userData);
      popupChangeAvatar.renderLoading(true, "Сохранено!");
      setTimeout(() => popupChangeAvatar.close(), 1000);
    })
    .catch((err) => {
      console.log(err);
      popupChangeAvatar.renderLoading(true, "Ошибка запроса!");
    })
    .finally(() => {
      setTimeout(() => {
        popupChangeAvatar.enableSubmitButton();
        popupChangeAvatar.renderLoading(false);
      }, 1500);
    });
};

const popupChangeAvatar = new PopupWithForm(
  ".popup_new-avatar",
  handleChangeAvatarFormSubmit
);
popupChangeAvatar.setEventListeners();
