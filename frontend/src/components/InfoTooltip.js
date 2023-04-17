import React from "react";
import okLogo from "../images/logo/logo-reg-success.svg";
import failLogo from "../images/logo/logo-reg-fail.svg";

function InfoTooltip({ isOpen, onClose, regSucceed, loggedIn }) {
  return (
    <div
      className={`popup popup_type_info ${isOpen && "popup_opened"}`}
      onClick={onClose}
    >
      <div
        className="popup__container popup__container_type_info"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="button popup__close"
          aria-label="Закрыть"
          onClick={onClose}
        />
        <div
          style={{
            backgroundImage: `url(${
              loggedIn ? okLogo : regSucceed ? okLogo : failLogo
            })`,
          }}
          className="popup__status-pic"
        />
        <h3 className="popup__heading popup__heading_type_info">
          {loggedIn
            ? "Вы успешно вошли на сайт! Для выхода нажмите Выйти"
            : regSucceed
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h3>
      </div>
    </div>
  );
}

export default InfoTooltip;
