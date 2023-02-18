<<<<<<< HEAD
 export class Popup {
=======
 class Popup {
>>>>>>> 3917d6fe9ca259db4071796672c1ac4da3e1de87
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this)
  }
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close').addEventListener('click', () => {
      this.close();
    });
    this._popup.addEventListener('click', (e) => {
      if (e.target.classList.contains('popup_opened')) {
        this.close();
      }
    });
  }
}
<<<<<<< HEAD
=======
export { Popup }
>>>>>>> 3917d6fe9ca259db4071796672c1ac4da3e1de87
