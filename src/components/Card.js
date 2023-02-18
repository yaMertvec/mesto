class Card {
  constructor(item, cardTemplate,handleCardClick) {
    this._name = item.name;
    this._link = item.link;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;

  }
  _getTemplate() {
    const card = document
      .querySelector(this._cardTemplate)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return card;
  }
  generateCard() {
    this._card = this._getTemplate();
    this._cardLikeButton = this._card.querySelector('.card__like-button')
    this._cardImage = this._card.querySelector('.card__image');
    this._cardTitle = this._card.querySelector('.card__title');
    this._setEventListeners();
    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    return this._card;
  }

  _setEventListeners() {

    this._cardLikeButton.addEventListener('click', () => {
      this._handleLikeButton()
    });

    this._card.querySelector('.card__delete-button').addEventListener('click', () => {
      this._handleDeleteButton();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

  }
  _handleCardClick() {
    const popupImageElement = this._card.querySelector('.popup__image-element');
    const popupDescription = this._card.querySelector('.popup__description');
    popupImageElement.src = this._link;
    popupImageElement.alt = this._name;
    popupDescription.textContent = this._name;
  }

  _handleLikeButton() {
    this._cardLikeButton.classList.toggle('card__like-button_active');
  }

  _handleDeleteButton() {
    this._card.remove();
    this._card = null
  }
}
export { Card }


