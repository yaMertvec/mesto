export class UserInfo {
  constructor({ nameSelector, infoSelector }) {
    this._nameElement = document.querySelector(nameSelector)
    this._infoElement = document.querySelector(infoSelector)
  }
  getUserInfo() {
   return {
  name : this._nameElement.textContent,
  info : this._infoElement.textContent,
  }}

  setUserInfo({ userName, userJob }) {
    this._nameElement.textContent = userName;
    this._infoElement.textContent = userJob
  }
}
