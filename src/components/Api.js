export class Api {
  constructor(props) {
    this._baseUrl = props.baseUrl;
    this._headers = props.headers;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка:${res.status}`);
  }

  _request(url, props) {
    return fetch(url, props).then(this._checkResponse);
  }

  getUserInfo() {
    return this._request(`${this._baseUrl}/users/me`,
      {
        method: 'GET',
        headers: this._headers
      })
  }

  getInitialCards() {
    return this._request(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
  }

  sendUserInfo(userData) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: `${userData.userName}`,
        about: `${userData.userJob}`
      })
    })
  }
  sendNewCardInfo(formValues) {
    return this._request(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: `${formValues.placeName}`,
        link: `${formValues.placeLink}`
      })
    })
  }

  deleteCard(id) {
    return this._request(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }

  setCardLike(id,method) {
    return this._request(`${this._baseUrl}/cards/${id}/likes`, {
      method: method,
      headers: this._headers
    })
  }

  // deleteCardLike(id) {
  //   return this._request(`${this._baseUrl}/cards/${id}/likes`, {
  //     method: 'DELETE',
  //     headers: this._headers
  //   })
  // }

  changeAvatar(formValues) {
    return this._request(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: formValues.url
      })
    })
  }
};


