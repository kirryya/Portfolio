import React from 'react';
import style from "./Contacts.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import Title from "../common/components/title/Title";
import fontImage from "../assets/image/font.jpg";

const Contact = () => {

    const font = {
        backgroundImage: `url(${fontImage})`
    }

    return (
        <div className={style.contactsBlock} style={font}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={"Contact"}/>
                <div className={style.addForm}>
                    <form className={style.form}>
                        <input value={"Your name"} onChange={() => {}}/>
                        <input value={"Your email"} onChange={() => {}}/>
                        <textarea value={"Your message"} onChange={() => {}}/>
                    </form>
                    <button className={style.button}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;