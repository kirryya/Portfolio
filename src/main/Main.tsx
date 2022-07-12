import React from 'react';
import style from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import avaImage from "../assets/image/Avatar.png";
import fontImage from "../assets/image/font_main.jpg";
import ReactTypingEffect from "react-typing-effect"
import Tilt from "react-parallax-tilt"

export const Main = () => {

    const avatar = {
        backgroundImage: `url(${avaImage})`
    }
    const font = {
        backgroundImage: `url(${fontImage})`
    }

    const Fade = require("react-reveal/Fade");

    return (
        <div className={style.mainBlock} style={font} id={"main"}>
            <div className={styleContainer.container}>
                <Fade left>
                    <div className={style.text}>
                        <span>Hi There</span>
                        <h1>I am Andrei Kirylchyk</h1>
                        <ReactTypingEffect text="Front-End Developer"/>
                        <p><span className={style.description}>I'm a result oriented front-end developer with experience in creating Landing Pages and SPA, using React(JS/TS), Redux, HTML & CSS. Now I am improving my skills in this direction and expanding them with new technologies. And also I'm interested in learning React Native</span></p>
                    </div>
                </Fade>
                <Fade right>
                    <Tilt>
                        <div className={style.photo} style={avatar}>
                        </div>
                    </Tilt>
                </Fade>
            </div>
        </div>
    );
};