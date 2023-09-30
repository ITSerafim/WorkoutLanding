import axios from "axios";
import createQuerySelector from "./utils";

class RegisterForm {
  register = null;
  name = null;
  email = null;
  password = null;
  url = null;
  formData = {};

  constructor() {
    this.register = createQuerySelector("#register");
    this.name = createQuerySelector("#name");
    this.email = createQuerySelector("#email");
    this.password = createQuerySelector("#password");
    this.url = "http://example.com/create/message";
  }

  setLoginInStorage(login) {
    return localStorage.setItem("login", login);
  }
  setTokenInStorage(token) {
    return localStorage.setItem("token", token);
  }

  async register() {
    this.formData = {
      name: name.value,
      email: email.value,
      password: password.value
    };
    const response = await axios.post(this.url, formData);
    const login = response.data.login;
    const token = response.data.token;
    setLoginInStorage(login);
    setTokenInStorage(token);
  }
}

export default RegisterForm;
