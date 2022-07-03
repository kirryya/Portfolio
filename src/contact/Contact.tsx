import React from 'react';
import style from "./Contacts.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import {Title} from "../common/components/title/Title";
import fontImage from "../assets/image/font_main.jpg";

export const Contact = () => {

    const font = {
        backgroundImage: `url(${fontImage})`
    }

    const Fade = require("react-reveal/Fade");

    return (
        <div className={style.contactsBlock} style={font} id={"contact"}>
            <Fade right>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <Title title={"Contact"}/>
                    <div className={style.addForm}>
                        <form className={style.form}>
                            <input placeholder={"Your name"} className={style.nameForm} onChange={() => {}}/>
                            <input placeholder={"Your email"} className={style.emailForm} onChange={() => {}}/>
                            <textarea placeholder={"Your message"} className={style.messageForm} onChange={() => {}}/>
                        </form>
                        <button className={style.button}>Send</button>
                    </div>
                </div>
            </Fade>
        </div>
    );
};