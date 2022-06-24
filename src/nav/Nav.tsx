import React from 'react';
import style from "./Nav.module.scss"

const Nav = () => {

    const onClickHandler = (id: string) => {
        // @ts-ignore
        document.getElementById(id).scrollIntoView({block: "start", behavior: 'smooth'})
    }


    return (
        <div className={style.nav}>
            <h3 onClick={() => onClickHandler("main")}>Main</h3>
            <h3 onClick={() => onClickHandler("projects")}>Projects</h3>
            <h3 onClick={() => onClickHandler("skills")}>Skills</h3>
            <h3 onClick={() => onClickHandler("contact")}>Contact</h3>
        </div>
    );
};

export default Nav;