import React from 'react';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contact} from "./contact/Contact";
import {Footer} from "./footer/Footer";

export function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    );
}
