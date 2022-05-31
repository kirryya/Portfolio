import React from 'react';
import style from "./Header.module.scss"
import Nav from "../nav/Nav";

const Header = () => {
    return (
        <div className={style.header}>
            <div>
                <Nav/>
            </div>
        </div>
    );
};

export default Header;