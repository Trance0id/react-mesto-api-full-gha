import AuthForm from "./AuthForm.js";

function Login({ ...props }) {
  return (
    <div className="popup__container popup__container_type_auth">
      <h3 className="popup__heading popup__heading_type_auth">Вход</h3>
      <AuthForm name="login" {...props} submitButtonText="Войти" />
    </div>
  );
}

export default Login;
