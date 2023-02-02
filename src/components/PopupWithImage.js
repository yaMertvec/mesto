import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImageElement = this._popup.querySelector('.popup__image-element')
    this._popupDescription = this._popup.querySelector('.popup__description')
  }
  open(name,link) {
    this._popupImageElement.src = link;
    this._popupImageElement.alt = name;
    this._popupDescription.textContent = name;
    super.open();
  }
}
