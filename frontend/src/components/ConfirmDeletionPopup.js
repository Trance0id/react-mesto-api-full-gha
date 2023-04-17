import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function ConfirmDeletionPopup({
  cardId,
  onCardDelete,
  isOpen,
  onClose,
  formIsLoading,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete(cardId);
  }
  return (
    <PopupWithForm
      title="Вы уверены?"
      name="delete"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      formIsLoading={formIsLoading}
      submitButtonText="Да"
      submitButtonValidity={true}
    />
  );
}

export default ConfirmDeletionPopup;
