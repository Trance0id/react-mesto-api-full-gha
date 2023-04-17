import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import useValidation from "../hooks/useValidation.js";

function AddPlacePopup({ isOpen, onClose, onAddPlace, formIsLoading }) {
  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: validation.inputValues.name,
      link: validation.inputValues.link,
    });
  }

  const validation = useValidation();

  React.useEffect(() => {
    validation.resetForm();
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      formIsLoading={formIsLoading}
      submitButtonValidity={validation.isFormValid}
      submitButtonText="Добавить"
    >
      <input
        type="text"
        className="popup__input"
        name="name"
        placeholder="Название"
        required
        minLength="2"
        maxLength="30"
        autoComplete="off"
        value={validation.inputValues.name || ""}
        onChange={validation.onInputChange}
      />
      <div className="popup__error">{validation.errors.name}</div>
      <input
        type="url"
        className="popup__input"
        name="link"
        placeholder="Ссылка на картинку"
        required
        autoComplete="off"
        value={validation.inputValues.link || ""}
        onChange={validation.onInputChange}
      />
      <div className="popup__error">{validation.errors.link}</div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
