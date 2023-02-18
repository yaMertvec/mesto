class Card {
  constructor(item, cardTemplate, handleCardClick, openDeleteConfirmation, handleLikeButton, id, userId) {
    this.item = item
    this._name = item.name;
    this._link = item.link;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._openDeleteConfirmation = openDeleteConfirmation;
    this._likes = item.likes;
    this.handleLikeButton = handleLikeButton;
    this._id = item._id;
    // this._myId = id;
    this._userId = userId
    this._ownerId = item.owner._id
  }
  // _checkLikeId() {
  //   return this._likes.find(like => like._id == this._myId)
  // }
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
    this._cardLikeButton = this._card.querySelector('.card__like-button');
    this._cardImage = this._card.querySelector('.card__image');
    this._cardTitle = this._card.querySelector('.card__title');
    this._deleteButton = this._card.querySelector('.card__delete-button');
    this._likeCounter = this._card.querySelector('.card__like-counter');
    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._setEventListeners();
    this._toggleLikeButton()
    this._showCountOfLikes();
    this._handleRemoveDeleteButton()
    // this._likeCounter.textContent = this._likes.length
    // const isMe = this._checkLikeId()
    // if (isMe) {
    //   this._cardLikeButton.classList.toggle('card__like-button_active');
    // }

    return this._card;

  }


  _setEventListeners() {

    this._cardLikeButton.addEventListener('click', () => {
      this.handleLikeButton(this._id, this);
    });

    this._deleteButton.addEventListener('click', () => {
      this._openDeleteConfirmation(this);
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

  // handleLikeButton() {
  //   this._cardLikeButton.classList.toggle('card__like-button_active');
  //   if (this._likes.find(like => like._id == this._myId)) {
  //     this._likeCounter.textContent = this._likes.length - 1;
  //     this._likes = this._likes.filter(like => like._id != this._myId);
  //     this._handleDelLikeClick(this._id);
  //   } else {
  //     this._likeCounter.textContent = this._likes.length + 1;
  //     this._handleLikeClick(this._id)
  //     this._likes = [...this._likes, { _id: this._myId }]
  //   };
  // }
  _handleRemoveDeleteButton() {
    if (this._ownerId != this._userId) {
      this._deleteButton.classList.add('card__delete-button_hide');
    } else {
      this._deleteButton.classList.remove('card__delete-button_hide')
    }
  }
  handleLikeButtonClick = () => {
    this._cardLikeButton.classList.toggle('card__like-button_active');
  }
  _showCountOfLikes() {
    this._likeCounter.textContent = this._likes.length;
  }

  _toggleLikeButton = () => {
    if (this.isLiked()) {
      this.handleLikeButtonClick();
    }
  }

  isLiked() {
    const isLikedByMe = this._likes.some(like => like._id === this._userId)
    return isLikedByMe
  }

  handleDeleteButton() {
    this._card.remove();
    this._card = null
  }

  likesValue(likes) {
    this._likes = likes;
    this._likeCounter.textContent = likes.length;
  }

}

export { Card }


