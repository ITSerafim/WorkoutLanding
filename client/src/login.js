import axios from "axios";

class LoginForm {
    login = document.querySelector("#login");
    password = document.querySelector("#password");
    submit = document.querySelector("#submit");
    url = "http://example.com/create/message";
    formData = {}


    setTokenInStorage(token) {
        return localStorage.setItem("token", token);
    }

    async login() {
        this.formData = {
            login: login.value,
            password: password.value,
        };

        const response = await axios.post(url, formData);
        const token = response.data.token;
        setTokenInStorage(token);
    }
}

export default LoginForm;