import React, {ChangeEvent} from 'react';
import style from "../Contacts.module.scss";

type ContactFormPropsType = {
    onChangeNameHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeEmailHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMessageHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    yourNameError: boolean
    emailError: boolean
    messageError: boolean
    message: string
    email: string
    yourName: string
}

export const ContactForm = (props: ContactFormPropsType) => {

    return (
        <div className={style.form}>
            {props.yourNameError
                ? <input type={"text"} required placeholder={"Enter correct name!"} value={props.yourName}
                         className={style.nameFormError} onChange={props.onChangeNameHandler}
                />
                : <input type={"text"} required placeholder={"Enter your name..."} value={props.yourName}
                         className={style.nameForm} onChange={props.onChangeNameHandler}
                />
            }
            {props.emailError
                ? <input placeholder={"Enter correct email!"} value={props.email}
                         className={style.emailFormError} onChange={props.onChangeEmailHandler}
                />
                : <input name="email" placeholder={"Enter your email..."} value={props.email}
                         className={style.emailForm} onChange={props.onChangeEmailHandler}
                />
            }
            {props.messageError
                ? <textarea placeholder={"Your message is too short!"} value={props.message}
                            className={style.messageFormError}
                            onChange={props.onChangeMessageHandler}>{props.message}</textarea>

                : <textarea placeholder={"Enter your message..."} value={props.message}
                            className={style.messageForm}
                            onChange={props.onChangeMessageHandler}>{props.message}</textarea>
            }
        </div>
    );
};
