import { Link } from "react-router-dom";
import AuthForm from "./AuthForm.js";

function Register({ ...props }) {
  return (
    <div className="popup__container popup__container_type_auth">
      <h3 className="popup__heading popup__heading_type_auth">Регистрация</h3>
      <AuthForm name="register" {...props} />
      <Link to="/sign-in" className="popup__bottom-link">
        Уже зарегистрированы? Войти
      </Link>
    </div>
  );
}

export default Register;
