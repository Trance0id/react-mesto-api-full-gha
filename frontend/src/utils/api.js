const API_CONFIG = {
  baseUrl: "https://api.mesto.trance0id.nomoredomains.monster",
  headers: {
    // authorization: "66368252-4907-4b17-913b-366c2f7ebfd6",
  },
};

class Api {
  _baseUrl;
  _headers;

  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _callFetch(endpoint, method, body, contentType) {
    const headers = this._headers;
    headers["Content-Type"] = contentType;
    return fetch(this._baseUrl + endpoint, {
      method,
      credentials: 'include',
      headers,
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка! Статус: ${res.status}`);
      }
    });
  }

  getUserInfo() {
    return this._callFetch("/users/me");
  }

  getInitialCards() {
    return this._callFetch("/cards");
  }

  changeLikeCardStatus(cardId, status) {
    return status
      ? this._callFetch(`/cards/${cardId}/likes`, "PUT")
      : this._callFetch(`/cards/${cardId}/likes`, "DELETE");
  }

  deleteCard(cardId) {
    return this._callFetch(`/cards/${cardId}`, "DELETE");
  }

  setUserInfo(body) {
    return this._callFetch("/users/me", "PATCH", body, "application/json");
  }

  addNewPlace(body) {
    return this._callFetch("/cards", "POST", body, "application/json");
  }

  setUserAvatar(body) {
    return this._callFetch(
      "/users/me/avatar",
      "PATCH",
      body,
      "application/json"
    );
  }
}

const api = new Api(API_CONFIG);

export default api;
