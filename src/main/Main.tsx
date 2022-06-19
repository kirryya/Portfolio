import React from 'react';
import style from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import avaImage from "../assets/image/Avatar.png";
import fontImage from "../assets/image/font.jpg";

const Main = () => {

    const avatar = {
        backgroundImage: `url(${avaImage})`
    }
    const font = {
        backgroundImage: `url(${fontImage})`
    }

    return (
        <div className={style.mainBlock} style={font}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Andrei Kirylchyk</h1>
                    <p>Front-End Developer </p>
                    <span className={style.description}>I'm a result oriented front-end developer with experience in creating SPA, using React(JS/TS), Redux, HTML & CSS. Now I am improving my skills in this direction and expanding them with new technologies. And also I have interest to learn React Native</span>
                </div>
                <div className={style.photo} style={avatar}>

                </div>
            </div>
        </div>
    );
};

export default Main;