import axios from "axios";

class FastForm {
    name = document.getElementById("name");
    message = document.getElementById("message");
    url = "http://example.com/create/message";
    formData = {}

    async sendForm() {
        this.formData = {
            name: this.name.value,
            message: this.message.value,
        };

        console.log(this.formData);


        await axios.post(this.url, this.formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}

export default FastForm;