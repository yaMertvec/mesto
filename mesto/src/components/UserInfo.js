export class UserInfo {
  constructor({ nameSelector, infoSelector,avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector)
    this._infoElement = document.querySelector(infoSelector)
    this._avatarElement = document.querySelector(avatarSelector)
  }
  getUserInfo() {
    const userInfo = {}
    userInfo.name = this._nameElement.textContent;
    userInfo.info = this._infoElement.textContent;
    return userInfo;
  }

  setUserInfo({ name, about,avatar,_id }) {
    this._nameElement.textContent = name;
    this._infoElement.textContent = about;
    this._avatarElement.src = avatar;
    this._id = _id;
  }
  getId() {
    return this._id
  }
}
