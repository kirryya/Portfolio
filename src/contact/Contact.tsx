import React, {ChangeEvent, useState} from 'react';
import style from "./Contacts.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import {Title} from "../common/components/title/Title";
import fontImage from "../assets/image/font_main.jpg";
import {formAPI} from "../api/api";

export const Contact = () => {

    const font = {
        backgroundImage: `url(${fontImage})`
    }

    const Fade = require("react-reveal/Fade");

    const [yourName, setYourName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [send, setSend] = useState<string | null>(null)

    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setYourName(e.currentTarget.value)
    }
    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const onClickSendHandler = () => {
        const dataForm = {
            name: yourName,
            email: email,
            message: message,
        }
        formAPI.sendMessage(dataForm)
            .then(() => {
                setSend("Message send")
                setTimeout(() => {
                    setSend(null)
                }, 3000)
            })
            .catch((error) => {
                setSend("Not send")
                setTimeout(() => {
                    setSend(null)
                }, 3000)
            })

        setYourName("")
        setMessage("")
        setEmail("")

    }

    return (
        <div className={style.contactsBlock} style={font} id={"contact"}>
            <Fade right>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <Title title={"Contact"}/>
                    <div className={style.addForm}>
                        <form className={style.form} id={"contact-form"}>
                            <input placeholder={"Your name"} value={yourName} className={style.nameForm}
                                   onChange={onChangeNameHandler}/>
                            <input placeholder={"Your email"} value={email} className={style.emailForm}
                                   onChange={onChangeEmailHandler}/>
                            <textarea placeholder={"Your message"} value={message} className={style.messageForm}
                                      onChange={onChangeMessageHandler}>{message}</textarea>
                        </form>
                        {send ?
                            <div className={style.message}>
                                {send}
                            </div>
                            : <button className={style.button} onClick={onClickSendHandler}>Send</button>}
                    </div>
                </div>
            </Fade>
        </div>
    );
};