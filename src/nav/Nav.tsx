import React from 'react';
import style from "./Nav.module.scss"

const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">Main</a>
            <a href="">Projects</a>
            <a href="">Skills</a>
            <a href="">Contact</a>
        </div>
    );
};

export default Nav;