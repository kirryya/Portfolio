import axios from "axios"

const instance = axios.create({
    baseURL: "https://localhost:3010/",
});

export const formAPI = {
    sendMessage(dataForm: dataFormType) {
        return instance.post("sendMessage", dataForm);
    },
};

export type dataFormType = {
    name: string
    email: string,
    message: string,
}