import React from 'react';
import Links from "./links/Links";
import styleContainer from "../contacts/Contacts.module.css";
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footersContainer}`}>
                <h3>Andrei Kirylchyk</h3>
                <Links/>
                <span>© 2022 All rights reserved.</span>
            </div>
        </div>
    );
};

export default Footer;