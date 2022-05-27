import React from 'react';
import style from "./Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";

const Contact = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contact</h2>
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