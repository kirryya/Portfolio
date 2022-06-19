import React from 'react';
import style from "./Links.module.scss"
import instagram from "../../common/images/instagram.png"
import telegram from "../../common/images/telegram.png"
import viber from "../../common/images/viber.png"
import linkedin from "../../common/images/linkedin.png"
import github from "../../common/images/github.png"

const Links = () => {
    return (
        <div className={style.links}>
            <img className={style.image} src={instagram} alt={"instagram"} />
            <img className={style.image} src={telegram} alt={"telegram"} />
            <img className={style.image} src={viber} alt={"viber"} />
            <img className={style.image} src={linkedin} alt={"linkedin"} />
            <img className={style.image} src={github} alt={"github"} />
        </div>
    );
};

export default Links;