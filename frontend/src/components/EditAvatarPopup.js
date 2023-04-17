import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import useValidation from "../hooks/useValidation.js";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, formIsLoading }) {
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: validation.inputValues.avatar,
    });
  }

  React.useEffect(() => {
    validation.resetForm();
  }, [isOpen]);

  const validation = useValidation();

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      formIsLoading={formIsLoading}
      submitButtonValidity={validation.isFormValid}
      submitButtonText="Обновить"
    >
      <input
        type="url"
        className="popup__input"
        name="avatar"
        placeholder="Ссылка на аватар"
        required
        minLength="2"
        autoComplete="off"
        value={validation.inputValues.avatar || ""}
        onChange={validation.onInputChange}
      />
      <div className="popup__error">{validation.errors.avatar}</div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
