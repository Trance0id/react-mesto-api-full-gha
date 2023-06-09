export const BASE_URL = "https://api.mesto.trance0id.nomoredomains.monster";

export const register = (formData) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка регистрации! Статус: ${res.status}`);
    }
  });
};

export const authorize = (formData) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка авторизации! Статус: ${res.status}`);
    }
  });
};

export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: "GET",
    credentials:'include',
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка выхода из системы! Статус: ${res.status}`);
    }
  });
};

export const checkAuth = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка проверки токена! Статус: ${res.status}`);
    }
  });
};
