import React, {ChangeEvent, useEffect, useState, FocusEvent} from 'react';
import style from "./Contacts.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import {Title} from "../common/components/title/Title";
import fontImage from "../assets/image/font_main.jpg";
import {dataFormType, formAPI} from "../api/api";

export const Contact = () => {

    const font = {
        backgroundImage: `url(${fontImage})`
    }

    const Fade = require("react-reveal/Fade");

    const [yourName, setYourName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [send, setSend] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [yourNameError, setYourNameError] = useState<boolean>(false)
    const [emailError, setEmailError] = useState<boolean>(false)
    const [messageError, setMessageError] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(true)


    useEffect(() => {
        const timeOut = setTimeout(() => {
            setSend(null)
        }, 3000)

        return () => {
            clearTimeout(timeOut)
        }

    }, [send])

    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setYourName(e.currentTarget.value)
        if (e.currentTarget.value.length < 2) {
            setYourNameError(true)
        } else {
            setYourNameError(false)
            setDisabled(false)
        }
    }

    const onBlurNameHandler = (e: FocusEvent<HTMLInputElement>) => {
        if (!e.currentTarget.value.length || e.currentTarget.value.length < 2) {
            setYourNameError(true)
        } else {
            setYourName(e.currentTarget.value)
            setYourNameError(false)
            setDisabled(false)
        }
    }


    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }


    const onClickSendHandler = () => {
        setLoading(true)
        const dataForm: dataFormType = {
            name: yourName,
            email: email,
            message: message,
        }
        formAPI.sendMessage(dataForm)
            .then(() => {
                setLoading(false)
                setSend("Message send")
                setYourName("")
                setMessage("")
                setEmail("")
            })
            .catch(() => {
                setLoading(false)
                setSend("Message NOT SEND")
            })
    }

    return (
        <div className={style.contactsBlock} style={font} id={"contact"}>
            <Fade right>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <Title title={"Contact"}/>
                    {loading
                        ? <div className={style.messageSending}>SENDING...</div>
                        : <div className={style.addForm}>
                            <form className={style.form} id={"contact-form"}>
                                {yourNameError
                                    ? <input placeholder={"Enter correct name!"} className={style.nameFormError}
                                             onBlur={onBlurNameHandler}/>
                                    : <input placeholder={"Enter your name..."} value={yourName} id={"name"}
                                             className={style.nameForm} onChange={onChangeNameHandler} onBlur={onBlurNameHandler} />}
                                <input name="email" placeholder={"Enter your email..."} value={email}
                                       className={style.emailForm} onChange={onChangeEmailHandler}/>
                                <textarea placeholder={"Enter your message..."} value={message}
                                          className={style.messageForm}
                                          onChange={onChangeMessageHandler}>{message}</textarea>
                            </form>
                            {send
                                ? <div className={style.message}>{send}</div>
                                : <button className={style.button} type="submit"
                                          onClick={onClickSendHandler} disabled={yourNameError || emailError || messageError || disabled}>Send</button>}
                        </div>}
                </div>
            </Fade>
        </div>
    );
};