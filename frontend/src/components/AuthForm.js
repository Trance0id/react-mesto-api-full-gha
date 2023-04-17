import useValidation from "../hooks/useValidation.js";
import { useState } from "react";
function AuthForm({ formIsLoading, handleLogin }) {
  const validation = useValidation();

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
    validation.onInputChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formValue);
  };

  return (
    <form name="auth" className="popup__form" onSubmit={handleSubmit}>
      <input
        type="email"
        className="popup__input popup__input_env_auth"
        name="email"
        placeholder="Email"
        required
        minLength="2"
        maxLength="30"
        autoComplete="on"
        value={formValue.email || ""}
        onChange={handleChange}
      />
      <div className="popup__error">{validation.errors.email}</div>
      <input
        type="password"
        className="popup__input popup__input_env_auth"
        name="password"
        placeholder="Пароль"
        required
        autoComplete="off"
        minLength="8"
        maxLength="20"
        value={formValue.password || ""}
        onChange={handleChange}
      />
      <div className="popup__error">{validation.errors.password}</div>
      <button
        type="submit"
        className={`button popup__button popup__button_env_auth ${
          validation.isFormValid || true ? "" : "popup__button_disabled"
        }`}
        disabled={!validation.isFormValid}
      >
        {formIsLoading ? "Подождите..." : "Войти"}
      </button>
    </form>
  );
}

export default AuthForm;
