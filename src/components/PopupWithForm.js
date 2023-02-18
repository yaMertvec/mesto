import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector)
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._popup.querySelectorAll('.popup__input');
<<<<<<< HEAD
    this._submitButton = this._form.querySelector('.popup__button');
    this._submitButtonText = this._submitButton.textContent;
  }
  _getInputValues() {
   const formValues = {};
    this._inputList.forEach(input => {
      formValues[input.name] = input.value
    });
    return formValues;
  }

  setInputValues(userData) {
    this._inputList.forEach(input => {
      input.value = userData[input.name]
    })
  }
=======
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value
    });
    return this._formValues;
  }

>>>>>>> 3917d6fe9ca259db4071796672c1ac4da3e1de87

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })

  }
  close() {
    super.close();
    this._form.reset()
  }
<<<<<<< HEAD
  disableSubmitButton() {
    this._submitButton.disabled = true;
  }

  enableSubmitButton() {
    this._submitButton.disabled = false;
  }

  renderLoading(isLoading, loadingText = 'Сохранение...') {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }
=======
>>>>>>> 3917d6fe9ca259db4071796672c1ac4da3e1de87
}
