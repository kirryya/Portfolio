import React from 'react';
import style from "./Links.module.css"
import instagram from "../../common/images/instagram.png"
import telegram from "../../common/images/telegram.png"
import viber from "../../common/images/viber.png"

const Links = () => {
    return (
        <div className={style.links}>
            <img className={style.image} src={instagram} alt={"instagram"} />
            <img className={style.image} src={telegram} alt={"telegram"} />
            <img className={style.image} src={viber} alt={"viber"} />
        </div>
    );
};

export default Links;