class Card {
  constructor(item, cardTemplate, handleOpenImagePopup) {
    this._name = item.name;
    this._link = item.link;
    this._cardTemplate = cardTemplate;
    this._handleOpenImagePopup = handleOpenImagePopup;

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
      this._handleOpenImagePopup(this._name, this._link);
    });

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


