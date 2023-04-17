import logoMesto from "../images/logo/mesto-white.svg";
import { NavLink, useLocation } from "react-router-dom";

function Header({ email, onLogOut }) {
  const path = useLocation().pathname;

  let text, linkTo, handleClick;

  switch (path) {
    case "/":
      text = "Выйти";
      linkTo = "/";
      handleClick = (e) => {
        e.preventDefault();
        onLogOut();
      };
      break;
    case "/sign-in":
      text = "Регистрация";
      linkTo = "/sign-up";
      handleClick = null;
      break;
    case "/sign-up":
      text = "Вход";
      linkTo = "/sign-in";
      handleClick = null;
      break;
  }

  return (
    <header className="header">
      <img src={logoMesto} alt="Логотип Место" className="logo" />
      <p className="header__content">
        {email}
        <NavLink
          to={linkTo}
          onClick={handleClick}
          className={({ isActive }) =>
            `header__link ${isActive && "header__link_active"}`
          }
        >
          {text}
        </NavLink>
      </p>
    </header>
  );
}

export default Header;
