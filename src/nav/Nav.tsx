import React from 'react';
import style from "./Nav.module.scss"

const Nav = () => {
    return (
        <div className={style.nav}>
            <h3>Main</h3>
            <h3>Projects</h3>
            <h3>Skills</h3>
            <h3>Contact</h3>
        </div>
    );
};

export default Nav;