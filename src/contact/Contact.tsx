import React, {ChangeEvent, useEffect, useState} from 'react';
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
        if (!e.currentTarget.value.length) {
            setYourNameError(true)
            setDisabled(true)
        } else {
            setYourNameError(false)
            setDisabled(false)
        }
    }

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
        if (String(e.currentTarget.value)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
            setEmailError(false)
            setDisabled(false)
        } else {
            setEmailError(true)
            setDisabled(true)
        }
    };

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
        if (e.currentTarget.value.length < 2) {
            setMessageError(true)
            setDisabled(true)
        } else {
            setMessageError(false)
            setDisabled(false)
        }
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
                setSend("Message send")
                setYourName("")
                setMessage("")
                setEmail("")
                setDisabled(true)
            })
            .catch(() => {
                setSend("Message NOT SEND")
            })
            .finally(() => {
                setLoading(false)
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
                                    ? <input type={"text"} required placeholder={"Enter correct name!"} value={yourName}
                                             className={style.nameFormError} onChange={onChangeNameHandler}
                                    />
                                    : <input type={"text"} required placeholder={"Enter your name..."} value={yourName}
                                             className={style.nameForm} onChange={onChangeNameHandler}
                                    />
                                }
                                {emailError
                                    ? <input placeholder={"Enter correct email!"} className={style.emailFormError}
                                             onChange={onChangeEmailHandler}
                                    />
                                    : <input name="email" placeholder={"Enter your email..."} value={email}
                                             className={style.emailForm} onChange={onChangeEmailHandler}
                                    />
                                }
                                {messageError
                                    ? <textarea placeholder={"Your message is too short!"} value={message}
                                                className={style.messageFormError}
                                                onChange={onChangeMessageHandler}>{message}</textarea>

                                    : <textarea placeholder={"Enter your message..."} value={message}
                                                className={style.messageForm}
                                                onChange={onChangeMessageHandler}>{message}</textarea>
                                }
                            </form>
                            {send
                                ? <div className={style.message}>{send}</div>
                                : <button className={disabled ? style.buttonDisabled : style.button} type="submit"
                                          onClick={onClickSendHandler}
                                          disabled={yourNameError || emailError || messageError || disabled}>Send</button>}
                        </div>}
                </div>
            </Fade>
        </div>
    );
};