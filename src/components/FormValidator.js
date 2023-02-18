export class FormValidator {
  constructor(config, form) {
    this._config = config
    this._form = form
    this._error = this._form.querySelector(this._config.inputErrorClass);
    this._inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._button = this._form.querySelector(this._config.submitButtonSelector)
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage)
    } else {
      this._hideInputError(input)
    }
  }

  _showInputError(input, errorMessage) {
    this._error = this._form.querySelector(`#${input.id}-error`);
    input.classList.add(this._config.inputErrorClass);
    this._error.textContent = errorMessage
  }

  _hideInputError(input) {
    this._error = this._form.querySelector(`#${input.id}-error`);
    input.classList.remove(this._config.inputErrorClass);
    this._error.textContent = "";
  }
  _enableButton() {
    this._button.classList.remove(this._config.inactiveButtonClass)
    this._button.disabled = ''
  }

  _disableButton() {
    this._button.classList.add(this._config.inactiveButtonClass)
    this._button.disabled = 'disabled'
  }
  _hasInvalidInput() {
    return this._inputs.every((input) => {
      return input.validity.valid;
    });
  }
  resetValidation() {
    this._toggleButton();
    this._inputs.forEach((input) => {
    this._hideInputError(input)
    });
  }

  _toggleButton() {
    if (this._hasInvalidInput(this._inputs)) {
      this._enableButton()
    } else {
      this._disableButton()
    }
  }
  _setEventListener() {
    this._toggleButton();
    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButton();
      });
    });
  }

  enableValidation() {
    this._setEventListener();
  }

}

