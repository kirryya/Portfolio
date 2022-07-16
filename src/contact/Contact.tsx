import React, {ChangeEvent, useEffect, useState} from 'react';
import style from "./Contacts.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import {Title} from "../common/components/title/Title";
import fontImage from "../assets/image/font_main.jpg";
import {dataFormType, formAPI} from "../api/api";
import {ContactForm} from "./contactForm/ContactForm";

export const Contact = () => {

    const font = {
        backgroundImage: `url(${fontImage})`
    }

    const Fade = require("react-reveal/Fade");

    const [send, setSend] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [disabled, setDisabled] = useState<boolean>(true)
    const [yourName, setYourName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [yourNameError, setYourNameError] = useState<boolean>(false)
    const [emailError, setEmailError] = useState<boolean>(false)
    const [messageError, setMessageError] = useState<boolean>(false)


    useEffect(() => {
        const timeOut = setTimeout(() => {
            setSend(null)
        }, 3000)

        return () => {
            clearTimeout(timeOut)
        }

    }, [send])

    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        setYourName(value)
        if (!value.length) {
            setYourNameError(true)
            setDisabled(true)
        } else {
            setYourName(value)
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
            setEmail(e.currentTarget.value)
            setEmailError(false)
            setDisabled(false)
        } else {
            setEmailError(true)
            setDisabled(true)
        }
    };

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.currentTarget.value
        setMessage(value)
        if (value.length < 2) {
            setMessageError(true)
            setDisabled(true)
        } else {
            setMessage(value)
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
                setSend("Message has been sent")
                setYourName("")
                setMessage("")
                setEmail("")
                setDisabled(true)
            })
            .catch(() => {
                setSend("Message has NOT been SENT")
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
                            <form id={"contact-form"}>
                                <ContactForm
                                    onChangeNameHandler={onChangeNameHandler}
                                    onChangeEmailHandler={onChangeEmailHandler}
                                    onChangeMessageHandler={onChangeMessageHandler}
                                    yourNameError={yourNameError}
                                    emailError={emailError}
                                    messageError={messageError}
                                    message={message}
                                    email={email}
                                    yourName={yourName}
                                />
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