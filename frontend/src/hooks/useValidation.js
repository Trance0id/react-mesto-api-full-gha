import React from "react";

export default function useValidation() {
  const [inputValues, setInputValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState(false);

  function onInputChange(e) {
    setInputValues((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
    setErrors((errors) => ({
      ...errors,
      [e.target.name]: e.target.validationMessage,
    }));
    setIsFormValid(e.target.closest("form").checkValidity());
  }

  function resetForm(userInfo = {}) {
    setInputValues(userInfo);
    setErrors({});
    setIsFormValid(false);
  }

  return { inputValues, errors, onInputChange, isFormValid, resetForm };
}
