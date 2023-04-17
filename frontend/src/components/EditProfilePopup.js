import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import PopupWithForm from "./PopupWithForm.js";
import useValidation from "../hooks/useValidation.js";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, formIsLoading }) {
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name: validation.inputValues.name,
      about: validation.inputValues.about,
    });
  }

  const validation = useValidation();

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    validation.resetForm({
      name: currentUser.name,
      about: currentUser.about,
    });
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      formIsLoading={formIsLoading}
      submitButtonValidity={validation.isFormValid}
      submitButtonText="Сохранить"
    >
      <input
        type="text"
        placeholder="Имя"
        className="popup__input"
        name="name"
        required
        minLength="2"
        maxLength="40"
        autoComplete="off"
        value={validation.inputValues.name || ""}
        onChange={validation.onInputChange}
      />
      <div className="popup__error">{validation.errors.name}</div>
      <input
        type="text"
        placeholder="Вид деятельности"
        className="popup__input"
        name="about"
        required
        minLength="2"
        maxLength="200"
        autoComplete="off"
        value={validation.inputValues.about || ""}
        onChange={validation.onInputChange}
      />
      <div className="popup__error">{validation.errors.about}</div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
