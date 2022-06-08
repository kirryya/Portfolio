import React from 'react';
import Links from "./links/Links";
import styleContainer from "../common/styles/Container.module.scss";
import style from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footersContainer}`}>
                <h3>Andrei Kirylchyk</h3>
                <Links/>
                <span className={style.copyright}>© 2022 All rights reserved.</span>
            </div>
        </div>
    );
};

export default Footer;