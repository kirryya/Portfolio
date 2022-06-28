import React from 'react';
import style from "./Links.module.scss"
import telegram from "../../common/images/telegram.png"
import linkedin from "../../common/images/linkedin.png"
import github from "../../common/images/github.png"

const Links = () => {
    return (
        <div className={style.links}>
            <img className={style.image} src={telegram} alt={"telegram"}
                 onClick={() => window.open("https://t.me/andrei_kirylchyk")}/>
            <img className={style.image} src={github} alt={"github"}
                 onClick={() => window.open("https://github.com/kirryya")}/>
            <img className={style.image} src={linkedin} alt={"linkedin"}
                 onClick={() => window.open("https://www.linkedin.com/in/andrei-kirylchyk-313176239")}/>
        </div>
    );
};

export default Links;